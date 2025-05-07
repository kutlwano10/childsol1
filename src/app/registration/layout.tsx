'use client'

import RegistrationSidebar from "@/components/RegistrationSidebar";
import { usePathname } from "next/navigation";



export default function RegistrationRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()

  const isSuccessPage = pathname?.includes('/registration/success')
  return (
    <div className="flex p-8 min-h-screen ">
      {/* Sidebar is fixed */}
      {!isSuccessPage && (<RegistrationSidebar />)}

      {/* Main content area */}
      <main className={!isSuccessPage ? "ml-[380px] flex-1 flex justify-center": 'flex-1 flex justify-center'}>
        <div className="w-full  "> {/* This adds the m-6 equivalent */}
          <div className="bg-white rounded-2xl p-6 h-[calc(100vh-64px)] overflow-y-auto scroll-bar">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
