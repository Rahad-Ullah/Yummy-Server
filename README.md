# Yummy Server

## Recipe Sharing Platform

The **Yummy** allows users to read and share recipe post with ease and provides admins the ability to manage these recipes and users.

---

### [Live Server](https://yummy-server-tau.vercel.app)

```console
https://yummy-server-tau.vercel.app
```

## Used Technologies:

- TypeScript
- Node.js
- Express.js
- Mongoose
- JWT
- Zod

## Features

### 1. User Authentication and Authorization

- Users can **sign up** and **log in** using their email and password to access the platform.
- Admins have special privileges to **manage recipes** and **moderate user activity**.

### 2. Recipe Creation and Management

- Users can **create**, **update**, and **delete** their own recipes.
- Each recipe includes essential details such as:
  - Title
  - Description
  - Ingredients
  - Instructions
  - Image

### 3. Admin Recipe Moderation

- Admins can manage recipes platform-wide to ensure that content adheres to community guidelines.
- They have the ability to **update** or **remove** any recipe.

### 4. Recipe Browsing and Search

- Users can explore a wide range of recipes.
- A **search feature** allows filtering by:
  - Ingredients
  - Title
  - Categories (e.g., Vegan, Desserts)

### 5. User Interaction

- Users can:
  - **Leave comments** on recipes.
  - **Rate recipes**.

### 6. Recipe Sharing

- Users can share recipes by:
  - Copying a **link**.
  - Sharing directly via **social media platforms**.

### 7. User Dashboard

- Users can view his own recipes in the dashboard.
- They can manage their own recipes.

### 8. Admin Dashboard

- Admins can view platform-wide **stats**.
- They can manage user-generated content and ensure quality control over the platform's recipe database.

### 9. Error Handling

- Comprehensive error handling ensures proper responses for:
  - Validation errors
  - Duplicate entries
  - Unauthorized actions
  - Not found routes

### 10. Authentication Middleware

- Middleware is implemented to secure the platform, ensuring:
  - Only authenticated users can access recipe creation and management.
  - Only admins can access admin control areas.

### 11. Security

- **JWT-based authentication** protects user accounts.
- Ensures that only authorized users and admins can access sensitive features and areas of the platform.

## How to setup in local computer:

### Clone the Repository:

```plain
git clone https://github.com/Rahad-Ullah/Yummy-Server.git
```

### Install Dependencies:

```markdown
npm install
```

### Environment Variables:

- Create a `.env` file in the root directory.
- Add the following environment variables:

```markdown
PORT=5000
DATABASE_URL=your_database_url
BCRYPT_SALT_ROUNDS=any_integer_number
JWT_ACCESS_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_jwt_secret
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=365d
SSLCZ_STORE_ID=your_sslcommerz_id
SSLCZ_STORE_PASSWORD=your_sslcommerz_password
```

### Run the Application:

```markdown
npm run start:dev
```

## Happy Coding 😎
