# TMSimple (Test case Management Simple)

TMSimple is an open-source test case management tool designed to simplify the process of managing and organizing test cases for software development projects. With TMSimple, you can easily create, track, and update test cases, ensuring efficient testing and quality assurance.

## Features

-   **Test Case Creation**: Create test cases with a defined structure, including title, description, steps, expected results, and attachments.

## Installation

Follow these steps to install and set up TMSimple on your local machine:

1. Clone the TMSimple repository:

    ```bash
    git clone https://github.com/qalityhall/tmpsimple.git
    ```

2. Navigate to the project directory:

    ```bash
    cd tmsimple
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

4. Configure the database connection:

    - Create a copy of the `.env.example` file and name it `.env`.
    - Update the database configuration in the `.env` file with your own database credentials.

5. Run the database migrations:

    ```bash
    npm run migrate
    ```

6. Start the application:

    ```bash
    npm start
    ```

7. Access TMSimple in your web browser at `http://localhost:3000`.

## Contributing

We appreciate and welcome contributions to TMSimple! To contribute, please follow these guidelines:

1. Clone the TMSimple repository:

    ```bash
    git clone https://github.com/qalityhall/tmpsimple.git
    ```

2. Create a new branch for your feature or bug fix. This helps keep your changes isolated from the main codebase. Use the following command to create a new branch:

    ```bash
    git checkout -b feature-name
    ```

    Replace `feature-name` with a descriptive name for your contribution.

3. Ensure that your code adheres to the project's coding conventions and style guidelines.

4. Make your changes and commit them with clear and descriptive messages. Use the following commands to stage and commit your changes:

    ```bash
    git add .
    git commit -m "Your commit message"
    ```

> Please read [`CONTRIBUTING`](CONTRIBUTING.md), and the process for submitting pull requests to us.

5. Push your changes to the repository:

    ```bash
    git push origin feature-name
    ```

6. Visit the [TMSimple repository](https://github.com/qalityhall/tmsimple) on GitHub and click the "Compare & pull request" button next to your branch. This will open a new pull request (PR) where you can describe your changes in more detail.

7. Provide a clear and concise description of the changes you have made in the PR description. You can also attach any relevant screenshots or recordings demonstrating the changes (if applicable).

8. Click the "Create pull request" button to submit your contribution. Your PR will be reviewed by the project maintainers, who may provide feedback or request further changes.

To ensure a smooth review process, we recommend discussing significant changes or enhancements with the project maintainers before starting to work on them.

Please note that all contributions to TMSimple will be considered under the project's [MIT License](https://opensource.org/licenses/MIT). By contributing, you agree to license your contributions under the same license.

We appreciate your effort and thank you for helping to make TMSimple even better!

## License

TMSimple is released under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you have any questions, suggestions, or feedback, please reach out to us at [Telegram Group](https://t.me/+Rdo0NN-G0NZjYTYx). We appreciate your input and are happy to assist you.
