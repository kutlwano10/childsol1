"use client";

import Title from "@/components/ui/Title";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define TypeScript interfaces
interface Application {
  id: string;
  referenceNumber: string;
  status: ApplicationStatus;
  applicationDate: string;
  expectedCompletionDate: string;
}

// Define application status types
type ApplicationStatus = "received" | "review" | "approved" | "declined" | "waitingList";

// StatusInfo interface for display properties of each status
interface StatusInfo {
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  progressPercentage: number;
}

// Dummy data for applications
const dummyApplications: Application[] = [
  {
    id: "app001",
    referenceNumber: "REF12345",
    status: "received",
    applicationDate: "17 Jan, 2025 at 7:32 PM",
    expectedCompletionDate: "23 Jan, 2025",
  },
  {
    id: "app002",
    referenceNumber: "REF23456",
    status: "review",
    applicationDate: "15 Jan, 2025 at 2:15 PM",
    expectedCompletionDate: "22 Jan, 2025",
  },
  {
    id: "app003",
    referenceNumber: "REF34567",
    status: "approved",
    applicationDate: "12 Jan, 2025 at 9:45 AM",
    expectedCompletionDate: "20 Jan, 2025",
  },
  {
    id: "app004",
    referenceNumber: "REF45678",
    status: "declined",
    applicationDate: "10 Jan, 2025 at 11:30 AM",
    expectedCompletionDate: "18 Jan, 2025",
  },
  {
    id: "app005",
    referenceNumber: "REF56789",
    status: "waitingList",
    applicationDate: "14 Jan, 2025 at 3:20 PM",
    expectedCompletionDate: "25 Jan, 2025",
  },
];

export default function ApplicationTracker() {
  const [referenceNumber, setReferenceNumber] = useState<string>("");
  const [application, setApplication] = useState<Application | null>(null);
  const [showTracker, setShowTracker] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Look up application by reference number
  const handleSearch = () => {
    if (!referenceNumber.trim()) {
      setError("Please enter a reference number");
      return;
    }

    const foundApplication = dummyApplications.find(
      (app) => app.referenceNumber.toLowerCase() === referenceNumber.toLowerCase()
    );

    if (foundApplication) {
      setApplication(foundApplication);
      setShowTracker(true);
      setError("");
    } else {
      setError("No application found with this reference number");
      setShowTracker(false);
    }
  };

  // Status display information mapping
  const getStatusInfo = (status: ApplicationStatus): StatusInfo => {
    const statusMap: Record<ApplicationStatus, StatusInfo> = {
      received: {
        label: "In Progress",
        color: "text-yellow-500",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-300",
        progressPercentage: 33,
      },
      review: {
        label: "In Progress",
        color: "text-yellow-500",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-300",
        progressPercentage: 66,
      },
      approved: {
        label: "Approved",
        color: "text-green-500",
        bgColor: "bg-green-50",
        borderColor: "border-green-300",
        progressPercentage: 100,
      },
      declined: {
        label: "Declined",
        color: "text-red-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-300",
        progressPercentage: 100,
      },
      waitingList: {
        label: "Waiting List",
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-300",
        progressPercentage: 80,
      },
    };

    return statusMap[status];
  };

  // Get progress bar color based on status
  const getProgressBarColor = (status: ApplicationStatus): string => {
    switch (status) {
      case "approved":
        return "bg-green-400";
      case "declined":
        return "bg-red-400";
      case "waitingList":
        return "bg-blue-400";
      default:
        return "bg-yellow-400";
    }
  };

  // Get status icon background color
  const getStatusIconBgColor = (status: ApplicationStatus, currentStep: ApplicationStatus): string => {
    // Define the order of steps
    const steps: ApplicationStatus[] = ["received", "review", "approved"];
    
    // For received step (always completed when showing tracker)
    if (currentStep === "received") return "bg-yellow-400";
    
    // For review step
    if (currentStep === "review") {
      if (status === "received") return "bg-gray-200";
      else return "bg-yellow-400";
    }
    
    // For approved step
    if (currentStep === "approved") {
      if (status === "approved") return "bg-green-400";
      else if (status === "declined") return "bg-red-400";
      else if (status === "waitingList") return "bg-blue-400";
      else return "bg-gray-200";
    }
    
    return "bg-gray-200";
  };

  return (
    <>
      <div className="mt-8">
        <div className="absolute top-8 left-8">
          <Image
            src="/childsol.png"
            alt="ChildSol Logo"
            width={90}
            height={90}
            className="rounded-md object-cover"
          />
        </div>
      </div>
      
      <div className="p-6 w-full max-w-6xl mx-auto">
        {/* Reference Number Input */}
        <div className="border border-gray-300 rounded-lg bg-white p-6 mb-6 shadow-sm">
          <h2 className="text-gray-800 text-center font-medium text-lg mb-4">
            Application Reference Tracker
          </h2>
          <div className="flex mx-auto max-w-2xl gap-4">
            <input
              type="text"
              value={referenceNumber}
              onChange={(e) => setReferenceNumber(e.target.value)}
              placeholder="Enter your reference number"
              className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={handleSearch}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded font-medium transition-colors"
            >
              Track
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Application Progress Tracker */}
        {showTracker && application && (
          <>
            <div className={`border ${getStatusInfo(application.status).borderColor} rounded-lg ${getStatusInfo(application.status).bgColor} p-6 mb-6`}>
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <h2 className="text-gray-800 font-medium text-lg">
                    Application Progress Tracker
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Application Made in {application.applicationDate}
                  </p>
                </div>
                <Title level={2} className={`${getStatusInfo(application.status).color} font-medium`}>
                  {getStatusInfo(application.status).label}
                </Title>
              </div>
            </div>

            <div className="text-gray-600 mb-6">
              Application process expected to be completed by{" "}
              <Title level={6} className="font-medium">{application.expectedCompletionDate}</Title>
            </div>

            {/* Progress Bar */}
            <div className="relative mb-12">
              <div className="h-2 bg-gray-200 w-full rounded">
                <div
                  className={`h-2 ${getProgressBarColor(application.status)} rounded`}
                  style={{ width: `${getStatusInfo(application.status).progressPercentage}%` }}
                ></div>
              </div>

              {/* Progress Markers */}
              <div className="flex justify-between absolute w-full -mt-2">
                {/* Received Marker */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 ${getStatusIconBgColor(application.status, "received")} rounded-full flex items-center justify-center border-2 border-white`}>
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.894 2.553a1 1 0 0 0-1.788 0l-7 14a1 1 0 0 0 1.169 1.409l5-1.429A1 1 0 0 0 9 15.571V11a1 1 0 1 1 2 0v4.571a1 1 0 0 0 .725.962l5 1.428a1 1 0 0 0 1.17-1.408l-7-14z"></path>
                    </svg>
                  </div>
                  <Title level={6} className="text-sm mt-2 text-gray-700">
                    Application Received
                  </Title>
                </div>

                {/* Under Review Marker */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 ${getStatusIconBgColor(application.status, "review")} rounded-full flex items-center justify-center border-2 border-white`}>
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <Title level={6} className="text-sm mt-2 text-gray-700">Under Review</Title>
                </div>

                {/* Final Status Marker */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 ${getStatusIconBgColor(application.status, "approved")} rounded-full flex items-center justify-center border-2 border-white`}>
                    {application.status === "declined" ? (
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ) : application.status === "waitingList" ? (
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-12a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.828 2.829a1 1 0 1 0 1.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </div>
                  <Title level={6} className="text-sm mt-2 text-gray-700">
                    {application.status === "declined" 
                      ? "Application Declined" 
                      : application.status === "waitingList" 
                        ? "Waiting List" 
                        : "Application Approved"}
                  </Title>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}