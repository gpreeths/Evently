const express=require('express')
const EventRouter=express.Router()
const eventController=require('../controllers/eventController')

EventRouter.post('/event',eventController.createEvent)
EventRouter.get('/events',eventController.getAllEvents)
EventRouter.get('/event/:id',eventController.getEventDetails)
EventRouter.post('/event/:id/comment',eventController.addComment)
EventRouter.delete('/event/:id/comment',eventController.deleteComment)
EventRouter.post('/approve',eventController.approveEvent)
EventRouter.post('/favorite',eventController.markFavorite)
EventRouter.patch('/event/:id/comment',eventController.editComment)
EventRouter.get('/event/search',eventController.getBySearch)

module.exports=EventRouter

