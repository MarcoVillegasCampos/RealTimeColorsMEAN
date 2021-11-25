var socket = io();

        $("#green").click(function(){
            socket.emit("green");
            socket.on("bg-green", function(){
            $("body").css({
                "background-color": "green"
            });
        });

        });

        $("#blue").click(function(){
            socket.emit("blue");
            socket.on("bg-blue", function(){
            $("body").css({
                "background-color": "blue"
            });
        });

        });

        $("#pink").click(function(){
            socket.emit("pink");
            socket.on("bg-pink", function(){
            $("body").css({
                "background-color": "pink"
            });
        });

        });        

        socket.on("bg-all-green", function(){
            $("body").css({
                "background-color": "green"
            });
        });

        socket.on("bg-all-blue", function(){
            $("body").css({
                "background-color": "blue"
            });
        });

        socket.on("bg-all-pink", function(){
            $("body").css({
                "background-color": "pink"
            });
        })

        socket.on("initial", function(color){
            $("body").css({
                "background-color":color.bg
            });
        })