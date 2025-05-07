export interface AttendanceRecord {
    id: string;
    guardianName: string;
    date: Date;
    checkIn: string;
    checkOut: string | null; // null means didn't check out
    className: string;
    contactNumber: string;
  }