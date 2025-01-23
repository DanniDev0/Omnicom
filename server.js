import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'dist')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'omnicom',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

app.post('/api/contact', (req, res) => {
    const { name, lastName, phone, email, message } = req.body;

    const query = `INSERT INTO contacts (name, last_name, phone, email, message) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [name, lastName, phone, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json({ message: 'Contact information saved successfully!' });
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
