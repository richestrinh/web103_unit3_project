import { pool } from "../config/database.js";

// Get events from event table
const getEvents = async (req, res) => {
    try {
        const query = 'SELECT * FROM events ORDER BY name ASC'
        const results = await pool.query(query);
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(400).json( {error: err.message} )
    }
}

// Get event by id from event table
const getEventById = async (req, res) => {
    try {        
        const results = await pool.query(`
        SELECT *
        FROM events
        WHERE id = $1
        `, [req.params.eventId]);
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json( {error: err.message} )
    }
}

export default {
    getEvents,
    getEventById
};

