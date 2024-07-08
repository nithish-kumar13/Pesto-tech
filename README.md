# Task Manager Application

A simple task management application built with React and Django, featuring CRUD operations for tasks and task filtering.

# Table of Contents
* [Project Overview](#project-overview)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup Instructions](#setup-instructions)
* [API Endpoints](#api-endpoints)
* [Testing](#testing)
* [Security Considerations](#security-considerations)
* [Screenshots](#Screenshots)
* [Contributing](#contributing)
* [License](#license)

## Project Overview

This project implements a full-stack application for managing tasks. Users can create, read, update, and delete tasks with different statuses. It includes a frontend built with React and a backend API built with Django and Django Rest Framework.

## Technologies Used

- Frontend: React, Axios, CSS
- Backend: Django, Django Rest Framework, PostgreSQL
- Development Tools: Git, yarn

## Features

- User-friendly task creation and management interface.
- Task filtering by status (To Do, In Progress, Done).
- CRUD operations for tasks (Create, Read, Update, Delete).
- Responsive design for desktop and mobile devices.

## Setup Instructions

### Clone the repository

```bash
git clone https://github.com/nithish-kumar13/Pesto-tech.git
```

### Frontend (task-manager-frontend)

1. Navigate to the frontend directory:
   ```bash
   cd task-manager-frontend
   ```

2. Install dependencies using yarn:
    ```bash
    yarn
    ```

3. Start the frontend server:
    ```bash
    yarn start
    ```


### Backend  (task-manager-backend)

1. Navigate to the backend directory:
    ```bash
    cd task-manager-backend
    ```
2. Install dependencies using pip:
   ```bash
   pip install -r requirements.txt
   ```
3. Apply migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
4. Start the backend server:
   ```bash
   python manage.py runserver
   ```

## API Endpoints

- `GET /api/tasks/`: Retrieves a list of tasks.
- `POST /api/tasks/`: Creates a new task.
- `PATCH /api/tasks/:id/`: Updates the status of a task.
- `DELETE /api/tasks/:id/`: Deletes a task.

## Testing

### Frontend (task-manager-frontend)

Run tests using Jest and React Testing Library:

```bash
cd task-manager-frontend
yarn test
```

### Backend (task-manager-backend)

Run tests using Django testing framework:

```bash
cd task-manager-backend
python manage.py test
```

## Security Considerations

- Implemented CSRF protection for API requests.
- Input validation for task creation and updates.
- Restricted access to authenticated users only.

## Screenshots
![image](https://github.com/nithish-kumar13/Pesto-tech/assets/68284693/429d523b-53d5-4b1a-ac45-679f4e09756f)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

