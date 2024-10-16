import React, { useState, useEffect } from "react";
import EmailList from "./components/EmailList";
import EmailBody from "./components/EmailBody";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Fetch emails from API
    fetch("https://flipkart-email-mock.now.sh/")
      .then((response) => response.json())
      .then((data) =>
        setEmails(
          data.list.map((email) => ({ ...email, read: false, favorite: false }))
        )
      )
      .catch((error) => console.error("Error fetching emails:", error));
  }, []);

  const handleEmailSelect = (email) => {
    // Fetch email body
    fetch(`https://flipkart-email-mock.now.sh/?id=${email.id}`)
      .then(response => response.json())
      .then(data => {
        setSelectedEmail({ ...email, body: data.body });
        // Mark email as read
        setEmails(emails.map(e => e.id === email.id ? { ...e, read: true } : e));
      })
      .catch((error) => console.error("Error fetching email body:", error));
  };

  const handleMarkAsFavorite = (emailId) => {
    setEmails(
      emails.map((email) =>
        email.id === emailId ? { ...email, favorite: !email.favorite } : email
      )
    );
    if (selectedEmail && selectedEmail.id === emailId) {
      setSelectedEmail({ ...selectedEmail, favorite: !selectedEmail.favorite });
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSelectedEmail(null); // Close the opened message box when filter changes
  };

  const filteredEmails = emails.filter((email) => {
    if (filter === "favorites") return email.favorite;
    if (filter === "read") return email.read;
    if (filter === "unread") return !email.read;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto p-5 w-full min-h-screen">
      <FilterButtons setFilter={handleFilterChange} currentFilter={filter} />
      <div className="flex gap-5">
        <div className={`${selectedEmail ? 'flex-1' : 'flex-1 w-full'}`}>
          <EmailList
            emails={filteredEmails}
            onSelectEmail={handleEmailSelect}
          />
        </div>
        {selectedEmail && (
          <div className="w-[60%]">
            <EmailBody
              email={selectedEmail}
              onMarkAsFavorite={() => handleMarkAsFavorite(selectedEmail.id)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
