const express = require('express');
const router = express.Router();

const studentController = require('../controller/studentcontroller');
const logger = require('../middleware/studentmiddleware');

router.get('/',logger,studentController.getStudents);
router.post('/add',logger,studentController.addStudent);
router.put('/update/:id',logger,studentController.updateStudent);
router.delete('/delete/:id',logger,studentController.deleteStudent);
module.exports = router;