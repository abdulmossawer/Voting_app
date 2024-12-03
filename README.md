Voting Application

Overview

The Voting Application is a secure backend service designed to manage an election process. It allows users to register, authenticate, cast votes for candidates, and view voting results. Admin users are provided with advanced capabilities, such as adding, updating, and removing candidates. The application adheres to modern development practices, including Role-Based Access Control (RBAC), robust authentication using JWT, and scalable RESTful API architecture.

This project serves as an assignment demonstrating backend implementation, focusing on efficient API design, user management, and role-based operations. The application has been tested extensively using Postman.

Table of Contents

Features
Technologies Used
Prerequisites
Installation
Environment Variables
API Documentation
User Authentication
Voting
Vote Counts
User Profile
Admin Candidate Management
Schema Diagram
RBAC Implementation
Testing
Future Enhancements
License
Features
User Management: Users can sign up, log in, and manage their profiles.
Secure Voting System: Registered users can cast votes securely.
Candidate Management: Admins can add, edit, or delete candidates.
Vote Count Analytics: Real-time tracking and display of voting results.
Authentication & RBAC: Implements secure JWT-based authentication with separate roles for Users and Admins.

Technologies Used

Programming Language: JavaScript (Node.js)
Framework: Express.js
Database: MongoDB
Authentication: JSON Web Token (JWT)
Testing Tool: Postman
Middleware: Express Middleware for RBAC


Prerequisites
Install Node.js (v14 or later).
Install MongoDB (local or cloud-based).
Postman or any other API testing tool for endpoint verification.

Installation

1. Clone the repository: 

git clone https://github.com/abdulmossawer/Voting_app.git
    cd Voting_app

2. Install project dependencies:
    npm install

3. Configure environment variables (see below).

4. Start the server:
    npm start


Environment Variables
Create a .env file in the root directory with the following keys:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

API Documentation
User Authentication

        Signup
        Endpoint: POST /user/signup
        Request Body:

        {
        "name": "Abdul Mossawer",
        "age": 22,
        "email": "mossawer@gmail.com",
        "address": "Rng",
        "aadharCardNumber": 123456789101,
        "password": "12345678"
        }


Response: 

        {
        "message": "User registered successfully",
        "userId": "user_id_here"
        }


Login:
        Endpoint: POST /user/login
        Request Body:

        {
        "aadharCardNumber": 123456789101,
        "password": "12345678"
        }

Response: Returns a JWT token.


Voting
Vote for a Candidate
        Endpoint: POST /candidate/vote/:candidateId
        Authorization: Requires user token.
        Description: Allows a user to cast their vote for a candidate.
        Response:

        {
        "message": "Vote cast successfully"
        }


Vote Counts
Get Vote Counts
        Endpoint: GET /candidate/vote/count
        Description: Retrieves all candidates with their vote counts, sorted in descending order.
        Response:

    [
        {
            "name": "Mamta Banerjee",
            "party": "TMC",
            "votes": 150
        }
    ]


User Profile
View Profile
        Endpoint: GET /user/profile
        Authorization: Requires user token.
        Response:

        {
        "name": "Abdul Mossawer",
        "email": "mossawer@gmail.com",
        "address": "Rng",
        "aadharCardNumber": 123456789101
        }


Change Password
        Endpoint: PUT /user/profile/password
        Request Body:

        {
        "oldPassword": "12345678",
        "newPassword": "87654321"
        }


        Response:

        {
        "message": "Password updated successfully"
        }


Admin Candidate Management
Add Candidate
        Endpoint: POST /candidate
        Authorization: Requires admin token.
        Request Body:

        {
        "name": "Mamta Banerjee",
        "age": 55,
        "party": "TMC",
        "isCriminal": false,
        "bankBalance": 200000
        }


Update Candidate
        Endpoint: PUT /candidate/:candidateId
        Authorization: Requires admin token.
        Request Body: Similar to Add Candidate.


Delete Candidate
        Endpoint: DELETE /candidate/:candidateId
        Authorization: Requires admin token.


                        Schema Diagram

                    +-------------------+
                    |      User         |
                    +-------------------+
                    | _id: ObjectId     |
                    | name: String      |
                    | email: String     |
                    | age: Number       |
                    | address: String   |
                    | aadharCardNumber: Number |
                    | password: String  |
                    | role: String      |
                    +-------------------+
                            |
                            |
                            V
                    +-------------------+
                    |    Candidate      |
                    +-------------------+
                    | _id: ObjectId     |
                    | name: String      |
                    | age: Number       |
                    | party: String     |
                    | isCriminal: Boolean |
                    | bankBalance: Number |
                    | votes: Number     |
                    +-------------------+



RBAC Implementation
        Users: Can register, log in, view their profile, and vote for candidates.
        Admins: Can manage candidates and view vote counts.


Testing
        1. Use Postman to test API endpoints.
        2. Include JWT token in the Authorization header for protected routes

        Authorization: Bearer <JWT_TOKEN>


Future Enhancements
        Add email verification during registration.
        Enhance the UI for better usability.
        Implement real-time voting updates using WebSockets.















