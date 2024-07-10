# GPT-Engineer Integration Instructions

## Overview
This document provides instructions for integrating the backend with the existing frontend using GPT-Engineer. The integration involves setting up API endpoints, authentication methods, and other necessary backend configurations.

## Directory Structure
The project directory should be structured as follows:

```
/gpt-engineer
  /backend
    /controllers
    /models
    /routes
    /services
  /frontend
    /src
      /components
      /layouts
      /pages
      /styles
  /config
  /public
  /scripts
  /tests
```

## Backend Integration

### API Endpoints
1. **GET /api/videos**: Fetch a list of videos.
2. **POST /api/videos**: Add a new video.
3. **DELETE /api/videos/:id**: Delete a video by ID.
4. **PATCH /api/videos/:id**: Update a video by ID.

### Authentication
- Use JWT (JSON Web Token) for authentication.
- Implement middleware to protect routes that require authentication.

### Configuration
- Use environment variables for sensitive information such as API keys and database credentials.
- Create a `.env` file in the root directory with the following variables:
  ```
  DATABASE_URL=your_database_url
  JWT_SECRET=your_jwt_secret
  ```

## Frontend Integration

### API Calls
- Use the `fetch` API or a library like `axios` to make HTTP requests to the backend.
- Handle loading states and errors appropriately.

### Authentication
- Store the JWT token in local storage or cookies.
- Implement a context or state management solution to manage user authentication state.

### Error Handling
- Display user-friendly error messages for failed API requests.
- Log errors to an external service for monitoring and debugging.

## Additional Notes
- Ensure CORS is configured correctly to allow frontend requests to the backend.
- Write unit tests for both frontend and backend components.
- Use a linter and formatter to maintain code quality and consistency.

## Conclusion
Following these instructions will help you successfully integrate the backend with the existing frontend using GPT-Engineer. If you encounter any issues, refer to the documentation or seek assistance from the development team.