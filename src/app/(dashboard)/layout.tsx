import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Button from "@/components/ui/Button";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex p-4 md:p-8 min-h-screen">
      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="fixed hidden rounded-2xl h-[calc(100vh-64px)] w-[240px] bg-[var(--color-primary)] text-white md:flex flex-col p-6 top-8 left-8">
        <Link
          className="flex items-center justify-center lg:justify-start gap-2"
          href={"#"}
        >
          <Image src={"/childsol.png"} alt="logo" width={85} height={85} />
        </Link>
        <Menu />
      </div>

      {/* Mobile Menu Button (visible only on mobile) */}
      <div className="md:hidden fixed top-4 left-4 z-50 rounded-r-3xl">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline"  className="bg-[var(--color-primary)] text-white">
              <MenuIcon className="h-5 w-5 text-gray-500" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] bg-[var(--color-primary)] text-white p-0">
            <div className="p-6">
              <Link
                className="flex items-center justify-center lg:justify-start gap-2 mb-6"
                href={"#"}
              >
                <Image src={"/childsol.png"} alt="logo" width={85} height={85} />
              </Link>
              <Menu />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content Area */}
      <main className="md:ml-[280px] flex-1 flex justify-center">
        <div className="w-full">
          <div className="rounded-2xl h-[calc(100vh-64px)] overflow-y-auto scroll-bar">
            <div className="hidden md:block">
              <Navbar  />
            </div>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
