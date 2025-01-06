# Brainly Backend API

Welcome to the official documentation and source code for the **Brainly Backend API**. This API powers the Brainly platform, providing functionality to manage users, content, and brain-related data.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Contents Routes](#contents-routes)
  - [Brain Routes](#brain-routes)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

The Brainly Backend API is designed to handle user management, content creation and management, and brain-related operations (which may include content recommendations, sharing, etc.). This API is part of the Brainly platform, which provides educational tools for users.

## Features

- User Authentication and Management
  - Registration
  - Login
  - Profile management
- Content Management
  - Create, update, retrieve, and delete content
- Brain Operations
  - Shareable content and data interactions

## API Endpoints

### User Routes

- **`GET /api/v1/user`**
  - Description: Get details of the authenticated user.
  
- **`POST /api/v1/user/signup`**
  - Description: Register a new user.
  - Body: 
    ```json
    {
      "email": "user@example.com",
      "password": "your_password"
    }
    ```

- **`POST /api/v1/user/signin`**
  - Description: User login.
  - Body:
    ```json
    {
      "email": "user@example.com",
      "password": "your_password"
    }
    ```

### Contents Routes

- **`GET /api/v1/contents`**
  - Description: Retrieve all content.

- **`POST /api/v1/contents`**
  - Description: Create new content.
  - Body:
    ```json
    {
      "title": "Sample Content",
      "description": "Content description here"
    }
    ```

- **`PUT /api/v1/contents/:id`**
  - Description: Update existing content by ID.
  - Parameters:
    - `id`: Content ID
  - Body:
    ```json
    {
      "title": "Updated Content Title",
      "description": "Updated description"
    }
    ```

- **`DELETE /api/v1/contents/:id`**
  - Description: Delete content by ID.
  - Parameters:
    - `id`: Content ID

### Brain Routes

- **`GET /api/v1/brain/share`**
  - Description: Get brain-related data.
  
- **`POST /api/v1/brain/:shareLink`**
  - Description: Share a specific brain-related link.
  - Parameters:
    - `shareLink`: A shareable link (for example, a content link).

## Installation

To run this project locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/brainly-backend-api.git
   cd brainly-backend-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root of the project and configure the necessary variables, such as:
     ```
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/brainly
     JWT_SECRET=your_secret_key
     ```

4. Run the server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   - Visit `http://localhost:3000` to start interacting with the API.

## Usage

The API provides endpoints that handle user management, content creation, and brain-related functionality. You can interact with the endpoints through HTTP requests using tools like Postman, curl, or directly in your application.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database for storing user and content data.
- **Mongoose**: ODM (Object Document Mapper) for MongoDB.
- **JWT (JSON Web Token)**: For user authentication and authorization.
- **TypeScript**: JavaScript superset for building scalable and maintainable applications.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.


## Contact

- **Suraj Vishwakarma**  
  Visit my portfolio: [https://www.surajv.me](https://www.surajv.me)  
  Email: [your.email@example.com](mailto:your.email@example.com)

---

Thank you for using the Brainly Backend API! Happy coding! 🚀
