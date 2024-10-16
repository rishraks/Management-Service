# Healthcare Service Management API

This API is designed for managing healthcare services, allowing users to create, read, update, and delete service records. Built with Node.js, Express.js, and MongoDB, it provides a simple interface for managing services, ensuring data integrity through validation and structured responses.

## Features
- **CRUD Operations**: Easily create, read, update, and delete services.
- **Validation**: Ensure valid input for service name, description, and price.
- **Auto-generated IDs**: Each service record has a unique identifier.

## Endpoints

### 1. Get All Services
- **URL**: `/service/find`
- **Method**: `GET`
- **Description**: Retrieves a list of all services.

### 2. Get Service by ID
- **URL**: `/service/find/:id`
- **Method**: `GET`
- **Description**: Fetches a service by its unique ID.
- **Response**:
    - **200 OK**: Returns the service object if found.
    - **404 Not Found**: Returns an error message if no service is found with the given ID.

### 3. Create a New Service
- **URL**: `/service/create`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "service_name": "string",
        "description": "string",
        "price": number
    }
    ```
- **Description**: Adds a new service record.
- **Response**:
    - **201 Created**: Returns the created service object.

### 4. Update a Service
- **URL**: `/service/update/:id`
- **Method**: `PUT`
- **Request Body**:
    ```json
    {
        "service_name": "string",
        "description": "string",
        "price": number
    }
    ```
- **Description**: Updates an existing service by its ID. Users can update only necessary fields.
- **Response**:
    - **200 OK**: Returns the updated service object.
    - **404 Not Found**: Returns an error message if no service is found with the given ID.

### 5. Delete a Service
- **URL**: `/service/delete/:id`
- **Method**: `DELETE`
- **Description**: Removes a service from the database by its ID.
- **Response**:
    - **204 No Content**: Indicates the service has been successfully deleted.
    - **404 Not Found**: Returns an error message if no service is found with the given ID.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the Project Directory: Change your current directory to the project folder:
    ```bash
    cd healthcare-service-management-api
    ```
3. Install Dependencies: Install the necessary Node.js packages by running:
    ```bash
    npm install
    ```
4. Set Up Environment Variables: Create a .env file in the root directory of the project and add the following variables:
   ```bash
   MONGODB_URI=<your-mongodb-connection-string>
   PORT=8080
   ```
   Replace <your-mongodb-connection-string> with your actual MongoDB connection string.

5. Start the Server: Start the API server with the following command:
   ```bash
   npm run start
   ```
   The server will run on http://localhost:8080.
6. Test the Endpoints: Use Postman or any other API testing tool to interact with the API endpoints.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
