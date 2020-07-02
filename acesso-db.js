const express = require('express') //servidor https
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose //banco de dados
const bodyParser = require('body-parser')
const cors = require('cors')
const json2xls = require('json2xls')
const stream = require('stream');

//Conexão com o MongoDB
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/db-cadastro')

//Teste para saber se conseguimos acessar a app e BD
server.get('/', (req, res, next) => res.send('Olha ai nossa App do cadastro conectando ao mongodb!!'))

//Ponte entre o app e a web para os devidos tratamentos
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())
server.use(json2xls.middleware)	

//Mapeamento objeto documento, JSON -> DB
const Amostra = restful.model('Amostra', {
	responsavel: { type: String, required: true },
	ponto: { type: String, required: true }, 
	latitude: { type: Number, required: true },
	longitude: { type: Number, required: true },
	elevacao: { type: Number, required: true },
	descricao: { type: String, required: true },

})

//API REST
Amostra.methods(['get', 'post', 'put', 'delete'])
Amostra.updateOptions({new: true, runValidators: true})

//Declara o caminho da app/web
Amostra.register(server, '/cadastro')

server.get('/download', (req, res)=>{
	Amostra.find({},(err, docs)=>{
		if (err){
			res.send (err)
			return
		}

res.xls('Amostras.xlsx', JSON.parse(JSON.stringify(docs)),{
	fields: ['responsavel', 'ponto', 'latitude','longitude','elevacao', 'descricao']
})

	})

})  


//Inicia o servidor
server.listen(2424)