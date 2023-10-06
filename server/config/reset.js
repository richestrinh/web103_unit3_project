// Creating tables and populating the events and locations data that your web app will need to work with.
import { pool } from '../config/database.js';
import "./dotenv.js";
import eventData from '../data/events.js';
import locationData from '../data/locations.js';

// Create events table
const createEventsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;
    
        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            price NUMERIC(10, 2) NOT NULL
        )
    `;
    // Query pool
    try {
        const res = await pool.query(createTableQuery);
        console.log('Events table created successfully');
    }
    catch (err) {
        console.log('Error creating events table', err);
    }
}

// Send data over to database
const seedEventsTable = async () => {
    await createEventsTable();
    
    // Insert values into events table
    eventData.forEach((event) => {
        const insertQuery = {
            text: `INSERT INTO events (name, location, description, price) VALUES ($1, $2, $3, $4)`,           
        }
        const values = [
            event.name, 
            event.location,
            event.description,
            event.price
        ]
    
        // Query pool with insertQuery and values
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.log('Error inserting data', err);
                return 
            }
            
            console.log(`${event.name} Data inserted successfully`)
        })
    })
}

const createLocationsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS locations;
    
        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL
        )
    `;
    // Query pool
    try {
        const res = await pool.query(createTableQuery);
        console.log('Locations table created successfully');
    }
    catch (err) {
        console.log('Error creating locations table', err);
    }
}

// Send data over to database
const seedLocationTable = async () => {
    await createLocationsTable();
    
    // Insert values into location table
    locationData.forEach((location) => {
        const insertQuery = {
            text: `INSERT INTO locations (name, address) VALUES ($1, $2)`,           
        }
        const values = [
            location.name, 
            location.address
        ]
    
        // Query pool with insertQuery and values
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.log('Error inserting data', err);
                return 
            }
            
            console.log(`${location.name} Data inserted successfully`)
        })
    })
}

seedEventsTable();
seedLocationTable();