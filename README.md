# Java AIO User Management Application

This repository contains a minimal user management application with a Spring Boot 3 backend and an Angular frontend. The backend uses an H2 in-memory database for demonstration purposes. A sample Helm chart is provided for deployment to Kubernetes.

## Backend

The backend code lives in the `backend/` directory. It is built with Maven.

### Build and run locally

```bash
cd backend
mvn spring-boot:run
```

### Build Docker image

```bash
mvn package
docker build -t user-management:latest .
```

## Frontend

A minimal Angular skeleton is available under `frontend/`. Install dependencies and run:

```bash
cd frontend
npm install
npm start
```

## Deploy with Helm

The Helm chart resides in `helm/user-management/`.

```bash
helm install user-management helm/user-management
```

## Continuous Integration

This repository uses a GitHub Actions workflow that builds the backend with Maven and the frontend with Angular whenever changes are pushed or a pull request is opened.
