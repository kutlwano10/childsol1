import Dashboard from "@/components/dashboard/Dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";
import React from "react";

export default function ParentPage() {
  return (
    <div>
      <ProtectedRoute allowedRoles={["parent"]}>
        <Dashboard />
      </ProtectedRoute>
    </div>
  );
}
