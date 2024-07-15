# YouTube Video Downloader with Nudity Detection

## Project Overview

This project is a comprehensive web application that combines YouTube video downloading capabilities with advanced nudity detection features. It's built using modern web technologies and follows best practices in software development.

### Key Features

1. YouTube video downloading using yt-dlp
2. Nudity detection in images and videos
3. Google Drive and Google Photos integration
4. User authentication and account management

## Technical Stack

### Frontend
- React.js with Vite as the build tool
- Tailwind CSS for styling
- shadcn/ui for UI components
- React Router for navigation
- React Query for state management and data fetching
- Framer Motion for animations

### Backend (Planned)
- Node.js with Express.js
- MongoDB for data storage
- Google Cloud APIs for Drive and Photos integration

## Coding Standards

1. Use functional components and hooks in React
2. Follow ESLint and Prettier configurations for code consistency
3. Implement proper error handling and logging
4. Write modular and reusable components
5. Use async/await for asynchronous operations
6. Implement proper state management using React Query
7. Follow SOLID principles in component and function design

## Commit History (Recent)

1. Initial project setup with Vite and React
2. Added basic routing and layout components
3. Implemented YouTube video download functionality
4. Added Google Drive setup page
5. Implemented Photo Setup page with nudity detection features
6. Enhanced UI with animations and responsive design

## Nudity Detection and Photos API Usage

The core feature of this project is its advanced nudity detection capability, integrated with Google Photos API. Here's a detailed overview:

### Nudity Detection

1. **Algorithm**: We use a machine learning model to analyze images and detect potential nudity or explicit content.
2. **Sensitivity Levels**: Users can adjust the sensitivity of the detection algorithm using a slider, allowing for customized filtering.
3. **Categorization**: Detected images are categorized into Mild, Moderate, and Severe based on the confidence level of the detection.

### Google Photos API Integration

1. **Authentication**: The application uses OAuth 2.0 to authenticate with Google Photos API, ensuring secure access to user's photos.
2. **Photo Retrieval**: We fetch photos from the user's Google Photos account in batches, optimizing for performance and respecting API rate limits.
3. **Metadata Analysis**: Along with the images, we retrieve and analyze metadata to provide additional context and improve detection accuracy.

### Workflow

1. User authenticates with their Google account
2. The app requests permission to access Google Photos
3. Photos are fetched and processed through the nudity detection algorithm
4. Results are displayed in a user-friendly interface with filtering and sorting options
5. Users can review flagged photos and take appropriate actions (delete, move, etc.)

### Privacy and Security

- All processing is done client-side to ensure user privacy
- No images are stored on our servers; we only work with data provided by Google Photos API
- Users have full control over which photos are analyzed and can revoke access at any time

## Project End Goal

The ultimate aim of this project is to provide a comprehensive solution for content creators, social media managers, and individuals to:

1. Easily download and manage YouTube videos
2. Automatically detect and filter potentially inappropriate content in their photo libraries
3. Streamline the process of content moderation and curation
4. Ensure compliance with platform guidelines and content policies

By combining these features, we aim to create a powerful tool that saves time, reduces the risk of accidental sharing of sensitive content, and provides peace of mind for users managing large media libraries.

## Future Enhancements

- Implement backend services for more robust processing and storage
- Extend nudity detection to video content
- Add support for other cloud storage providers
- Implement batch processing for large photo libraries
- Develop a mobile application for on-the-go content management

This project is continuously evolving, and we welcome contributions from the open-source community to help improve and expand its capabilities.