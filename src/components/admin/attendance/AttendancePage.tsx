'use client';

import { useSearchParams } from 'next/navigation';
import Grades from '@/components/admin/attendance/Grades';
import ClassTable from '@/components/admin/attendance/classes/Class';
import ClassAttendance from '@/components/admin/attendance/ClassAttendance';

export default function AttendancePage() {
  const searchParams = useSearchParams();
  
  const view = searchParams.get('view') || 'grades';
  const grade = searchParams.get('grade');
  const classId = searchParams.get('class');

  return (
    <div className="p-4">
      {view === 'grades' && <Grades />}
      {view === 'classes' && grade && <ClassTable />}
      {view === 'attendance' && grade && classId && <ClassAttendance />}
    </div>
  );
}