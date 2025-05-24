# 📚 Courses API – Node.js + Express + Joi

This is a simple RESTful API for managing a list of courses. It supports basic CRUD operations and uses **Express.js** for routing and **Joi** for input validation.

---

## 🚀 Features

- GET all courses
- GET a specific course by ID
- POST a new course
- PUT (update) a course
- DELETE a course
- Input validation using Joi

---

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/courses-api.git
   cd courses-api
Install dependencies:

```bash
Copy
Edit
npm install
Run the app:
```

```bash
Copy
Edit
node index.js
```
App will run on port 3000 by default or use PORT env variable.


🧪 Test Data

The API comes with 3 default in-memory courses:

```json
Copy
Edit
[
  { "id": 1, "name": "math" },
  { "id": 2, "name": "cybersec" },
  { "id": 3, "name": "software eng" }
]
```
📬 API Endpoints

GET /

Returns a welcome message:

```bash
Copy
Edit
curl http://localhost:3000/
GET /api/courses
Returns all courses:
```

```bash
Copy
Edit
curl http://localhost:3000/api/courses
GET /api/courses/:id
Returns a course by ID:
```

```bash
Copy
Edit
curl http://localhost:3000/api/courses/2
POST /api/courses
Adds a new course (name must be at least 3 characters):
```
```json
Copy
Edit
{
  "name": "networking"
}
```
```bash
Copy
Edit
curl -X POST http://localhost:3000/api/courses \
  -H "Content-Type: application/json" \
  -d '{"name": "networking"}'
PUT /api/courses/:id
Updates a course:
```

```json
Copy
Edit
{
  "name": "advanced math"
}
```
```bash
Copy
Edit
curl -X PUT http://localhost:3000/api/courses/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "advanced math"}'
DELETE /api/courses/:id
Deletes a course:
```

```bash
Copy
Edit
curl -X DELETE http://localhost:3000/api/courses/1
```
📫 Postman Collection
You can use Postman for testing.
Here's how:

Import the following endpoints manually or create a collection:


**GET http://localhost:3000/api/courses**


**POST http://localhost:3000/api/courses with JSON body**


**PUT http://localhost:3000/api/courses/:id with JSON body**


**DELETE http://localhost:3000/api/courses/:id**


Make sure the Content-Type is application/json.

🛠️ Tech Stack
Node.js

Express

Joi (for validation)

🧑‍💻 Author

Igizeneza Serge Benit

📧 hacksergeb@gmail.com

📍 Kigali, Rwanda
