import React from 'react';

function EmailBody({ email, onMarkAsFavorite }) {
  if (!email) return null;

  return (
    <div className="p-6 border border-[#CFD2DC] rounded-md bg-white shadow-sm">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-[#E54065] text-white flex items-center justify-center text-xl font-bold mr-4">
            {email.from.name[0].toUpperCase()}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1 text-[#636363]">{email.subject}</h2>
            <p className="text-sm text-[#636363]">{new Date(email.date).toLocaleString()}</p>
          </div>
        </div>
        <button 
          className="bg-[#E54065] text-white px-5 py-1.5 rounded-full text-[10px] cursor-pointer"
          onClick={onMarkAsFavorite}
        >
          {email.favorite ? "Remove from favorite" : "Mark as favorite"}
        </button>
      </div>
      <div 
        className="text-sm leading-relaxed text-gray-600 px-14 py-5"
        dangerouslySetInnerHTML={{ __html: email.body }} 
      />
    </div>
  );
}

export default EmailBody;
