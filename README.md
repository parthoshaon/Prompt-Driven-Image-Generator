# Prompt Driven MERN Image Generation App

The Prompt Driven MERN Image Generation App is a comprehensive web application that leverages the capabilities of a machine learning model trained on the ImageNet dataset to allow users to create custom images. The application's backend and frontend are built using the MERN (MongoDB, Express, React, Node.js) stack, offering a seamless user experience and robust functionality.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Authors](#authors)
- [License](#license)

## Features

- Generate images using text prompts
- User authentication and authorization
- MongoDB Atlas integration
- RESTful API for backend routes
- React front-end with Material UI

## Getting Started

### Prerequisites

To use the application, you'll need to have the following software installed on your computer:

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/parthoshaon/Prompt-Driven-Image-Generator.git
    ```


2. Install the dependencies in the root directory.
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following environment variables:
    ```bash
    MONGODB_URL = "YOUR_MONGODB_URL"

    CLOUDINARY_CLOUD_NAME = "YOUR_CLOUDINARY_CLOUD_NAME"
    CLOUDINARY_API_KEY = "YOUR_CLOUDINARY_API_KEY"
    CLOUDINARY_API_SECRET = "YOUR_CLOUDINARY_API_SECRET"
    ```

4. Start the backend server.
    ```bash
    npm start
    ```

5. Start the frontend server.
    ```bash
    npm run dev
    ```

6. Open your browser and go to 
    
    ```bash
    `http://localhost:5173/`.
    ```

## Usage

To generate an image, simply enter a descriptive text prompt into the input field and click the "Generate" button. The machine learning model will then use this prompt to generate a corresponding image that will be displayed on the screen.

## Built With

- MongoDB - NoSQL database
- Express - Web application framework for Node.js
- React - JavaScript library for building user interfaces
- Node.js - JavaScript runtime for building server-side applications
- TensorFlow.js - Machine learning library for JavaScript
- Axios - Promise-based HTTP client
- Material UI - React component library

## Authors

- Partho Shaon - [@parthoshaon](https://github.com/parthoshaon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

