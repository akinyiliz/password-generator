# Password Generator

The Password Generator is a simple web application that allows users to generate secure passwords with customizable options such as length, inclusion of numbers, and special characters.

## Table of Contents

1. [Features](#features)
2. [Usage](#usage)
3. [Technologies Used](#technologies-used)
4. [Contributing](#contributing)

## Features

- **Customizable Password Length:** Users can specify the length of the generated password within a range of 6 to 16 characters.
- **Inclusion of Numbers:** Users can choose whether to include numbers (0-9) in the generated password.
- **Inclusion of Special Characters:** Users can choose whether to include special characters (!@#$%^&\*()\_+) in the generated password.
- **Copy to Clipboard:** Generated passwords can be easily copied to the clipboard with a single click.
- **Responsive Design:** The application is designed to work seamlessly across various screen sizes and devices.

## Usage

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/akinyiliz/password-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd password-generator
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Run the development server:

   ```bash
   yarn run dev
   ```

5. Open your web browser and visit [http://localhost:5173](http://localhost:5173) to view the Password Generator.

6. Customize the password options as desired and click the "Copy" button to copy the generated password to the clipboard.

## Technologies Used

- [**React**](https://react.dev/): Frontend library for building user interfaces.
- [**React Hooks**](https://react.dev/reference/react/use): Used for managing state and side effects in functional components. The following hooks were used:
  - [useCallback](https://react.dev/reference/react/useCallback)
  - [useEffect](https://react.dev/reference/react/useEffect)
  - [useState](https://react.dev/reference/react/useState)
  - [useRef](https://react.dev/reference/react/useRef)
- [**Vite**](https://vitejs.dev/): Build tool for fast development and optimized builds.
- [**TypeScript**](https://www.typescriptlang.org/): Superset of JavaScript that provides static typing for increased productivity and code quality.
- [**Tailwind CSS**](https://tailwindcss.com/): Utility-first CSS framework for styling the user interface.
- [**Yarn**](https://yarnpkg.com/): Package manager for installing and managing dependencies.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.
