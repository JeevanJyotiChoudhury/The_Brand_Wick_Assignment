# The_Brand_Wick_Assignment

## Introduction

- This project is an example of web application that allows the registration of users and signup as well. In this application security is implemented by securing API endpoints, using JWT for authentication(generated when logged in using correct credentials), bcrypt for hasing passwords and using MongoDB with Mongoose for secure storage of data.

## Deplolyed App

- https://the-brand-wick-assignment.vercel.app/

## Features

- User's signup and login.

## Installation & Getting started

- Cloning- git clone https://github.com/JeevanJyotiChoudhury/The_Brand_Wick_Assignment.git
  -> cd The_Brand_Wick_Assignment

- .env setup
  -> mongoURL - your mongodb databse url
  -> port - any port of your choice || 8080

- BACKEND
  -> cd backend
  -> npm install (to install dependencies)
  -> npm run server (to start the backend server locally)

-FRONTEND
-> cd frontend
-> npm install (to install dependencies)
-> npm run start (to start frontend application locally)

## APIs Used

- BE :- https://gold-relieved-cormorant.cyclic.app

## API Endpoints

- /user
  -> POST - /register
  -> POST - /login

## Technology Stack

- React.js
- Node.js
- Express.js
- MongoDB
- Chakra UI
