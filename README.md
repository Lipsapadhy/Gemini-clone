Gemini Clone

This project is a clone of the Gemini app built using React and Vite. It demonstrates the use of modern web development tools like Vite for faster builds and React for component-based architecture. The project is developed using JavaScript, HTML, and CSS.

⚠️ Important Notice

Due to recent changes in Google Gemini's API after a major API code leak incident, the original API used in this project no longer works.
If you clone this repository, you must add your own Gemini API key in the environment file.
Once you add your own valid API key and run the project locally, the app will work correctly.

Table of Contents

About

Features

Technologies Used

Setup Instructions

Usage

Deployment

Contributing

License

About

This repository contains a web application built as a clone of the Gemini app, providing a similar user interface and functionality. The application is designed to be fast and responsive, leveraging Vite as the build tool and React for the UI.

Features

Modern UI: Mimics the Gemini app interface with a responsive layout.

Fast Development Build: Utilizes Vite for a quick and efficient development experience.

Component-Based Architecture: Built using React, making it scalable and maintainable.

Responsive Design: Fully responsive CSS ensures the app works across screen sizes.

Technologies Used

React – For building the user interface

Vite – For fast builds and development

JavaScript – For interactivity

HTML – Structure of the application

CSS – Styling and layout

Setup Instructions
1. Clone the repository
git clone https://github.com/Lipsapadhy/Gemini-clone.git
cd gemini-clone

2. Install dependencies

Using npm:

npm install


Using yarn:

yarn install

3. Add your own Gemini API key (IMPORTANT)

Create a .env file in the project root:

VITE_GEMINI_API_KEY=your_api_key_here


Without this key, the app will not function due to Google's updated security changes.

4. Run the development server

Using npm:

npm run dev


Using yarn:

yarn dev


The app will open at:

http://localhost:5173/Gemini-clone/

Usage

Open the app in your browser

Interact with the UI

Modify any file inside the src/ folder

The browser automatically reloads changes with Vite’s HMR

Deployment

A live version of the Gemini clone can be viewed here:

Gemini Clone Deployment
(Insert your live link here)

Contributing

Fork the repository

Create a new branch:

git checkout -b feature-branch


Commit your changes:

git commit -m "Add new feature"


Push your branch:

git push origin feature-branch


Open a Pull Request with details about your changes

License

This project is open-source and available under the MIT License.
