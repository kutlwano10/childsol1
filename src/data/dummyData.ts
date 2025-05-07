// data/dummyData.ts
import { Admin, Parent, Staff, Student, School, SuperAdmin } from '@/interfaces/user/user';

export const dummySchool: School = {
  id: 'school-1',
  name: 'Sunshine Elementary',
  address: '123 Education Blvd, Learning City',
  contactNumber: '(555) 123-4567',
  principal: 'Dr. Sarah Johnson'
};

export const dummyAdmins: Admin[] = [
  {
    id: 'admin-1',
    email: 'admin@school.com',
    password: 'admin123', // In production, use hashed passwords
    role: 'admin',
    name: 'Principal Admin',
    accessLevel: 'full',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  }
];

export const dummySuperAdmin: SuperAdmin[] = [
  {
    id: 'admin-1',
    email: 'super-admin@school.com',
    password: 'super123', // In production, use hashed passwords
    role: 'super-admin',
    name: 'Principal Admin',
    accessLevel: 'full',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  }
];

export const dummyStaff: Staff[] = [
  {
    id: 'staff-1',
    email: 'staff@school.com',
    password: 'staff123',
    role: 'staff',
    name: 'John Smith',
    position: 'Math Teacher',
    department: 'Mathematics',
    contactNumber: '(555) 234-5678',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  },
  {
    id: 'staff-2',
    email: 'teacher2@school.com',
    password: 'teacher123',
    role: 'staff',
    name: 'Emily Davis',
    position: 'English Teacher',
    department: 'Languages',
    contactNumber: '(555) 345-6789',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  }
];

export const dummyParents: Parent[] = [
  {
    id: 'parent-1',
    email: 'parent1@school.com',
    password: 'parent123',
    role: 'parent',
    name: 'Michael Johnson',
    children: ['student-1', 'student-2'],
    contactNumber: '(555) 456-7890',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  },
  {
    id: 'parent-2',
    email: 'parent2@example.com',
    password: 'parent123',
    role: 'parent',
    name: 'Sarah Williams',
    children: ['student-3'],
    contactNumber: '(555) 567-8901',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  }
];

export const dummyStudents: Student[] = [
  {
    id: 'student-1',
    name: 'Emma Johnson',
    grade: '3rd Grade',
    parentId: 'parent-1',
    attendance: [
      { date: '2023-05-01', status: 'present' },
      { date: '2023-05-02', status: 'late', notes: 'Arrived at 9:15' }
    ],
    performance: [
      { subject: 'Math', score: 95, date: '2023-04-30' },
      { subject: 'English', score: 88, date: '2023-04-30' }
    ]
  },
  {
    id: 'student-2',
    name: 'Liam Johnson',
    grade: '5th Grade',
    parentId: 'parent-1',
    attendance: [
      { date: '2023-05-01', status: 'present' },
      { date: '2023-05-02', status: 'present' }
    ],
    performance: [
      { subject: 'Math', score: 90, date: '2023-04-30' },
      { subject: 'Science', score: 92, date: '2023-04-30' }
    ]
  },
  {
    id: 'student-3',
    name: 'Olivia Williams',
    grade: '4th Grade',
    parentId: 'parent-2',
    attendance: [
      { date: '2023-05-01', status: 'absent', notes: 'Sick' },
      { date: '2023-05-02', status: 'present' }
    ],
    performance: [
      { subject: 'English', score: 95, date: '2023-04-30' },
      { subject: 'Art', score: 98, date: '2023-04-30' }
    ]
  }
];

export const allUsers = [...dummyAdmins, ...dummyStaff, ...dummyParents, ...dummySuperAdmin];