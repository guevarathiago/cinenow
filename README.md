# CineNow - React Movie Catalog

CineNow is a React-based movie catalog application that allows users to search for movies and view detailed information about each film. It leverages the power of React, TypeScript, Material UI, and SCSS to create an intuitive and visually appealing movie browsing experience.

## Features

- **Movie Search:** Easily search for movies by title, keywords, or any relevant search terms.
- **Detailed Movie Information:** Click on a movie to access detailed information, including a brief overview, release date, and rating.
- **The Movie Database (TMDb) API:** CineNow utilizes The Movie Database API to fetch up-to-date movie data. You can obtain your API key by following the [official TMDb API documentation](https://www.themoviedb.org/settings/api).

## Getting Started

Follow these steps to set up and run CineNow locally on your machine:

1. **Clone the Repository:** Use Git to clone the CineNow repository to your local machine.

   ```bash
   git clone https://github.com/guevarathiago/cinenow.git
   ```

2. **Install Dependencies:** Navigate to the project directory and install the required dependencies using npm or yarn.

   ```bash
   cd cinenow
   npm install
   # or
   yarn install
   ```

3. **Create your local env:** Obtain an API key from [TMDb API](https://www.themoviedb.org/settings/api) and replace the placeholder in the project with your actual API Token. You can find the API token configuration file in `.env`.

  ```
  cp .env.example .env
  ```

   ```javascript
   // .env

   REACT_APP_API_TOKEN = 'YOUR_API_TOKEN_HERE';
   ```

4. **Run the Application:** Start the development server to run CineNow locally.

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Access the Application:** Open your web browser and navigate to `http://localhost:3000` to access CineNow.

## Tech Stack

- React: A JavaScript library for building user interfaces.
- TypeScript: Adds static types to JavaScript for enhanced code quality and development experience.
- Material UI: A popular React UI framework that provides a set of beautiful and customizable components.
- SCSS: A preprocessor scripting language that extends CSS with additional features.

## Contributing

Contributions to CineNow are welcome! Feel free to submit bug reports, feature requests, or pull requests on the [GitHub repository](https://github.com/guevarathiago/cinenow).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy movie browsing with CineNow! If you have any questions or need further assistance, please don't hesitate to reach out.
