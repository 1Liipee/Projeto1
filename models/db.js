const mongoose = require('mongoose');

//Conexão do Banco de Dados utilizando Mongoose
mongoose.connect('mongodb+srv://Liipee:Flamengo962@projetoaldo-wlwzq.mongodb.net/', {dbName: 'EmployeeDB'}, (err) => {
    if (!err) { console.log('Conexão ao Banco de Dados MongoDB efetuada com sucesso.') }
    else { console.log('Falha de conexão ao Banco de Dados : ' + err) }
});

require('./employee.model');