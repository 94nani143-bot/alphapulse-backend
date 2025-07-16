const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 AlphaPulse backend is running!');
});

app.get('/api/signals', (req, res) => {
  const { symbol = 'INFY', timeframe = '15min', strategy = 'breakout' } = req.query;

  const sampleData = [
    {
      market: '📈 Indian Stocks (Angel One)',
      description: `${timeframe} ${strategy} signals`,
      signals: [
        `Buy ${symbol.toUpperCase()} above ₹1470 | Target: ₹1490 | SL: ₹1460`
      ]
    }
  ];

  res.json(sampleData);
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
