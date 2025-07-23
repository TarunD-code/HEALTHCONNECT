# HEALTHCONNECT – Hospital Appointment Booking System

## Overview
HEALTHCONNECT is an enterprise-grade, secure, and scalable hospital appointment booking system. It provides robust REST APIs for managing hospital appointments, user authentication, role-based access, audit trails, and more. Designed for real-world hospital workflows, it is ready for production deployment and extensible for advanced features like notifications, payments, and analytics.

## Features
- **User Authentication & Authorization**: JWT-based, with roles (admin, doctor, patient)
- **Appointment Management**: Book, update, cancel, and view appointments
- **Double-Booking Prevention**: Ensures doctors cannot be booked for overlapping slots
- **Audit Trail**: Tracks who created, updated, or deleted appointments
- **Role-Based Access**: Admin, doctor, and patient have different permissions
- **Filtering & Pagination**: For efficient appointment listing
- **API Documentation**: Swagger UI at `/api/docs`
- **Security**: Helmet, rate limiting, input validation, CORS
- **Logging**: Winston (file/console), Morgan (HTTP)
- **Health & Readiness Endpoints**: For monitoring and orchestration
- **Testing**: Jest & Supertest for automated tests
- **Production Ready**: Dockerfile, environment configs

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT, bcrypt
- **Validation**: express-validator
- **Logging**: Winston, Morgan
- **API Docs**: Swagger (swagger-ui-express, swagger-jsdoc)
- **Security**: Helmet, express-rate-limit, CORS
- **Testing**: Jest, Supertest
- **Containerization**: Docker

## Folder Structure
```
backend/
  controllers/         # Business logic for routes
  middlewares/         # Auth, error handling, etc.
  models/              # Mongoose schemas
  routes/              # Express route definitions
  utils/               # Logger, helpers
  config/              # Swagger, configs
  logs/                # Winston log files
  tests/               # Jest/Supertest tests
  Dockerfile           # For containerization
  index.js             # App entry point
  package.json         # Dependencies & scripts
```

## Setup & Installation
1. **Clone the repository:**
   ```sh
git clone https://github.com/TarunD-code/HEALTHCONNECT.git
cd HEALTHCONNECT/backend
```
2. **Install dependencies:**
   ```sh
npm install
```
3. **Set up environment variables:**
   Create a `.env` file in `backend/`:
   ```env
MONGO_URI=mongodb://localhost:27017/healthconnect
PORT=5000
JWT_SECRET=your_jwt_secret
```
4. **Start MongoDB:**
   Ensure MongoDB is running locally or update `MONGO_URI` for remote DB.
5. **Run the server:**
   ```sh
npm run dev
```
   The server runs on `http://localhost:5000` by default.

## API Documentation
- **Swagger UI:** [http://localhost:5000/api/docs](http://localhost:5000/api/docs)
- All endpoints, request/response schemas, and authentication flows are documented here.

## Key Endpoints
- `POST   /api/auth/register` – Register a new user
- `POST   /api/auth/login` – Login and receive JWT
- `GET    /api/users/me` – Get current user profile
- `GET    /api/users` – (Admin) List all users
- `PUT    /api/users/:id/role` – (Admin) Update user role
- `DELETE /api/users/:id` – (Admin) Delete user
- `POST   /api/appointments` – (Patient) Book appointment
- `GET    /api/appointments` – (Admin/Doctor/Patient) List appointments (role-based)
- `GET    /api/appointments/:id` – Get appointment details
- `PUT    /api/appointments/:id` – (Admin/Doctor) Update appointment
- `DELETE /api/appointments/:id` – (Admin) Delete appointment
- `GET    /health` – Health check
- `GET    /readiness` – Readiness check

## Testing the Backend
1. **Run automated tests:**
   ```sh
npm test
```
   - Uses Jest and Supertest for integration tests (see `tests/` folder).
2. **Manual API testing:**
   - Use Postman, Insomnia, or cURL to interact with endpoints.
   - Authenticate using JWT (see `/api/auth/login` response).
   - Explore and test all endpoints via Swagger UI.

## Docker Deployment
1. **Build the Docker image:**
   ```sh
docker build -t healthconnect-backend .
```
2. **Run the container:**
   ```sh
docker run -d -p 5000:5000 --env-file .env healthconnect-backend
```

## Extending the Project
- Add notifications (email/SMS), payments, analytics, multi-tenancy, etc.
- Integrate with frontend (Angular, React, or mobile app) via REST APIs.

## License
This project is for educational and demonstration purposes. For production use, ensure compliance with healthcare regulations (HIPAA, GDPR, etc.).
