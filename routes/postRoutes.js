const express = require('express');
const { createPost, getAllPosts, getPostById } = require('../controllers/postController');
const router = express.Router();
/**
 * @openapi
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     description: Allows a user to create a new post by providing a user ID, title, and content.
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post created successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.post('/', createPost);

/**
 * @openapi
 * /api/posts:
 *   get:
 *     summary: Get all posts
 *     description: Retrieves a list of all posts, including user details.
 *     tags:
 *       - Posts
 *     responses:
 *       200:
 *         description: List of posts
 *       500:
 *         description: Server error
 */
router.get('/', getAllPosts);

/**
 * @openapi
 * /api/posts/{id}:
 *   get:
 *     summary: Get a single post by ID
 *     description: Retrieves a specific post using its ID.
 *     tags:
 *       - Posts
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getPostById);


module.exports = router;
