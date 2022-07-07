const fs = require('fs')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

const users = require('./data/users.json')
const { posix } = require('path')

const sessions = {}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/signup', (req, res) => {
  if (!req.body.username || !req.body.password) {
	  return res.sendStatus(400);
  } 

  for(let user of users){
	  if(user.username === req.body.username){
		  return res.sendStatus(409)
	  }
	}

	/*
	const newUser = {
		username: req.body.username,
		password: req.body.password,
		myCollectionList: []
	}
	*/
	const newUser = {
		username: req.body.username,
		password: req.body.password,
		tags: [],
		collectionList: []
	}
	
	
	users.push(newUser);
	fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 4));
	res.sendStatus(200);
})

app.post('/api/login', (req,res) => {
	const auth = req.header('Authorization')
	if (!auth) return res.sendStatus(401)

	const credentials = auth.split('&&&');
	const username = credentials[0];
	const password = credentials[1];
	const user = users.find(user => username === user.username && password === user.password)
	if (!user) return res.sendStatus(401)
	let sessionId = Math.random().toString()
	sessions[sessionId] = user
	console.log(sessions)
	// setTimeout(() => {
	// 	delete sessions[sessionId]
	// 	console.log('Session end')
	// }, 6*10*1000);
	res.json(sessionId)
})

app.post('/api/todo', (req, res) => {
	const sessionId = req.header('Authorization')
	if (!sessionId) return res.sendStatus(401)

	const sessionUser = sessions[sessionId];
	if (!sessionUser) {
		return res.sendStatus(401)
	}
	const username = sessionUser.username;
	const password = sessionUser.password;
	const user = users.find(user => username === user.username && password === user.password)
	if (!user){
		return res.sendStatus(401)
	}
	if (!req.body.msg) {
		return res.sendStatus(400)
	}

	console.log(req.body.picId)
	///////////
	const newCollection = {
		picId: req.body.picId,
		picData: JSON.stringify(req.body.msg),
		picTag: []
		
	}
	user.collectionList.push(newCollection);
	///////////

	//user.collectionList.push(req.body.msg)
	fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 4));

	return res.sendStatus(200)
})

app.get('/api/todo', (req, res) => {
	const sessionId = req.header('Authorization')
	if (!sessionId) return res.send('no sessionid')

	const sessionUser = sessions[sessionId];
	if (!sessionUser) {
		return res.send('session')
	}
	const username = sessionUser.username;
	const password = sessionUser.password;
	const user = users.find(user => username === user.username && password === user.password)
	if (!user) return res.send('no user')

	let word = req.query.find;
	//console.log(word);
	//console.log("nfn:" + word);
	
	if (word === ""){
		console.log(user.collectionList);
		return res.json(user.collectionList)
	}
	
	else {
		const newList = [];
		user.collectionList.map(pic => {
			pic.picTag.map(tag=> {
				console.log(tag);
				if (tag === word){
					newList.push(pic)
				}
			})
			
		})

		
		return res.json(newList)
		
	}
})

app.post('/api/tags', (req, res) => {
	const sessionId = req.header('Authorization')
	if (!sessionId) return res.sendStatus(401)

	const sessionUser = sessions[sessionId];
	if (!sessionUser) {
		return res.sendStatus(401)
	}
	const username = sessionUser.username;
	const password = sessionUser.password;
	const user = users.find(user => username === user.username && password === user.password)
	if (!user){
		return res.sendStatus(401)
	}
	if (!req.body.msg) {
		return res.sendStatus(400)
	}
	/*
	const isTag = user.tags.find(tag => tag === req.body.msg)
	if (!isTag){
		user.tags.push(req.body.msg)
	}
	*/
	
	user.collectionList.map(data => {
		if (data.picId === req.body.picId){
			data.picTag.push(req.body.msg)
		}
	})


	//user.tags.push(req.body.msg)
	fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 4));

	return res.sendStatus(200)
})

app.get('/api/taglist', (req, res) => {
	const sessionId = req.header('Authorization')
	if (!sessionId) return res.send('no sessionid')

	const sessionUser = sessions[sessionId];
	if (!sessionUser) {
		return res.send('session')
	}
	const username = sessionUser.username;
	const password = sessionUser.password;
	const user = users.find(user => username === user.username && password === user.password)
	if (!user) return res.send('no user')

	return res.json(user.tags)
})

app.delete('/api/tag', (req, res) => {
	const sessionId = req.header('Authorization')
	if (!sessionId) return res.send('no sessionid')

	const sessionUser = sessions[sessionId];
	if (!sessionUser) {
		return res.send('session')
	}
	const username = sessionUser.username;
	const password = sessionUser.password;
	const user = users.find(user => username === user.username && password === user.password)
	if (!user) return res.send('no user')

	

	user.collectionList.map(pic => {
		console.log(pic.picId);
		
		if (pic.picId === Number(req.query.picId)){
			console.log(pic.picTag);
			const newTags = pic.picTag.filter(tag => tag !== req.query.tag);
			console.log(newTags);
			pic.picTag = newTags;
			console.log(pic.picTag);
		}
		
	})

	fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 4));
	res.sendStatus(204);
})
app.delete('/api/todo', (req, res) => {
	const sessionId = req.header('Authorization')
	if (!sessionId) return res.send('no sessionid')

	const sessionUser = sessions[sessionId];
	if (!sessionUser) {
		return res.send('session')
	}
	const username = sessionUser.username;
	const password = sessionUser.password;
	const user = users.find(user => username === user.username && password === user.password)
	if (!user) return res.send('no user')

	const newList = user.collectionList.filter(tag => tag.picId !== Number(req.query.picId));
	user.collectionList = newList;


	fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 4));
	res.sendStatus(204);
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
