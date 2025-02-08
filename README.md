# Cypress Test Environment Setup

## Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (Download from [https://nodejs.org/](https://nodejs.org/))
- **npm** (comes with Node.js)

Verify installation:
```sh
node -v
npm -v
```

## Cloning the Repository
Clone the project repository from GitHub:
```sh
git clone <repository-url>
cd cypress-test-project
```

## Install Dependencies
Install the required dependencies:
```sh
npm install
```

## Running Tests
To open Cypress in interactive mode:
```sh
npm run open
```

To run Cypress tests in headless mode:
```sh
npm run test
```

## Additional Cypress Commands
- To run tests in a specific browser:
```sh
npx cypress run --browser chrome
```

