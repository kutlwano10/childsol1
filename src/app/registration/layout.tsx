"use client";

import RegistrationSidebar from "@/components/RegistrationSidebar";
import { usePathname } from "next/navigation";
import {
  RegistrationProvider,
  useRegistration,
} from "../context/RegistrationContext";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useRef, useEffect } from "react";

export default function RegistrationRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isSuccessPage = pathname?.includes("/registration/track");
  return (
    <RegistrationProvider>
      <RegistrationLayoutContent isSuccessPage={isSuccessPage}>
        {children}
      </RegistrationLayoutContent>
    </RegistrationProvider>
  );
}

function RegistrationLayoutContent({
  isSuccessPage,
  children,
}: {
  isSuccessPage: boolean;
  children: React.ReactNode;
}) {
  const { isLoading, currentStep } = useRegistration();

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Try container scroll first
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Fallback to window scroll
    else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentStep]);

  return (
    <div className="flex p-8 min-h-screen relative">
      {/* Loading overlay */}
      {isLoading && <LoadingOverlay />}

      {/* Sidebar is fixed */}
      {!isSuccessPage && <RegistrationSidebar />}

      {/* Main content area */}
      <main
        className={
          !isSuccessPage
            ? "ml-[380px] flex-1 flex justify-center"
            : "flex-1 flex justify-center"
        }
      >
        <div className="w-full">
          <div
            ref={contentRef}
            className="bg-white rounded-2xl p-6 h-[calc(100vh-64px)] overflow-y-auto scroll-bar"
          >
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
