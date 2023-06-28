const express = require( 'express' )
const router = express.Router()
const PostController = require( '../controllers/PostController' )

const postController = new PostController();

router.get( '/api/posts', postController.index);

module.exports = router