const express = require('express');
const { createComment, getCommentsForPost } = require('../controllers/commentController');
const router = express.Router();
/**
 * @openapi
 * /api/comments:
 *   post:
 *     summary: Add a comment to a post
 *     description: Allows users to add a comment to a specific post.
 *     tags:
 *       - Comments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postId:
 *                 type: string
 *               userId:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment added successfully
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.post('/', createComment);

/**
 * @openapi
 * /api/comments/{postId}:
 *   get:
 *     summary: Get comments for a post
 *     description: Retrieves all comments for a given post.
 *     tags:
 *       - Comments
 *     parameters:
 *       - name: postId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of comments
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.get('/:postId', getCommentsForPost);

module.exports = router;
