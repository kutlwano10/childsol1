import React, { useState } from 'react';
import Image from 'next/image';
import { Comment } from '@/interfaces/comments/comments';
import Title from '@/components/ui/Title';



interface CommentsProps {
  comments: Comment[];
  onSendComment: (message: string) => void;
}


export default function CommentsCard({comments, onSendComment} :CommentsProps) {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
      if (message.trim()) {
        onSendComment(message);
        setMessage('');
      }
    };
  
    return (
      <div className="bg-white rounded-3xl  shadow p-4 max-w-sm w-full">
        <Title className='pb-8' level={4} >Comments</Title>
        
        <div className="space-y-4 mb-4  overflow-y-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start gap-4 space-y-4">
              <div className="shrink-0">
                {comment.author.avatar.startsWith('http') ? (
                  <Image 
                    src={comment.author.avatar} 
                    alt={comment.author.name} 
                    width={32} 
                    height={32} 
                    className="rounded-full" 
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                    {comment.author.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex-1 ">
                <div className="flex items-center gap-2">
                  <span className="font-medium"><Title level={6}>{comment.author.name}</Title></span>
                  <span className="text-gray-500 text-xs">{comment.timestamp}</span>
                </div>
                <p className="text-sm text-gray-800 mt-1">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative overflow-hidden  bottom-0 mt-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="w-full py-2 px-4 border border-gray-300 rounded-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
}



