import React from 'react';

function EmailItem({ email, onSelect }) {
  const { from, subject, short_description, date, read, favorite } = email;
  const avatar = from.name[0].toUpperCase();

  return (
    <div 
      className={`rounded-lg p-4 mb-4 cursor-pointer hover:shadow-md transition-shadow duration-200 ${
        read ? 'bg-white ' : 'bg-[#f2f2f2]'
      } border border-[#cfd2dc] hover:border-[#E54065]`}
      onClick={() => onSelect(email)}
    >
      <div className="flex items-start">
        <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
          {avatar}
        </div>
        <div className="flex-grow">
          <div className="text-sm text-[#636363]">From: <span className="font-bold">{from.name}</span> &lt;<span className="font-bold">{from.email}</span>&gt;</div>
          <div className="text-sm text-[#636363]">Subject: <span className="font-bold">{subject}</span></div>
          <div className="text-sm text-[#636363] mt-1">{short_description}</div>
          <div className="flex gap-5 items-center mt-2">
            <div className="text-xs text-[#636363]">{new Date(date).toLocaleString()}</div>
            {favorite && (
              <span className="text-xs text-pink-500 font-bold">Favorite</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailItem;
