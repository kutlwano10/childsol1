'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const parents = [
  { name: 'Carol Lion', role: 'You', initials: 'CL' },
  { name: 'Evan Ndlovu', role: 'Parent', initials: 'EN' },
  { name: 'Evan Ndlovu', role: 'Parent', initials: 'EN' },
  { name: 'Evan Ndlovu', role: 'Parent', initials: 'EN' },
];

export default function ParentSelect() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(parents[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filteredParents = parents.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className=" " ref={ref}>
      <div
        className="bg-white rounded-xl border cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="bg-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-semibold">
              {selected.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-medium">{selected.name}</span>
              <span className="text-xs text-gray-500">
                {selected.role === 'You' ? '(You)' : selected.role}
              </span>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>

        {open && (
          <div className="border-t">
            <div className="relative p-2">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-3 py-2 w-full text-sm border-none focus:outline-none rounded-lg"
              />
            </div>
            <ul className="max-h-60 overflow-y-auto">
              {filteredParents.map((parent, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelected(parent);
                    setOpen(false);
                    setSearch('');
                  }}
                  className={`flex items-center justify-between px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 ${
                    selected.name === parent.name && selected.role === parent.role
                      ? 'bg-yellow-100'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-semibold">
                      {parent.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{parent.name}</span>
                      <span className="text-xs text-gray-500">
                        {parent.role === 'You' ? '(You)' : parent.role}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

