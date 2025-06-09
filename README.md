# Emotion Evaluation Frontend

This project is the frontend interface for the Emotion Evaluation application. It allows users to interact with the backend services for analyzing chat logs and visualizing emotion and semantic evaluation results.

## Local Development

### Prerequisites

*   Node.js and npm (or Yarn) installed.

### Setup and Running

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:shubham-nair/emotion-eval-frontend.git
    cd emotion-eval-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    (If you use Yarn: `yarn install`)

3.  **Start the development server:**
    ```bash
    npm start
    ```
    (If you use Yarn: `yarn start`)
    The application will typically be available at `http://localhost:3000`.

    **Note:** For the frontend to communicate with the backend during local development, ensure the backend server is running (usually on `http://localhost:8000`). The frontend is configured via `proxy` in `package.json` to forward API requests to this address.

## Building for Production

To create an optimized production build:

```bash
npm run build
```
(If you use Yarn: `yarn build`)

This will create a `build/` directory with the static assets ready for deployment.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
