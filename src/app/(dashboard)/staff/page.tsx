import ProtectedRoute from "@/components/ProtectedRoute";
import StaffDashboard from "@/components/staff/dashboard/StaffDashboard";
import React from "react";

export default function TeacherPage() {
  return (
    <div>
      <ProtectedRoute allowedRoles={["staff"]}>
        <StaffDashboard />
      </ProtectedRoute>
    </div>
  );
}
