// Sample data for demonstration
let watchlist = [
    { symbol: 'BTC', name: 'Bitcoin' },
    { symbol: 'ETH', name: 'Ethereum' },
    { symbol: 'SPY', name: 'S&P 500 ETF' },
];

// Display the watchlist
function displayWatchlist() {
    const listElement = document.getElementById('crypto-etf-list');
    listElement.innerHTML = ''; // Clear the list

    watchlist.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.symbol} - ${item.name}`;
        listElement.appendChild(listItem);
    });
}

// Add a custom crypto/ETF to the watchlist
function addCustomItem() {
    const symbol = document.getElementById('custom-symbol').value.trim();

    if (symbol) {
        // For simplicity, we're using a placeholder name here.
        // Ideally, you'd fetch data from an API.
        watchlist.push({ symbol: symbol, name: `${symbol} Custom` });
        displayWatchlist();
    }

    // Clear input after adding
    document.getElementById('custom-symbol').value = '';
}

// Initial load of watchlist
displayWatchlist();
