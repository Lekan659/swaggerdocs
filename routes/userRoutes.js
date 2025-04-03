const express = require('express');
const { createUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: This endpoint allows you to create a new user by providing a name and email.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       500:
 *         description: Server error
 */
router.post('/', createUser);

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieves a list of all users.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users
 *       500:
 *         description: Server error
 */
router.get('/', getAllUsers);

module.exports = router;
