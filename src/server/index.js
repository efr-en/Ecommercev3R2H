const express = require("express");
const cors = require("cors");
const path = require("path");
const productsRouter = require("./routes/products");
const db = require("./db/config");


require('dotenv').config({ path: path.join(__dirname, '../../.env') }); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; 

// Middleware, enable CORS for all origins
app.use(cors({
    origin: '*' 
}));
app.use(express.json()); // Parse incoming JSON bodies

// API routes
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

// Define a route for the root URL that serves the index.html file
app.get('/', (req, res) => {
    res.send(path.join(__dirname, 'index.html'));
});

// Mount the products router on the /api/products path
app.use("/api/products", productsRouter);

app.get('/products', (req, res) => {
    res.send(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
    res.send(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
