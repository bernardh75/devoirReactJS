import {Router} from 'express';
import PostController from '../controllers/posts.controller';
import CommentsController from '../controllers/comments.controller';
import UsersController from '../controllers/users.controller';

const router = Router();

router.get('/hello', (reg,res)=>{
    console.log('Hello');
    res.send('Hello');
});

//Posts
router.get('/posts', PostController.list);
router.post('/posts', PostController.create);
router.get('/posts/:id', PostController.details);
router.delete('/posts/:id', PostController.delete);
router.put('/posts/:id', PostController.update);

//Comment

router.get('/comments/:id', CommentsController.details);

//UsersCreation
router.post('/users/create', UsersController.create);

//UsersConnection
router.post('/users/connexion', UsersController.connexion);

//Get users
router.get('/users', UsersController.list);


export default router;
