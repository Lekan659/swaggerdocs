const express = require('express');
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');

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
 *       400:
 *         description: Bad request - missing required fields
 *       500:
 *         description: Server error
 */
router.post('/', createPost);

/**
 * @openapi
 * /api/posts:
 *   get:
 *     summary: Get all posts
 *     description: Retrieves a list of all posts, optionally filtered by user ID.
 *     tags:
 *       - Posts
 *     parameters:
 *       - name: userId
 *         in: query
 *         schema:
 *           type: string
 *         description: User ID to filter posts by user
 *     responses:
 *       200:
 *         description: List of posts retrieved successfully
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

/**
 * @openapi
 * /api/posts/{id}:
 *   put:
 *     summary: Update a post
 *     description: Updates a post's title or content using its ID.
 *     tags:
 *       - Posts
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post updated successfully
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updatePost);

/**
 * @openapi
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete a post
 *     description: Deletes a post using its ID.
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
 *         description: Post deleted successfully
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deletePost);

module.exports = router;
