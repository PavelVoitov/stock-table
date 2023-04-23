# Stocks Reporting App

This web application was created using React and Redux, and utilizes the [IEX Cloud API](https://iexcloud.io/) to retrieve stock data.

## Features

- A numbered table that displays up to 10 stock reports per page
- Users can navigate between pages using the next/previous buttons and page numbers in the pagination
- Unit tests using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Users can reorder rows in the table using [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)

## Getting Started

Before running the application, you'll need to obtain a free API key from [IEX Cloud](https://iexcloud.io/). Once you have your API key, create a `.env` file at the root of the project and add the following line:

```
REACT_APP_IEXCLOUD_TOKEN=your-token-here
```

To start the application locally, run the following commands:

```
npm install
npm start
```

## Technologies Used

- React
- TypeScript
- Redux
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- [IEX Cloud API](https://iexcloud.io/)
- Jest
- React Testing Library

## Bonus Features

In addition to the main features required for the project, the following bonus features were implemented:

- A modern and responsive design
- Error handling for failed API requests and incorrect user input
- A "loading" state for when the API data is being fetched

## Conclusion

Overall, this project was a great opportunity to practice building a React application from scratch while incorporating Redux and other useful tools like react-beautiful-dnd and Jest. The end result is a user-friendly and visually pleasing application that effectively utilizes the IEX Cloud API to display stock data.