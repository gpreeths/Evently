const express=require('express')
const UserRouter=express.Router()
const userController=require('../controllers/userController')


UserRouter.post('/signup',userController.signUp)
UserRouter.post('/login',userController.login)
UserRouter.get('/users/:id',userController.getUser)
UserRouter.delete('/users/:id',userController.deleteAccount)

UserRouter.post('/user/:id/favorites/:eventId',userController.setFavorite)

UserRouter.post('/user/:id/events/:eventId/comments',userController.postComment)
UserRouter.get('/user/:id/comments',userController.previousComments)
UserRouter.patch('/user/:id/events/:eventId/comments/:commentId',userController.editComment)
UserRouter.delete('/user/:id/events/:eventId/comments/:commentId',userController.deleteComment)

UserRouter.get('/user/:id/event/:eventId/notifications',userController.getNotification)
UserRouter.put('/user/:id/event/:eventId/notifications/:notificationId',userController.markAsRead)

UserRouter.get('/events/status',userController.pendingApproval)

module.exports=UserRouter