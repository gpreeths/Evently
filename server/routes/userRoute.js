const express=require('express')
const UserRouter=express.Router()
const userController=require('../controllers/userController')
const userAuth=require('../middlewares/userAuth')


UserRouter.post('/signup',userController.signUp)
UserRouter.post('/login',userController.login)
UserRouter.get('/users/:id',userAuth,userController.getUser)
UserRouter.delete('/users/:id',userAuth,userController.deleteAccount)

UserRouter.post('/user/:id/favorites/:eventId',userAuth,userController.setFavorite)

UserRouter.post('/user/:id/events/:eventId/comments',userAuth,userController.postComment)
UserRouter.get('/user/:id/comments',userAuth,userController.previousComments)
UserRouter.patch('/user/:id/events/:eventId/comments/:commentId',userAuth,userController.editComment)
UserRouter.delete('/user/:id/events/:eventId/comments/:commentId',userAuth,userController.deleteComment)

UserRouter.get('/user/:id/event/:eventId/notifications',userAuth,userController.getNotification)
UserRouter.put('/user/:id/event/:eventId/notifications/:notificationId',userAuth,userController.markAsRead)

UserRouter.get('/events/status',userAuth,userController.pendingApproval)

module.exports=UserRouter