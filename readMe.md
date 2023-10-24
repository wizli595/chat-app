# Real-Time Chat App

A simple, real-time chat application built using React, Socket.io, and Express.

## Features

- **Real-time Messaging**: Experience instant communication.
- **Unique Chat Rooms**: Create or join rooms via a unique room ID.
- **Live Scroll**: Messages auto-scroll as they come in.
- **User Information**: Every message comes with the sender's username and timestamp.

## Quick Start

### Prerequisites

- Node.js
- npm (bundled with Node.js)

### Installation

1. **Clone the Repository**:
   - git clone <https://github.com/wizli595/chat-app>
   - cd chat-app
2. **Backend Setup**:

- Navigate to the backend directory:
  ```
  cd server
  ```
- Install dependencies:
  ```
  npm install
  ```

3. **Frontend Setup**:

- Navigate to the frontend directory:
  ```
  cd client
  ```
- Install dependencies:
  ```
  npm install
  ```

### Running the Application

1. **Backend**:

- Navigate to backend directory:
  ```
  cd server
  ```
- Start the server:
  ```
  npm run start:dev
  ```

2. **Frontend**:

- Navigate to frontend directory:
  ```
  cd clent
  ```
- Start the React app:
  ```
  npm run dev
  ```

Now, open `http://localhost:*****` in your browser to use the chat application.

## Usage

1. Start by entering a unique username.
2. Input a room ID. You can create a new one or join an existing room using its ID.
3. Click `go` to start chatting.
4. Type your message and hit send!

## Tech Stack

- **Frontend**: React
- **Backend**: Express - nodemon - cors
- **Real-time Engine**: Socket.io

## Contributing

We welcome contributions! If you'd like to contribute, feel free to fork the repository, make your changes, and then submit a pull request.
