var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var connection = mysql.createCOnnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'projetWeb'
})

connection.connect(function(err) {
  if (err) throw err;
});


function events(id, desc, date){
	this.desc = desc;
	this.date = new Date(date);
	//this.heure = 
	this.participants = 0;
	this.state = new State();
	this.addUser = function(){
		this.participants++;
	}

	this.remUser = function(){
		this.participants--;
	}

}

/*var remEvent = function(id){
	if(typeof listeEvents[id] != 'undefined'){
		listeEvents[id] = null;
		return 1;
	}
	return 0;
}*/


var getDate = function(){
	return this.date;
}


app.get('/event/:id', function (req, res) {
	if(typeof req.params.id === 'undefined') {
    	res.status(400).json({ error: 'Evenement non trouvé' });
    }else if(event.listeEvents[id] != 'undefined'){
    	res.json(connection.query('SELECT * FROM events WHERE idEVent = 'req.body.idEvent';'));
    }else{
    	res.status(400).json({error: 'Erreur lors de la récupération de l\'évènement'});
    }
})



app.get('/events/', function(req, res){
	if(event.listeEvents != null){
		res.json(connection.query('SELECT * FROM events'));
	}else{
		res.status(400).json({error: 'Aucun évènement !'});
	}
})

app.post('/event/', function (req, res) {
	if(req.body.id === 'undefined' || req.body.desc === 'undefined' || req.body.date === 'undefined'){
		res.status(400).json({ error: 'Il manque des paramètres pour la création de l\'évènement'});
	}else if(event.newEvent(req.body.id, req.body.desc, req.body.date)){
		connection.query('UPDATE TABLE user SET nom='req.body.nom', prenom='req.body.prenom', pseudo='req.body.pseudo' WHERE idUser='req.body.id';');
    	res.json(connection.query('SELECT * FROM user WHERE idUser='req.body.idUser';'));
	}
})

app.put('/event/', function (req, res) {
	res.setHeader('Content-Type', 'text/html');
    console.log(req.query);
    if(typeof req.params.id === 'undefined') {
    	res.status(400).json({ error: 'Evenement non trouvé' });
    }else if(event.listeEvents[id] != 'undefined'){
    	connection.query('UPDATE TABLE events SET description='req.body.description', date='req.body.date';');
    	res.json(connection.query('SELECT * FROM user WHERE idEvent='req.body.idEvent';'));
    }else{
    	res.status(400).json({error: 'Erreur lors de la modification'});
    }
})