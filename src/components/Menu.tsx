"use client";
import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  // UserIcon,
  UsersIcon,
  // AcademicCapIcon,
  BookOpenIcon,
  // ClockIcon,
  // ClipboardDocumentIcon,
  // DocumentCheckIcon,
  CalendarIcon,
  // BellAlertIcon,
  ChatBubbleLeftRightIcon,
  // Cog6ToothIcon,
  // QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon,
  // UserCircleIcon,
  ChartBarIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  visible?: string[];
  dynamicPrefix?: boolean;
  onClick?: () => void;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}


export default function Menu() {
  const { user, logout } = useAuth();
  const router = useRouter()

  const handleLogout = () => {
    logout();
    router.push('/')
  };

  if (!user) {
    return null;
  }

  const menuItems: MenuGroup[] = [
    {
      title: "ACADEMICS",
      items: [
        {
          icon: <HomeIcon className="h-5 w-5" />,
          label: "Schools",
          href: "schools",
          visible: ["super-admin"],
          dynamicPrefix: true,
        },
        {
          icon: <HomeIcon className="h-5 w-5" />,
          label: "Dashboard",
          visible: ["admin", "staff", "parent", "super-admin"],
          dynamicPrefix: true,
        },
        {
          icon: <UsersIcon className="h-5 w-5" />,
          label: "Profiles",
          href: "student-profiles",
          visible: ["admin", "super-admin"],
          dynamicPrefix: true,
        },
        {
          icon: <BookOpenIcon className="h-5 w-5" />,
          label: "Billing",
          href: "billing",
          visible: ["parent"],
          dynamicPrefix: true,
        },
        {
          icon: <BookOpenIcon className="h-5 w-5" />,
          label: "Payments",
          href: "payments",
          visible: ["admin", "staff", "super-admin"],
          dynamicPrefix: true,
        },
        // {
        //   icon: <ClockIcon className="h-5 w-5" />,
        //   label: "Timetable",
        //   href: '/timetable',
        // },
        // {
        //   icon: <ClipboardDocumentIcon className="h-5 w-5" />,
        //   label: "Exams",
        //   href: '/exams',
        // },
        // {
        //   icon: <DocumentCheckIcon className="h-5 w-5" />,
        //   label: "Assignments",
        //   href: '/assignments',
        // },
        {
          icon: <TicketIcon className="h-5 w-5" />,
          label: "Attendance",
          href: "attendance",
          visible: ["admin", "staff", "parent", "super-admin"],
          dynamicPrefix: true,
        },
      ],
    },
    {
      title: "MANAGEMENT",
      items: [
        {
          icon: <CalendarIcon className="h-5 w-5" />,
          label: "Events",
          href: "events",
          visible: ["admin", "staff", "parent", "super-admin"],
          dynamicPrefix: true,
        },
        // {
        //   icon: <BellAlertIcon className="h-5 w-5" />,
        //   label: "Announcements",
        //   href: '/announcements',
        // },
        {
          icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />,
          label: "Communication",
          href: "messages",
          visible: ["admin", "staff", "parent", "super-admin"],
          dynamicPrefix: true,
        },
        {
          icon: <ChartBarIcon className="h-5 w-5" />,
          label: "Daily Reports",
          href: "reports",
          visible: ["staff", "parent", "super-admin"],
          dynamicPrefix: true,
        },
        {
          icon: <ShoppingBagIcon className="h-5 w-5" />,
          label: "Store",
          href: "store",
          visible: ["admin", "staff", "parent", "super-admin"],
          dynamicPrefix: true,
        },
        {
          icon: <ChartBarIcon className="h-5 w-5" />,
          label: "Demographics",
          href: "demographics",
          visible: ["super-admin"],
          dynamicPrefix: true,
        },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        // {
        //   icon: <UserCircleIcon className="h-5 w-5" />,
        //   label: "profile",
        //   href: "profile",
        //   visible: ['admin',"staff", "parent", "super-admin"],
        //   dynamicPrefix: true,
        // },
        // {
        //   icon: <Cog6ToothIcon className="h-5 w-5" />,
        //   label: "Settings",
        //   href: "/settings",
        // },
        // {
        //   icon: <QuestionMarkCircleIcon className="h-5 w-5" />,
        //   label: "Help",
        //   href: "/help",
        // },
        {
          icon: <ArrowLeftOnRectangleIcon className="h-5 w-5" />,
          label: "Logout",
          onClick: handleLogout,
          visible: ["admin", "staff", "parent", "super-admin"],
          
        },
      ],
    },
  ];

  return (
    <div className="mt-4 text-base">
      {menuItems.map((group) => (
        <div className="flex flex-col gap-2 text-white" key={group.title}>
          {/* <h3 className="text-sm font-semibold uppercase text-gray-400 px-2">
            {group.title}
          </h3> */}
          <div className="flex flex-col gap-1">
            {group.items
              .filter((item) => {
                if (!item.visible) return true;
                return item.visible.includes(user.role);
              })
              .map((item) => (
                <div
                  key={item.label}
                  onClick={item.onClick}
                  className={`flex items-center rounded-xl hover:bg-white justify-start gap-4 text-white hover:text-secondary px-2 py-2 ${
                    item.onClick ? 'cursor-pointer' : ''
                  }`}
                >
                  <span className="w-5">{item.icon}</span>
                  {item.href ? (
                    <Link href={item.dynamicPrefix ? `/${user.role}/${item.href}` : `/${item.href}`}>
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
