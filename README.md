

# FurniFlex E-commerce WebApp

FurniFlex is a fully functional e-commerce web application built using **React** and **Context API**. The app features user authentication (login/signup), a product store with cart management, and order overview functionality. The project is styled with **Tailwind CSS** and uses **FontAwesome** icons for a modern look.

## Features

- **Login & Sign Up**: User authentication system that allows users to log in or sign up.
- **Product Listing**: Browse a list of products fetched from a local JSON file or API.
- **Cart Management**: Add products to the shopping cart, remove items, and adjust product quantities.
- **Order Overview**: Review products in the cart and see the total price before proceeding to checkout.

## Tech Stack

- **Frontend**: React, Context API, Tailwind CSS, FontAwesome
- **State Management**: Context API for global state
- **Styling**: Tailwind CSS for layout and styling
- **Icons**: FontAwesome for interactive icons (e.g., shopping cart, cross icons)
- **Local Data**: Product data fetched from a local `products.json` file (can be easily replaced by an API)

## Screenshots

- **Store Page**  
  ![Store Page](https://github.com/Udoy2/FurniFlex/blob/main/screenshots/store.png)

- **Cart Page**  
  ![Cart Page](https://github.com/Udoy2/FurniFlex/blob/main/screenshots/cart.png)
- **Login Page**  
  ![Login Page](https://github.com/Udoy2/FurniFlex/blob/main/screenshots/login.png)
- **Signup Page**  
  ![Signup Page](https://github.com/Udoy2/FurniFlex/blob/main/screenshots/signup.png)

## Folder Structure

```
/src
  /components
    - Login.js          // Login component
    - Signup.js         // Signup component
    - Store.js          // Store (product listing) component
    - Cart.js           // Cart management component
  /context
    - AuthContext.js    // Authentication context for login/signup
    - ProductContext.js // Product context for fetching and managing product data
    - CartContext.js    // Cart context for managing cart operations
  /data
    - products.json     // Local product data
  App.js                // Main app component that sets up routing
  index.js              // Main entry point
  index.css             // Tailwind CSS imports
```

## Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Udoy2/FurniFlex.git
   cd furniflex
   ```

2. **Install Dependencies**:

   Make sure you have `Node.js` installed. Then run:

   ```bash
   npm install
   ```

3. **Install Tailwind CSS**:

   Tailwind is used for styling. Make sure to install the necessary dependencies for Tailwind CSS:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Run the App**:

   After setting up the project, run the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Features Breakdown

### 1. **Login & Signup**
   - Users can create an account or log in using their credentials.
   - The app uses `Context API` to manage user authentication state globally.

### 2. **Product Store**
   - Displays a list of products that can be fetched from a local JSON file.
   - Each product has details such as name, price, description, and an image.

### 3. **Add to Cart**
   - Users can add products to the cart, with real-time updates using `Context API`.
   - Cart state dynamically reflects the number of items and total cost.

### 4. **Cart Management**
   - Users can adjust the quantity of items in the cart.
   - Items can be removed from the cart, and the total price updates accordingly.

### 5. **Order Overview**
   - Shows a summary of the items added to the cart.
   - Displays the total price, subtotal, and the ability to proceed to checkout.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm run build`: Builds the app for production to the `build` folder.

## Usage

- **Login/Signup**: Use the login or signup pages to create an account and log in.
- **Browse Products**: Navigate to the store to browse products and add items to your cart.
- **Cart Management**: Adjust the quantity of products or remove items from the cart. Review the order before checkout.

## Contributions

Feel free to fork the repository and create pull requests. Contributions are welcome!

1. Fork the repo.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

