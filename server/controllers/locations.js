import { pool } from "../config/database.js";

// Get locations from locations table
const getLocations = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM locations ORDER BY name ASC");
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(500).json( {error: err.message} )
    }
}

// Get location by id from locations table
const getLocationById = async (req, res) => {
    try {
        const results = await pool.query(`
        SELECT * 
        FROM locations 
        WHERE id = $1
        `, [req.params.locationId]);
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json( {error: err.message} )
    }
}

export default {
    getLocations,
    getLocationById
};