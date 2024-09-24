
# reddit-client

This project is a simplified front-end application built using React and Redux. It integrates with the Reddit API to allow users to browse popular posts, filter by categories, search for posts, and view detailed post information, all with a clean and focused user experience.

## Features

### 1. **Browse Popular Posts**
- Users can view popular Reddit posts fetched from the `/r/popular` endpoint of the Reddit API.
- Each post displays key information such as the title, author, upvotes, and subreddit.
- Posts can be filtered by various categories, such as technology, science, sports, and gaming. Clicking the category buttons navigates to the corresponding subreddit’s popular posts.

### 2. **Search Posts**
- A search bar allows users to search for Reddit posts using keywords. The search function fetches posts from the Reddit API using the `search.json` endpoint.
- Before initiating the search, users can choose how to sort the results, either by recency, relevance, or popularity.

### 3. **View Detailed Information**
- Users can click on a post to view detailed information, including the post content and the number of comments.
- Comments are collapsible—users can expand or collapse comments as desired.

## Project Structure

```
reddit-client
├── node_modules
├── public
│   ├── index.html
│   └── robots.txt
├── src
│   ├── components
│   │   ├── CategorySelector.js
│   │   ├── Header.js
│   │   ├── PostList.js
│   │   └── Search.js
│   ├── redux
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   └── store.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in development mode.Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.You will also see any lint errors in the console.

#### `npm test`
Launches the test runner in the interactive watch mode.See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.It correctly bundles React in production mode and optimizes the build for the best performance.

#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Technology Stack

- **React**: For building the user interface.
- **Redux**: For managing the application state.
- **Reddit API**: To fetch posts and related information.
- **CSS**: For styling the components.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
