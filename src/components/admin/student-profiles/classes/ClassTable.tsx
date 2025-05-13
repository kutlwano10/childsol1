import React from "react";
import { Table, Column } from "@/components/ui/table/Table"; // adjust path as needed
import Button from "@/components/ui/ButtonUi";
import { useRouter } from "next/navigation";
import Title from "@/components/ui/Title";

type ClassItem = {
  id: string;
  staffName: string;
  className: string;
  school: string;
  numberOfStudents: number;
  actionLabel: string;
};

const classData: ClassItem[] = [
  {
    id: "1",
    staffName: "Mrs Leea",
    className: "CA",
    school: "Blue Hills",
    numberOfStudents: 35,
    actionLabel: "View",
  },
  {
    id: "2",
    staffName: "Mrs Karabo",
    className: "CB",
    school: "Blue Hills",
    numberOfStudents: 35,
    actionLabel: "View",
  },
];

const ClassTable: React.FC = () => {
  const router = useRouter();
  const columns: Column<ClassItem>[] = [
    {
      key: "staffName",
      header: "Name of Staff",
    },
    {
      key: "className",
      header: "Class",
    },
    {
      key: "school",
      header: "School",
    },
    {
      key: "numberOfStudents",
      header: "Number of students",
    },
    {
      key: "action",
      header: "",
      render: (item) => (
        <Button
          onClick={() => router.push("/admin/student-profiles/classes/class")}
          className=""
        >
          {item.actionLabel}
        </Button>
      ),
      align: "right",
    },
  ];
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <Title level={6} className="">
        Class
      </Title>
      <Table data={classData} columns={columns} />
    </div>
  );
};

export default ClassTable;
