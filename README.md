# DevFolio

**DevFolio** is a platform for developers to showcase their portfolios and projects. Users can view, search, and interact with projects and profiles created by others.

## Live Demo

Check out the live version of DevFolio: [https://devfolio-gilt.vercel.app/](https://devfolio-gilt.vercel.app/)

## Features

- **Home Page**: Displays a collection of projects by various users.
- **Profiles Page**: Showcases user profiles, including details about the developer and their projects.
- **Your Profile Page**: A personalized page for each user, featuring:
  - **Profile Card**: Displays user information.
  - **Update Details**: Allows users to update their profile details.
  - **Add Project**: Lets users add new projects.
- **Search**: Easily search for specific projects or profiles.
- **Authentication**: Includes **Sign In** and **Sign Up** pages for user authentication.

## Tech Stack

The following technologies and packages power DevFolio:

- **Frontend**:
  - **Next.js**: Used as the primary React framework, with **Turbopack** for optimized development.
  - **React (v19.0.0)**: Core library for building the user interface.
  - **Tailwind CSS**: Utility-first CSS framework for building responsive, modern designs.
 
- **Backend**:
  - **Node.js**: Executes server-side JavaScript code and handles routing and API calls in the Next.js environment.
  - **MongoDB**: A NoSQL database used for storing user data, project details, and other application information.
  - **Mongoose**: A powerful object data modeling (ODM) library for MongoDB, used for database interactions.
  - **JWT (jsonwebtoken)**: Utilized for secure JSON Web Tokens (JWT) authentication.
  - **Bcrypt**: Handles password hashing to ensure secure storage and handling of user credentials.
  - **Nodemailer**: Sends authentication emails during the sign-up process to verify user accounts.
  - **Cloudinary**: Manages and hosts user-uploaded images (e.g., profile photos and project images).


- **Build and Development Tools**:
  - **Glob**: For handling file matching and manipulation.
  - **LRU-Cache**: A caching library to improve app performance with an efficient, least-recently-used caching strategy.
  - **Rimraf**: Cross-platform tool for removing files and folders.

## Getting Started locally

To run DevFolio locally, follow these steps:

(for npm)

1. **Clone the Repository**:
   git clone https://github.com/YonatanAriel/DevFolio.git 

2. **Install Dependencies**:
  npm install

3. **Start the Development Server**:
  npm run dev

