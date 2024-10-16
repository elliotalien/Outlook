import React from 'react';
import EmailItem from './EmailItem';

function EmailList({ emails, onSelectEmail }) {
  return (
    <div className="flex flex-col space-y-2.5 ">
      {emails.map(email => (
        <EmailItem key={email.id} email={email} onSelect={() => onSelectEmail(email)} />
      ))}
    </div>
  );
}

export default EmailList;
