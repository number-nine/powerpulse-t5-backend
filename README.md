# Power Pulse - Backend Part

Welcome to the Power Pulse project! This Node.js backend application provides the core functionality for the Power Pulse web application, allowing you to explore and manage your sports activity and nutrition. Using this backend users can create accounts, select different physical activities, count calories burned, track time spent in physical activity and calculate the number of calories consumed with a particular meal.

## Table of Contents

- [Frontend](#frontend)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-docs)
- [Contributors](#contributors)

## <a id="frontend">Frontend</a>

- [GitHub](https://github.com/VasylievYurii/PowerPulse2.0)
- [Live page](https://vasylievyurii.github.io/PowerPulse2.0/welcome)

## <a id="features">Features</a>

The Power Pulse backend provides a set of functions that allow users to interact with the system through API endpoints (see [Usage](#usage)):

- Creating and authenticating a user account
- Add and delete consumed products
- View and search for exercise activities
- Secure and efficient backend based on Node.js

## <a id="getting-started">Getting Started</a>

### <a id="prerequisites">Prerequisites</a>

Before you can run the Power Pulse backend, you'll need to have the following software installed on your system:

- Node.js - JavaScript runtime
- npm or Yarn - Package manager for Node.js

### <a id="installation">Installation</a>

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/number-nine/powerpulse-t5-backend
   ```
2. Change your current directory to the project folder:
   ```
   cd powerpulse-t5-backend
   ```
3. Install the project dependencies:
   ```
   npm install
   or
   yarn install
   ```
4. Configure the environment variables. You will need to create a .env file in the project root and define the required variables (e.g., database connection details, API keys, etc) - see `.env.example` for required variables.
5. Start the server:
   ```
   npm run start:dev
   or
   yarn run start:dev
   ```

Your Power Pulse backend should now be running and accessible at `http://localhost:3000` (if you set the PORT `.env` variable as 3000).

## <a id="usage">Usage</a>

Here are some example use cases of the Power Pulse backend:

- To create a new user account, send a POST request to `/auth/register`.
- To verify a user's email, send a GET request to `/auth/verify`.
- To request a user's email verification, send a POST request to `/auth/verify`.
- To authenticate a user, send a POST request to `/auth/login`.
- To get the current user, send a GET request to `/auth/current`.
- To logout a user, send a POST request to `/auth/logout`.
- To update a user's name, send a PATCH request to `/users`.
- To update a user's avatar, send a PATCH request to `/users/avatars`.
- To get a list of products, send a GET request to `/products`.
- To get product categories, send a GET request to `/products/categories`.
- To get a user's diary by date, send a GET request to `/diaries/{date}`.
- To get a user's meals by date, send a GET request to `/diaries/meals/{date}`.
- To delete a user's meals by ID, send a DELETE request to `/diaries/meals/{_id}`.
- To add a user's meal by date, send a POST request to `/diaries/meals`.
- To update a user's meal by meal ID, send a PATCH request to `/diaries/meals`.
- To get a user's workouts by date, send a GET request to `/diaries/workouts/{date}`.
- To delete a user's workout by ID, send a DELETE request to `/diaries/workouts/{_id}`.
- To add a user's workout by date, send a POST request to `/diaries/workouts`.
- To update a user's workout by workout ID, send a PATCH request to `/diaries/workouts`.
- To get a user's profile, send a GET request to `/profiles`.
- To update a user's profile, send a PUT request to `/profiles`.
- To get a user's training targets, send a GET request to `/profiles/targets`.
- To get a list of filtered exercises, send a GET request to `/exercises`.
- To get grouped categories, send a GET request to `/exercises/groups/{filter}`.
- To get basic statistics, send a GET request to `/statistics`.

These endpoints allow you to interact with various features on the Power Pulse backend, including user management, nutrition and exercise management, and access to filters and categories.

## <a id="api-docs">API Documentation</a>

For detailed API documentation or tests, please refer to the [Swagger API Documentation](https://powerpulse-t5-backend.onrender.com/api-docs/#/).
The first opening may be long, because free render.com service is used for backend deployment.

## <a id="contributors">Contributors</a>

This project was made possible by the hard work and dedication of the following team members:

- Yurii Vasyliev - Team Lead / Developer
  - [GitHub](https://github.com/VasylievYurii)
  - [LinkedIn](https://www.linkedin.com/in/yuriivasyliev/)
- Sergii Pokhylko - Team Lead / Developer
  - [GitHub](https://github.com/number-nine)
  - [LinkedIn](https://www.linkedin.com/in/sergii-pokhylko/)
- Olga Bilynska - Scrum Master / Developer
  - [GitHub](https://github.com/OlgaBilynska)
  - [LinkedIn](https://www.linkedin.com/in/olga-bilynska/)
- Adelina Kleimionova - Developer
  - [GitHub](https://github.com/brizhak)
  - [LinkedIn](https://www.linkedin.com/in/adelina-kleimionova/)
- Olena Iankovska - Developer
  - [GitHub](https://github.com/OlenaIa)
  - [LinkedIn](https://www.linkedin.com/in/olena-iankovska/)
- Kateryna Valuiska - Developer
  - [GitHub](https://github.com/KaterynaValuiska)
  - [LinkedIn](https://www.linkedin.com/in/kateryna-valuiska-phd-1ab346280/)
- Kateryna Volobuieva - Developer
  - [GitHub](https://github.com/kika88vk)
  - [LinkedIn](https://www.linkedin.com/in/kateryna-volobuieva/)
- Vasylysa Skyba - Developer
  - [GitHub](https://github.com/Vasylysaskyba)
  - [LinkedIn](https://www.linkedin.com/in/vasylysa-skyba/)
- Yana Levchyshyna - Developer
  - [GitHub](https://github.com/YanaLevchyshyna)
  - [LinkedIn](https://www.linkedin.com/in/yana-levchyshyna/)
- Kiril Shkurko - Developer
  - [GitHub](https://github.com/shkurkoka)
  - [LinkedIn](https://www.linkedin.com/in/shkurkoka/)
- Sergey Mushtukov - Developer
  - [GitHub](https://github.com/SergeyMushtukov)
- Fedir Kandaurov - Developer
  - [GitHub](https://github.com/KandaurovF)
  - [LinkedIn](https://www.linkedin.com/in/fedirkandaurov/)

**A big thank you to our team for their contributions to this project!**
