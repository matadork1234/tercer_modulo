const express = require('express');
const { getAllUsers, registerUser, getUserById, updateUser, deleteUser, averageAge } = require('../contollers/user.controller');


const router = express.Router();

router.get('/', getAllUsers);
router.get('/promedio-edad', averageAge);
router.get('/:id', getUserById);
router.post('/register', registerUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;