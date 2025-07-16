
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('🚀 AlphaPulse backend is running!');
});

app.get('/api/signals', (req, res) => {
  const { symbol = 'INFY', timeframe = '15min', strategy = 'breakout' } = req.query;

  const signals = [
    {
      market: "📈 Indian Stocks (Angel One)",
      description: `${timeframe} ${strategy} signals`,
      signals: [
        `Buy ${symbol.toUpperCase()} above ₹1470 | Target: ₹1490 | SL: ₹1460`
      ]
    },
    {
      market: "🪙 Crypto Market (Delta Exchange)",
      description: `${timeframe} ${strategy} signals`,
      signals: [
        `Sell BTC below $60K | Target: $59K | SL: $60.5K`
      ]
    }
  ];

  res.json(signals);
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
