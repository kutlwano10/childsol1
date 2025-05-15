
'use client';

import { Loader2 } from 'lucide-react';

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white">
        <Loader2 className="h-12 w-12 text-white animate-spin" />
      </div>
    </div>
  );
}