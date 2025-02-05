const express = require("express");
const db = require("../db/config");

const router = express.Router();

// To get all products or filtered products
router.get("/", async (req, res) => {
    const { price, type } = req.query; // Destructure price and type from query string

    let query = "SELECT * FROM products WHERE 1=1";
    const params = []; //Array to store query parameters

    //Price & Filter query
    if (price) {
        query += " AND price <= ?";
        params.push(price);
    }
    if (type) {
        query += " AND type = ?";
        params.push(type);
    }

    try { // Execute the query and get results
        const [results] = await db.execute(query, params);
        res.json(results);
    } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).json({ error: "Database error" });
    }
});

// Get products by ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const [results] = await db.execute("SELECT * FROM products WHERE id = ?", [id]);
        if (results.length === 0) {
            res.status(404).json({ error: "Product not found"});
        } else {
            res.json(results[0]);
        }
    } catch (err) {
        console.error("Error fetching product:", err);
        res.status(500).json({ error: "Database error" });
    }
});

module.exports = router;