canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
        {
            alphabetkey();
            document.getElementById("result").innerHTML = "You pressed the alphabet key";
        }

        function alphabetkey(){
            img_image="Alpkey.png"
        }






        if((keyPressed >=48 && keyPressed<=57))
        {
            numberkey();
            document.getElementById("result").innerHTML = "You pressed the number key";
        }

        function numberkey(){
            img_image="numkey.png"
        }




        if((keyPressed >=37 && keyPressed<=40))
        {
            arrowkey();
            document.getElementById("result").innerHTML = "You pressed the arrow key";
        }

        function arrowkey(){
            img_image="Arrkey.png"
        }



        if((keyPressed=17) || (keyPressed=18) || (keyPressed=27))
        {
            specialkey();
            document.getElementById("result").innerHTML = "You pressed the special key";
        }

        function specialkey(){
            img_image="spkey.png"
        }
    }