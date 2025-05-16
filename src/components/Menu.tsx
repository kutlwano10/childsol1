"use client";
import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  UsersIcon,
  BookOpenIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import { ShoppingBagIcon, User2 } from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/20/solid";

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
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
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
          onClick() {
            router.push(`/${user.role}`)
          },
          visible: ["admin", "staff", "parent", "super-admin"],
          dynamicPrefix: true,
        },
        {
          icon: <UsersIcon className="h-5 w-5" />,
          label: "Manage Erollments",
          href: "student-profiles",
          visible: ["admin"],
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
          icon: <User2 className="h-5 w-5" />,
          label: "Profile",
          href: "profile",
          visible: ["parent"],
          dynamicPrefix: true,
        },
        {
          icon: <BookOpenIcon className="h-5 w-5" />,
          label: "Payments",
          href: "payments",
          visible: ["admin", "staff"],
          dynamicPrefix: true,
        },
        {
          icon: <TicketIcon className="h-5 w-5" />,
          label: "Attendance",
          href: "attendance",
          visible: ["admin", "staff", "parent"],
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
          visible: ["admin", "staff", "parent"],
          dynamicPrefix: true,
        },
        {
          icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />,
          label: "Communication",
          href: "communication",
          visible: ["admin", "staff", "parent"],
          dynamicPrefix: true,
        },
        {
          icon: <ChartBarIcon className="h-5 w-5" />,
          label: "Daily Reports",
          href: "reports",
          visible: ["staff", "parent"],
          dynamicPrefix: true,
        },
        {
          icon: <ShoppingBagIcon className="h-5 w-5" />,
          label: "Store",
          href: "store",
          visible: ["admin", "staff", "parent"],
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
        {
          icon: <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />,
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
        <div className="flex flex-col gap-1">
          {group.items
            .filter((item) => {
              if (!item.visible) return true;
              return item.visible.includes(user.role);
            })
            .map((item) => (
              <div
                key={item.label}
                className={`flex items-center rounded-xl hover:bg-white justify-start gap-4 text-white hover:text-secondary px-2 py-2 ${
                  item.onClick || !item.href ? "cursor-pointer" : ""
                }`}
              >
                <span className="w-5">{item.icon}</span>
                {item.href ? (
                  <Link
                    href={
                      item.dynamicPrefix
                        ? `/${user.role}/${item.href}`
                        : `/${item.href}`
                    }
                    onClick={item.onClick}
                    className="w-full"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span onClick={item.onClick} className="w-full">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    ))}
  </div>
);
}
