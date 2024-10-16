import { useState, useEffect } from 'react';

function useEmails() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await fetch('https://flipkart-email-mock.now.sh/');
      const data = await response.json();
      setEmails(data.list.map(email => ({ ...email, read: false, favorite: false })));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const markAsFavorite = (id) => {
    setEmails(emails.map(email =>
      email.id === id ? { ...email, favorite: !email.favorite } : email
    ));
  };

  const markAsRead = (id) => {
    setEmails(emails.map(email =>
      email.id === id ? { ...email, read: true } : email
    ));
  };

  return { emails, loading, error, markAsFavorite, markAsRead };
}

export default useEmails;