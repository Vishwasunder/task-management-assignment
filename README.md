### Task Management API

---

## **Introduction**

The Task Management API is a RESTful service built using Node.js, Express.js, and MongoDB. It allows users to perform CRUD operations on tasks, with additional features like filtering, sorting, pagination, and validation.

This API was designed following RESTful principles and includes robust error handling, efficient database interactions, and adherence to modern backend development practices.

---

## **Features**

1. Create tasks with attributes like title, description, status, priority, and due date.
2. Retrieve tasks with support for filtering, sorting, and pagination.
3. Update task attributes and timestamps dynamically.
4. Delete tasks securely and return appropriate responses.
5. Input validation using Joi for data integrity.
6. Centralized error handling for predictable API behavior.

---

## **Tech Stack**

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Framework for building the RESTful API.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: ODM for interacting with MongoDB.
- **Joi**: Library for input validation.
- **dotenv**: For managing environment variables.

---

## **Design Decisions**

### **1. RESTful API Design**
- Clear separation of concerns with dedicated routes for tasks (`/tasks`).
- Use of proper HTTP methods (POST, GET, PUT, DELETE).
- Consistent response structure with appropriate status codes.

### **2. Data Model**
- Designed with flexibility to accommodate future features like task assignment or notifications.
- Enum fields for `status` and `priority` ensure controlled input.

### **3. Validation**
- Input data validated at the controller level using Joi.
- Prevents invalid or malformed data from being processed.

### **4. Error Handling**
- Centralized error middleware ensures uniform error responses.
- Custom error messages improve debugging and API usability.

### **5. Modularity**
- Controllers, routes, and models are split into separate files for better maintainability.
- Reusable utility files like validation schemas.

### **6. Pagination and Filtering**
- Optimized for handling large datasets using query parameters like `limit`, `skip`, `status`, and `priority`.

---

## **Setup Instructions**

### **1. Prerequisites**
- Node.js (version 14+)
- MongoDB Atlas or local MongoDB setup
- Code editor (e.g., VS Code)
- Postman or cURL for testing

### **2. Installation**

1. Clone the repository:
   ``
   git clone <repository-url>
   cd task-management-api
   ```

2. Install dependencies:
   ``
   npm install
   ```

3. Create a `.env` file in the project root:
   ``
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/tasks
   PORT=5000
   ```

4. Replace `<username>` and `<password>` with your MongoDB Atlas credentials or local MongoDB connection string.

---

### **3. Run the Application**

1. Start the server:
   ```bash
   npm start
   ```

2. The API will be available at:
   `
   http://localhost:5000
   ```

---

## **API Endpoints**

### **1. POST `/tasks`**
- **Description**: Create a new task.
- **Body**: 
  ```json
  {
    "title": "Complete the project",
    "description": "Finish the coding challenge",
    "priority": "HIGH",
    "dueDate": "2024-12-31"
  }
  ```

---

### **2. GET `/tasks`**
- **Description**: Retrieve all tasks.
- **Query Parameters**:
  - `status`: Filter by task status (`TODO`, `IN_PROGRESS`, `COMPLETED`).
  - `priority`: Filter by task priority (`LOW`, `MEDIUM`, `HIGH`).
  - `sort`: Sort by `createdAt` or `dueDate`.
  - `limit`: Number of tasks per page.
  - `skip`: Pagination offset.

---

### **3. GET `/tasks/:id`**
- **Description**: Retrieve a task by its ID.

---

### **4. PUT `/tasks/:id`**
- **Description**: Update an existing task.
- **Body**:
  ```json
  {
    "status": "COMPLETED"
  }
  ```

---

### **5. DELETE `/tasks/:id`**
- **Description**: Delete a task by ID.

---

## **Testing**

### Using Postman:
1. Import the provided Postman collection.
2. Test each endpoint with appropriate input.
