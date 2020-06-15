# node-jwt
Node with JWT basic API's Authorization

## Prerequisites
Node version should be greater than 12.16.0

## Installing

### Steps

1. Clone this repository by using: https://github.com/garvrox/node-jwt.git
2. After cloning 
```diff
   run npm install
```
3. Change /src/sample.env to /src/.env
4. Enter you MySql connection credentials
5. In your databse run below query same is attached in sample.sql
```diff
   CREATE TABLE `users` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `first_name` varchar(30) NOT NULL,
    `last_name` varchar(30) NOT NULL,
    `email` varchar(50) DEFAULT NULL,
    `password` varchar(250) DEFAULT NULL,
    `modify_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
  );
```
6. Start Application 
```diff
   npm start or yarn start
```
7. Your application will runs on http://localhost:3000/

### APIs

1. Login

**http://localhost:3000/api/login**

Input:- 

```diff
   {
     "email": "garv@gmail.com",
     "password": "12345678"
   }
```

Output:-

```diff
   {
    "message": "Login successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiZW1haWwiOiJnYXJ2QGdtYWlsLmNvbSJ9LCJpYXQiOjE1OTIxOTM4MDAsImV4cCI6MTU5MjE5NzQwMH0.mGeYICvcM899ru01ODt27G9_c7dj52Y55S2onlfgKRw",
    "success": true
   }
```

## Tech Stack

1. **Node.js**
2. **Express.js** - Web Framework for Node.js
3. **MySql** - A node.js driver for mysql
4. **jsonwebtoken** - An implementation of JSON Web Tokens.
