// Binance API URL to fetch live data
const binanceApiUrl = 'https://api4.binance.com/api/v3/ticker/24hr?symbol=';

// Sample watchlist with symbols for crypto and ETF
let watchlist = [
    { symbol: 'BTCUSDT', name: 'Bitcoin' },
    { symbol: 'ETHUSDT', name: 'Ethereum' },
    { symbol: 'SPYUSDT', name: 'S&P 500 ETF' }, // Adjust symbol if needed
];

// Function to fetch and display the real-time data
function fetchData() {
    watchlist.forEach(item => {
        // Construct the URL for each symbol
        const url = binanceApiUrl + item.symbol;
        
        // Fetch live data from Binance
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Update price from Binance API response
                item.price = data.lastPrice;
                displayWatchlist();
            })
            .catch(error => console.error('Error fetching data from Binance:', error));
    });
}

// Function to display the watchlist with live data
function displayWatchlist() {
    const listElement = document.getElementById('crypto-etf-list');
    listElement.innerHTML = ''; // Clear the list

    watchlist.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} (${item.symbol}) - $${item.price || 'Loading...'}`;
        listElement.appendChild(listItem);
    });
}

// Add custom symbol to the watchlist (assuming it's a valid Binance symbol)
function addCustomItem() {
    const symbol = document.getElementById('custom-symbol').value.trim().toUpperCase();

    if (symbol) {
        // Add the custom symbol to the watchlist and fetch its data
        watchlist.push({ symbol: symbol + 'USDT', name: `${symbol} Custom` }); // Assumed USDT pair
        fetchData();  // Fetch data for the new custom symbol
        displayWatchlist();
    }

    // Clear input after adding
    document.getElementById('custom-symbol').value = '';
}

// Initial fetch on page load
fetchData();

// Automatically refresh data every 60 seconds
setInterval(fetchData, 60000); // Fetch data every minute
