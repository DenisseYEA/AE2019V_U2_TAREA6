var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/titles');

var Title = mongoose.model('Title',schema,'titles');

var title = new Title({
    title: "Loca",
    author: "Denisse",
    body: "YEA"
});

title.save((error,data)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado Title"+data);
    process.exit(0);
});

var Title2 = {
    title: "Rosa",
    author: "Yani",
    body: "EA"
}

Title.create(Title2, (error, data) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado Title2" + data);
    process.exit(0);
});

Title.create({title: "Mujer",author: "Yani",body: "EA"},
    (error,data)=>{
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log("Guardado Title3"+data);
        process.exit(0);
    }
);


Title.find({},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<--------Consulta General--------->");
    console.log(docs);
    process.exit(0);
});

Title.find({title:"Mujer"},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<--------Consulta Con Restricción--------->");
    console.log(docs);
    process.exit(0);
});

Title.update({title:"Mujer"},{$set: {author:"Leslie"}},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<--------Actualización--------->");
    console.log(docs);
    process.exit(0);
}); 

Title.findByIdAndRemove({_id:"5d195fe8ee4f5f246bd440f1"},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
    process.exit(0);
});
