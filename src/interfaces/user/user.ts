export interface User {
  id: string;
  email: string;
  password: string; // Note: In production, never store plain passwords
  role: "admin" | "staff" | "parent" | "super-admin";
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SuperAdmin extends User {
  role: "super-admin";
  accessLevel: "full" | "partial";
}
export interface Parent extends User {
  role: "parent";
  children: string[]; // Array of student IDs
  contactNumber: string;
}

export interface Staff extends User {
  role: "staff";
  position: string;
  department: string;
  contactNumber: string;
}

export interface Admin extends User {
  role: "admin";
  accessLevel: "full" | "partial";
}

export interface Student {
  id: string;
  name: string;
  grade: string;
  parentId: string;
  attendance: AttendanceRecord[];
  performance: PerformanceRecord[];
}

export interface AttendanceRecord {
  date: string;
  status: "present" | "absent" | "late";
  notes?: string;
}

export interface PerformanceRecord {
  subject: string;
  score: number;
  date: string;
  comments?: string;
}

export interface School {
  id: string;
  name: string;
  address: string;
  contactNumber: string;
  principal: string;
}
