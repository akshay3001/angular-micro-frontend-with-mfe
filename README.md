# Micro-frontend with Module Federation

This is a sample project demonstrating the implementation of a micro-frontend architecture using Angular and Module Federation. The project consists of a host application called Shell App and a remote application called Dashboard.

[![shellapp](https://img.shields.io/badge/App-Shell_(Host)-000?style=for-the-badge&logo=vercel)](https://staging-shell-angular-micro-frontend-with-mfe.vercel.app/)

[![remoteapp](https://img.shields.io/badge/App-Dashboard_(Remote)-000?style=for-the-badge&logo=vercel)](https://staging-angular-micro-frontend-with-mfe.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, you need to clone this repository to your local machine. After cloning the repository, navigate to the root directory of the project and run the following command to install the required dependencies:

```sh
npm install
```

## Usage

To start the Shell App and the Dashboard, run the following command:

```sh
npm run start
```

This command will start both the Shell App and the Dashboard and open the application in your default browser.

To start the Dashboard, run the following command:

```sh
npm run start:dashboard
```

To build the application for production, run the following command:

```sh
npm run build
```

This command will build both the Shell App and the Dashboard and output the production-ready code in the `dist` folder.

## Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them
4. Push your changes to your fork
5. Open a pull request

Please ensure that your code adheres to the [Angular Style Guide](https://angular.io/guide/styleguide) and that all tests pass before submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
