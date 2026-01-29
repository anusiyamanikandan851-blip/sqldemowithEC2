const db = require('../data/db');

exports.getStudents = (req, res) => {
    db.query('SELECT * FROM demo_kec', (err, results) => {
        if (err) {
            console.error('Error fetching students:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
};

exports.addStudent = (req, res) => {
    const { id, name, depart } = req.body;
    const query = 'INSERT INTO demo_kec (id, name, depart) VALUES (?, ?, ?)';
    db.query(query, [id, name, depart], (err, result) => {
        if (err) {
            console.error('Error adding student:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({
            message: 'Student added successfully',
            id: result.insertId
        });
    });
};

// Export singular name to match routes (`updateStudent`)
exports.updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, depart } = req.body;
    const query = 'UPDATE demo_kec SET name=?, depart=? WHERE id=?';
    db.query(query, [name, depart, id], (err, result) => {
        if (err) {
            console.error('Error updating student:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows == 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({
            message: 'student data is updated'
        });
    });
};

exports.deleteStudent = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM demo_kec WHERE id=?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting student:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows == 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({
            message: 'Student deleted successfully'
        });
    });
};