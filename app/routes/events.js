module.exports = function(app){
	var events = app.controllers.events;
	app.get('/api/events',events.listEvents);
	app.post('/api/events',events.saveEvents);
	app.put('/api/events/:eventId',events.updateEvents);
	app.delete('/api/events/:eventId',events.deleteEvents);
}