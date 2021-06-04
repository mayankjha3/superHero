canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object ="";
var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image , function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    
    if(keyPressed=='70'){
        new_image("ironman_face.png");
        console.log("f");
    }

    if(keyPressed=='66'){
        new_image("spiderman_body.png");
        console.log("b");
    }

    if(keyPressed=='76'){
        new_image("hulk_legs.png");
        console.log("l");
    }

    if(keyPressed=='71'){
        new_image("thor_right_hand");
        console.log("g");
    }

    if(keyPressed=='82'){
        new_image("captain_america_left_hand.png");
        console.log("r");
    }

    if(keyPressed=='72'){
        new_image("thor_right_hand.png");
        console.log("h");
    }
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
}

function up(){
    if(player_y>=0){
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when up arrow is pressed , X = " + player_x + ", Y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when down arrow is pressed , X = " + player_x + ", Y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=850){
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when right arrow is pressed , X = " + player_x + ", Y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when left arrow is pressed , X = " + player_x + ", Y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}