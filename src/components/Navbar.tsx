'use client';

import React from 'react';
import {  useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import ButtonUi  from '@/components/ui/ButtonUi';

import { MagnifyingGlassIcon, ChevronDownIcon, ShoppingCartIcon, BellIcon } from '@heroicons/react/20/solid';
import { User2 } from 'lucide-react';

export default function Navbar() {
  const { user} = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    
    router.push(`/${user?.role}/profile`);
  };

  if (!user) return null;

  return (
    <div className="flex items-center justify-between w-full mb-6">
      {/* Search Bar */}
      <div className="flex w-md items-center bg-white rounded-xl px-3 py-2">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full outline-none px-2 py-1 text-sm text-gray-600"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button   className="rounded-xl bg-white p-3">
          <BellIcon className="h-6 w-6 text-[var(--color-secondary)]" />
        </button>

        {/* Shopping Cart */}
        <button onClick={()=> router.push(`/${user.role}/store/checkout`)} className="rounded-xl bg-white p-3">
          <ShoppingCartIcon className="h-6 w-6 text-[var(--color-secondary)]" />
        </button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ButtonUi variant="text" className="bg-white  flex items-center rounded-xl p-6">
              <span className="font-medium text-sm">Evan Ndlovu</span>
              <ChevronDownIcon className="h-5 w-5 text-[var(--color-secondary)] ml-1" />
            </ButtonUi>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-red-600"
            >
              <User2 className="h-4 w-4" />
              My Profile
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

