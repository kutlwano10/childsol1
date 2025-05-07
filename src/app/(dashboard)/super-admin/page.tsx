import AdminDashboard from '@/components/admin/dashboard/AdminDashboard'
import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'



export default function SuperAdmin() {
  return (
    <div><ProtectedRoute allowedRoles={['super-admin']}>
      <AdminDashboard />
    </ProtectedRoute></div>
  )
}
