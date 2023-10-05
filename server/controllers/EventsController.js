import { pool } from "../config/database";

// Get events from event table
const getEvents = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM events");
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(500).json( {error: err.message} )
    }
}

export default getEvents;