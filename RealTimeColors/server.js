var express = require('express');
var app = express();
var server=app.listen(8080, function () {
    console.log("Listening on port 8080");
})
var io = require("socket.io")(server);
var count=0;

app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function (request, response) {

    response.render("index")

})

io.on("connection",function(socket){
    
    socket.emit("color",{bg:color="white"});
    
    socket.on("green",function(){
        socket.broadcast.emit("bg-all-green");
        socket.emit("bg-green")
        color="green";

        
    
    });
    socket.on("blue",function(){
        socket.broadcast.emit("bg-all-blue");
        socket.emit("bg-blue")
        color="blue";
       
    
    });
    socket.on("pink",function(){
        socket.broadcast.emit("bg-all-pink");
        socket.emit("bg-pink")
        color="pink";

       
    
    });


});


