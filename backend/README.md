# Backend Setup with Docker

## Prerequisites

- Docker installed on your machine
- Docker Compose installed on your machine

## Steps to Load Docker Containers

1. **Create a `.env` file**:
   Create a `.env` file in the `backend` directory and add the necessary environment variables. Refer to the `.env.example` file for the required environment variables.

2. **Build and start the Docker containers**:
   Navigate to the `backend` directory and run the following command:
    ```sh
    docker-compose up --build
    ```

3. **Access the application**:
   Once the containers are up and running, you can access the application at `http://localhost:<port>`. The port number is specified in the `.env` file.