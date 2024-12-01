
ShoppyGlobe Backend
ShoppyGlobe is a scalable backend application for an e-commerce platform. It provides APIs for managing products, user authentication, shopping cart functionality, and order processing.

Table of Contents
1] Features
2] Technologies Used
3] Folder Structure
4] Setup and Installation
4] Environment Variables
5] Available APIs


Features---
User Authentication: Register, login, and logout functionality.
Product Management: Add, update, delete, and fetch product details.
Shopping Cart: Add, update, and remove products from the cart.
Order Management: Place and retrieve orders for logged-in users.

Technologies Used---
Node.js: JavaScript runtime for server-side development.
Express.js: Web framework for building APIs.
MongoDB: NoSQL database for data storage.
Mongoose: ODM library for MongoDB.
JWT: Secure user authentication and authorization.
dotenv: Manage environment variables.

Folder Structure---
shoppyGlobe-backend/
├── config/
│   └── connectdb.js           # Database connection
├── controllers/
│   ├── cart/
│   ├── orders/
│   ├── products/
│   └── users/
├── middlewares/
│   ├── dataValidation.js      # Input validation
│   └── tokenValidation.js     # Authentication middleware
├── models/
│   ├── cartModel.js           # Cart schema
│   ├── orderModel.js          # Order schema
│   ├── productModel.js        # Product schema
│   └── userModel.js           # User schema
├── routes/
│   ├── cartRoutes.js
│   ├── orderRoutes.js
│   ├── productRoutes.js
│   └── userRoutes.js
├── utils/
│   └── helperFunctions.js     # Reusable utility functions
├── .env                       # Environment variables
├── .gitignore
├── package.json
├── README.md
└── server.mjs                 # Application base file

Installation---
1]  Clone the repository:
git clone https://github.com/Rucha-Kulkarni-10/ShoppyGlobe-Backend.git
cd shoppyGlobe-backend

2] Install dependencies:
npm install

3] Create a .env file in the root directory and add the following variables:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=8000

4] Start the server:
node server.mjs

Environment Variables
Variable	Description	Example
MONGO_URI	MongoDB connection string	mongodb://localhost:27017/shoppyGlobe
JWT_SECRET	Secret key for JWT tokens	your_secret_key
PORT	Port for the application	8000

Available APIs---
Products
GET /api/products: Fetch all products.
GET /api/products/:id: Fetch details of a single product.
POST /api/products: Add a new product.
PUT /api/products/:id: Update a product.
DELETE /api/products/:id: Delete a product.
Cart
POST /api/cart: Add a product to the cart.
PUT /api/cart/:id: Update product quantity in the cart.
DELETE /api/cart/:id: Remove a product from the cart.
GET /api/cart: Fetch all cart items for the user.
Orders
POST /api/orders: Place a new order.
GET /api/orders: Fetch all orders for the user.
Users
POST /api/user/register: Register a new user.
POST /api/user/signin: Login as a user.
GET /api/user/logout: Logout the current user.
