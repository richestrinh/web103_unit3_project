import { pool } from "../config/database";

// Get locations from locations table
const getLocations = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM locations");
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(500).json( {error: err.message} )
    }
}

export default getLocations;