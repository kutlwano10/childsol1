import React from 'react';
import ParentSelect from './ParentSelect';

const CommunicationMessages = () => {
  return (
    <div className="flex h-screen rounded-4xl bg-white font-sans">
      {/* Sidebar */}
      <div className="w-[300px] rounded-l-4xl bg-white border-r shadow-sm">
        <div className="px-6 py-4 text-sm text-gray-400 uppercase">Groups</div>
        <div className="px-6 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold text-sm">
              UE
            </div>
            <div>
              <div className="font-medium text-sm">Upcoming Events</div>
              <div className="text-xs text-gray-400">Ms Lee just liked the shared…</div>
            </div>
          </div>
          <div className="text-xs text-gray-400">12:04</div>
        </div>

        <div className="px-6 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
              GU
            </div>
            <div>
              <div className="font-medium text-sm">General Updates</div>
              <div className="text-xs text-gray-400">Ms Tee: Hi guys! I shared some…</div>
            </div>
          </div>
          <div className="text-xs text-gray-400">12:04</div>
        </div>

        <div className="px-6 py-4 text-sm text-gray-400 uppercase">Direct Messages</div>

        {[
          'Garrett Watson',
          'Caroline Santos',
          'Leon Nunez',
          'Oscar Holloway',
          'Ralph Haris',
        ].map((name, index) => (
          <div key={index} className="px-6 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-semibold text-sm">
                {name.split(' ')[1][0] + name.split(' ')[0][0]}
              </div>
              <div>
                <div className="font-medium text-sm">Mr {name}</div>
                <div className="text-xs text-gray-400">Hi! Please, change the Check…</div>
              </div>
            </div>
            <div className="text-xs text-gray-400">12:04</div>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1  flex flex-col">
        {/* Header */}
        <div className="bg-white relative flex justify-between rounded-tr-4xl px-6 py-3 border-b">
          <div className='whitespace-nowrap'>
              <div className="font-semibold text-green-700">Ms Lee Jane</div>
              <div className="text-sm text-gray-500">Teacher</div>
          </div>
          <div className='absolute top-0 w-1/3 right-0'>
              <div className='w-full'>
                  <ParentSelect />
              </div>
          </div>
        </div>

        {/* Date */}
        <div className="text-center text-xs text-gray-400 mt-4 mb-2">Friday, September 8</div>

        {/* Messages */}
        <div className="flex flex-col gap-4 px-6 overflow-y-auto pb-6">
          <div className="flex flex-col items-start">
            <div className="text-xs text-gray-400 mb-1">Ms Lee Jane 12:04 AM</div>
            <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm max-w-md">
              Hi Mrs. Moyo! Good afternoon. Thandi had such a lovely day today!
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="text-xs text-gray-400 mb-1">Evan Ndilovu 12:15 AM</div>
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm max-w-md">
              Oh that’s great to hear! What was she up to?
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="text-xs text-gray-400 mb-1">Ms Lee Jane 12:04 AM</div>
            <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm max-w-md">
              She really enjoyed storytime today. We read “The Very Hungry Caterpillar” and she was so engaged—she even remembered what came after the strawberries!
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="text-xs text-gray-400 mb-1">Evan Ndilovu 12:15 AM</div>
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm max-w-md">
              Haha, that’s her favorite! She makes me read it almost every night at home.
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="text-xs text-gray-400 mb-1">Ms Lee Jane 12:04 AM</div>
            <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm max-w-md">
              That makes sense! She also did really well with her shapes during activity time. She matched all of them correctly, even the tricky ones like hexagons.
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="text-xs text-gray-400 mb-1">Evan Ndilovu 12:15 AM</div>
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm max-w-md">
              Wow, I’m so proud of her. Was she okay emotionally today? She was a bit teary
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationMessages;
