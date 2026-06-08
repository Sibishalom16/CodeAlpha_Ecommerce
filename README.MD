# 🛒 TechStore

A Full Stack E-Commerce Website built using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas, and Mongoose.

## 🌐 Live Demo

Frontend: https://your-frontend-link.netlify.app

Backend API: https://techstore-api-8nta.onrender.com

## 🚀 Features

* User Registration & Login
* Product Listing from MongoDB
* Product Details Page
* Search Products
* Add to Cart
* Increase / Decrease Quantity
* Remove Products from Cart
* Order Placement
* Responsive Design

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

## 📂 Project Structure

```bash
TechStore/
│
├── frontend/
│   ├── landing.html
│   ├── index.html
│   ├── product.html
│   ├── cart.html
│   ├── login.html
│   ├── register.html
│   ├── success.html
│   ├── style.css
│   ├── script.js
│   ├── product.js
│   ├── cart.js
│   ├── auth.js
│   └── authCheck.js
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string

```

Run the server:

```bash
node server.js
```

## 🔗 API Endpoints

### Products

```http
GET /api/products
GET /api/products/:id
```

### Users

```http
POST /api/users/register
POST /api/users/login
```

## 🎯 Learning Outcomes

* REST API Development
* MongoDB Atlas Integration
* User Authentication
* Cart Management
* Search Functionality
* Frontend & Backend Integration
* Full Stack Development

## 👨‍💻 Author

**S. Sibiraj**

B.Tech CSE (Software Product Engineering)

GitHub: https://github.com/Sibishalom16

LinkedIn: www.linkedin.com/in/sibiraj-sornaraj


## 📜 License

This project was developed for educational and internship purposes.
