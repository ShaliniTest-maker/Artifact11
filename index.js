// Artifact11 - minimal Node.js tutorial HTTP server.
// Feature change: introduce the Express.js framework and expose two endpoints.
// The original "/hello" -> "Hello world" behavior is preserved; a new
// "/good-evening" -> "Good evening" endpoint is added per the request.
const express = require('express');

const app = express();
// Conventional Express port; PORT env var allows overriding without code changes.
const PORT = process.env.PORT || 3000;

// Baseline endpoint (documented at /hello): returns the plain-text "Hello world".
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

// New endpoint added by this change: returns the plain-text "Good evening".
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Bind to the port and log readiness so learners can confirm a successful start.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
