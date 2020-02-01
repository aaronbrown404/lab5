var data = require("../data.json");

exports.addFriend = function(request, response) {
	var name = request.query.name;
	var description = request.query.description;
	var image = "http://lorempixel.com/500/500/people"
	console.log("Name is " + name);
	console.log("Desc is " + description);
	var newFriend =	{
		"name": name,
		"description": description,
		"imageURL": image			
	}
	console.log(newFriend);
	data.friends.push(newFriend);
	response.render('index', data);
}