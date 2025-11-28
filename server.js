require('dotenv').config();

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure your views are stored in the 'views' folder

app.get("/script.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.render("script", { environment: process.env.ENVIRONMENT });
});

// Define routes that render different "main" content
app.get('/', (req, res) => {
    data = JSON.parse(fs.readFileSync('./public/fixtures.json', 'utf8'));
    res.render('application', { partial: 'fixtures', data: data });
});

app.get('/:partial', (req, res) => {
  const { partial } = req.params;

  let data = null;
  if (partial === 'fixtures') {
    data = JSON.parse(fs.readFileSync('./public/fixtures.json', 'utf8'));
  }

  res.render('application', { partial, data });
});

// Dynamic route
const teams = require('./public/teams.json'); // Load teams JSON once

app.get('/teams/:url', (req, res) => {
  const teamUrl = req.params.url;
  const team = teams.find(t => t.url === teamUrl);

  if (!team) {
    return res.status(404).send('Team not found');
  }

  // Render teams.ejs partial with the correct gid
  res.render('application', { partial: 'team', team });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));
