//MODELO

var mongoose = require('mongoose');
var schema = require('./schema');
var User = mongoose.model('User2',schema,'users2');

mongoose.connect('mongodb://localhost:27017/test');

//Documento

var user = new User({
    name:'john Smith',
    email:'john@smith.io'
});
//metodo
user.save(function(error)
{
    if(error)
    {
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0);
});
//Consulta general
User.find({},function(erro,docs)
{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Consulta gral");
    console.log(docs);
}
);
//Consulta por email
User.find({email:'user2@ittepic.edu.mx'},function(erro,docs)
{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Consulta por email");
    console.log(docs);
}
);
//Actualizar
User.update({_id:'5d14f31e0158731f08389032'},{$set:{email:'usernew@ittepic.edu.mx'}},
function(erro,docs)
{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Actualización");
    console.log(docs);
}
);
//Eliminar
User.findByIdAndRemove({_id:'5d14f31e0158731f08389032'},
function(erro,docs)
{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Actualización");
    console.log(docs);
}
);
