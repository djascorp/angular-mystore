# MyStore - Angular Application for Online Sales

MyStore is an Angular application for managing online sales. The application allows users to view and manage products and add them to their shopping cart.

## Installation

To get started with MyStore, clone the repository from GitHub:

```
git clone https://github.com/djascorp/angular-mystore.git
```

Then, navigate to the project directory and install the dependencies:

``
cd angular-mystore
npm install
``

## Usage

To start the application, run the following command:

``
ng serve
``

This will start the application and make it available in your web browser at ``http://localhost:4200``.

## Features

MyStore includes the following features:

- View a list of available products
- Add products to the shopping cart
- View the contents of the shopping cart
- Remove products from the shopping cart

## Architecture

The MyStore project follows a modular architecture that separates the code into different modules and components.

### src Folder

The project's source code is located in the ``src`` folder. This folder contains the following subfolders:

- ``app``: This folder contains the main code for the application, including components, services, and modules.

- ``assets``: This folder contains static assets, such as images and stylesheets.

### app Folder
The app folder contains the following subfolders:

- ``components``: This folder contains reusable components used throughout the application, such as a product card component and a shopping cart component.

- ``layout``: This folder contains layout components used to structure the application, such as a header and footer component.

- ``services``: This folder contains services used to retrieve data from a backend API, such as a product service and a shopping cart service.

- ``types``: This folder contains TypeScript types used throughout the application, such as a product type and a shopping cart item type.

- ``app.component``: This is the main component that is bootstrapped by Angular and serves as the entry point for the application.

- ``app.module``: This is the main module that declares the components and services used by the application and imports any required modules.

By following this modular architecture, the MyStore project is organized in a way that makes it easy to add and modify features as the application grows.

## Contributing 

If you would like to contribute to MyStore, please create a pull request on GitHub. Before contributing, please ensure that you have installed all dependencies and have run the application to ensure it works correctly.

## Licence

MyStore is released under the [MIT Licence](https://opensource.org/licenses/MIT)