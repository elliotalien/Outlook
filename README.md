# Email Client Application

This is a React-based email client application that allows users to view, read, and manage their emails.

## Features

- View a list of emails
- Read individual email messages
- Mark emails as read
- Mark emails as favorites
- Filter emails by read, unread, and favorites

## Components

- `App.jsx`: The main component that manages the application state and renders other components
- `EmailList.jsx`: Displays the list of emails
- `EmailItem.jsx`: Renders individual email items in the list
- `EmailBody.jsx`: Shows the full content of a selected email
- `FilterButtons.jsx`: Provides buttons to filter emails

## Hooks

- `useEmails.js`: Custom hook for managing email data and operations

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

## Usage

- Click on an email in the list to view its contents
- Use the filter buttons to sort emails by read, unread, or favorites
- Click the "Mark as favorite" button to add or remove an email from favorites

## API

This application uses a mock API for fetching email data:
- List of emails: `https://flipkart-email-mock.now.sh/`
- Email body: `https://flipkart-email-mock.now.sh/?id=<email_id>`

## Technologies Used

- React
- Tailwind CSS
- Fetch API

## Future Improvements

- Implement pagination for the email list
- Add search functionality
- Implement email composition and sending features
