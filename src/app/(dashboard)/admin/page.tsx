
import React from "react";
import AdminDashboard from "@/components/admin/dashboard/AdminDashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminPage() {
  return (
    <>
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminDashboard />
      </ProtectedRoute>
    </>
  );
}
