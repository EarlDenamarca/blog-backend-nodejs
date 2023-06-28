class PostController
{
    index = ( req, res ) => {
        res.status( 200 ).json({ 'message' : 'Get Posts' });
    }
}

module.exports = PostController