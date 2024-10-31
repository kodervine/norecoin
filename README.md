# Norecoin

This project lets users view cryptocurrency prices in real-time using the CoinLore API. It fetches coin prices and displays them in a paginated table format. Each page shows ten (10) items to make it easy for users to see the data clearly.

## Features

- **Cryptocurrency Prices**: Pulls live coin prices from the CoinLore API.
- **Paginated Table**: Shows the data in a table format with pagination, displaying ten items per page.

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:kodervine/norecoin.git
   cd main
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173` to view the app.

## Usage

1. **Fetching Data**:

   - The app uses the `https://api.coinlore.net/tickers/` endpoint from the CoinLore API to fetch cryptocurrency data.
   - It utilizes dynamic query params for the pagination

2. **Displaying Data**:

   - The app shows the data in a table with columns for coin name, symbol, price.
   - Each page will show exactly ten (10) items.

3. **Navigating with Pagination**:
   - The pagination controls below the table allows you to switch between pages.
   - There is an input that allows users to jump between pages

## Built With

- **Typescript and React**: Used for the main functionality of the app.
- **CoinLore API**: For cryptocurrency data.
- **Tailwind Css**: For styling.
- **Redux toolkit**: Set up for state management for feature expansion
