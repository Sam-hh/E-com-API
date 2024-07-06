# E-commerce API

This is a simple E-commerce API built with Node.js, Express, and MongoDB.

## Hosted URL - https://e-com-api-4mls.onrender.com/products

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

Follow these steps to set up the project on your local system:

1. **Clone the repository**

    ```bash
    git clone https://github.com/Sam-hh/E-com-API.git
    cd ecommerce-api
    ```

2. **Install dependencies**

    Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root of the project and add your MongoDB connection string and server port. You can use the provided example:

    ```bash
    DB_URL = "mongodb+srv://testuser:testuser@cluster0.t1ddbyp.mongodb.net/Ecom-API?retryWrites=true&w=majority&appName=Cluster0"
    PORT = 3000
    ```

4. **Run the server**

    ```bash
    npm start
    ```

    The server will start on http://localhost:3000/products.

## Usage

Once the server is running, you can interact with the API using tools like [Postman](https://www.postman.com/).

## API Endpoints

To get all the endpoints for postman, follow the link :- https://www.postman.com/himanshu-thakur/workspace/ecom-api/request/32903425-e81be492-0205-4091-bc03-8a816ffafecd?action=share&creator=32903425&ctx=documentation

### Product Endpoints

- **Get all products**

    ```http
    GET /products/
    ```

    **Response:**
    ```json
    [
      {
        "_id": "60d21b4667d0d8992e610c85",
        "name": "Product 1",
        "quantity": 10
      },
      {
        "_id": "60d21b4767d0d8992e610c86",
        "name": "Product 2",
        "quantity": 20
      }
    ]
    ```

- **Create a new product**

    ```http
    POST /products/create
    ```

    **Request Body:**
    ```json
    {
      "name": "Product 3",
      "quantity": 30
    }
    ```

    **Response:**
    ```json
    {
    "message": "New product added successfully",
    "product": {
        "name": "Product 3",
        "quantity": 30,
        "_id": "668829ad7bc899135d2d1a5f"
    }
    }
    ```

- **Delete a product by ID**

    ```http
    DELETE /products/:productID
    ```

    **Response:**
    ```json
    {
      "message": "Product deleted"
    }
    ```

- **Update the quantity of a product**

    ```http
    POST /products/:productID/update_quantity?number=5
    ```

    **Response:**
    ```json
    {
    "product": {
        "_id": "66818f1fd6b1f95160b2d931",
        "name": "Macbook 14",
        "quantity": 50
    },
    "message": "Updated successfully"
    }
    ```

## Environment Variables

The application uses the following environment variables, which you should define in a `.env` file:

- `DB_URL`: The MongoDB connection string.
- `PORT`: The port on which the server will run.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
