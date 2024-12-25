# Invoice Form with Login

This project is a React-based application that replicates a Figma design. It includes a login system, a functional invoice form, and data persistence using localStorage. The form is built with Formik for validation and management.

## Features

1. **Login System**:
   - Login form with validation using Formik.
   - Session management via localStorage.
   - Auto-login feature redirects users to the main application interface if a session exists.
   - Logout functionality clears the session and redirects to the login page.

2. **Replicated Figma Design**:
   - Accurate replication of the provided Figma design.
   - Responsive UI adhering to the design specifications.

3. **Functional Form**:
   - Formik-based functional form with validation for all fields.
   - Form data is stored in localStorage upon submission.
   - Pre-populated form data on page reload.

4. **Data Persistence**:
   - Uses localStorage to ensure session and form data persist across page reloads.

5. **Bonus Features**:
   - Comprehensive validation for form fields.
   - User-friendly error messages for invalid inputs.
   - Dynamic styling for input validation (e.g., error highlights).

## Technologies Used

- **React**: For building the user interface.
- **Formik**: For managing forms and validations.
- **localStorage**: For data persistence.

## Installation

Follow the steps below to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/annnanya/invoice.git
   ```
2. Navigate to the project directory:
   ```bash
   cd invoice
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The application will run at `http://localhost:3000`.

## Usage

1. **Login**:
   - Enter a username and password to log in.
   - The session will be stored in localStorage.
   - You will be redirected to the main invoice form page upon login.

2. **Main Application**:
   - Use the invoice form to input details. All fields are validated with Formik.
   - Submit the form to store data in localStorage.
   - Reload the page to see pre-populated data in the form.

3. **Logout**:
   - Click the "Logout" button to clear the session and return to the login page.

## Deployment

The application is hosted and can be accessed via the following link:
[Live Demo][(https://invoice-three-kappa.vercel.app/main)]

## Project Structure

```
src/
├── components/
│   ├── FormComponent.js
│   ├── FormComponent.css
├── pages/
│   ├── MainPage.js
│   ├── MainPage.css
│   ├── LoginPage.js
│   ├── LoginPage.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## Scripts

- `npm start`: Runs the application in development mode.
- `npm run build`: Builds the application for production.

## Contact

For any queries or feedback, feel free to reach out at [singh.ananya2406@gmail.com].

