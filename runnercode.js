  
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var width = c.width;
var height = c.height;
var pos =250;
var ori = "down";
var changer;
var ground = 400;
var moveFlag = true;
var game = true;
var speed = 2;
var score = 0;
var scoringParameter = 50;
var blockTimeInterval = 5000;
var check = 1;

var scoring = function() {
	score += (speed/100)
	document.getElementById("score").innerHTML = Math.round(score).toString();
	if (score > scoringParameter) {
		speed += 1;
		scoringParameter += 50;
		blockTimeInterval -= 500;

	}
	window.requestAnimationFrame(scoring);
}

start();

function start(){
	requestAnimationFrame(scoring);
	move();
	setInterval(createLowerHole, blockTimeInterval);
	setTimeout(callUpper = function() {setInterval(createUpperHole, blockTimeInterval)}, 3000)
	//sleep(3000);
	//setInterval(createUpperHole, 6000); 
}

document.addEventListener("keypress", function(event) {
	if (event.keyCode == 32 ) {
		changeOrientation();
		if (!moveFlag) {
			//console.log(moveFlag)
			move();  
		}
	}
})


function gameOver() {
	window.cancelAnimationFrame(scoring);
	alert("Game Over! " + "Score: " + Math.round(score));
	clearInterval(createLowerHole);
	clearInterval(createUpperHole);
}


function move(){
	if (checkIfReached(pos)) {
		stopMoving();
		return 
	}

	ctx.clearRect(200,changer,50,50);
	ctx.beginPath();
	ctx.fillStyle = "green";
	ctx.fillRect(200,pos,50,50);

	ctx.closePath();
	changer = pos;
	if(ori=="up") pos -= speed;
	else pos += speed;
	requestAnimationFrame(move);
}


function createLowerHole(){
	var holeWide = (Math.floor(Math.random()*4)+1)*100; 
	var xcor = 800;
	check += 1;
	moveHole(xcor, holeWide, 0, 400);
}

function createUpperHole(){
	var holeWide = (Math.floor(Math.random()*4)+1)*100; 
	var xcor = 800;
	check += 1;
	moveHole(xcor, holeWide, 0, 0);
}


function moveHole(cor, size, temp, yCoordinate){
	console.log("Ch: ", check);
	if (isHole()) gameOver();

	ctx.clearRect(temp, yCoordinate, size, 100);
	ctx.beginPath();
	ctx.fillStyle = "brown";
	ctx.fillRect(cor, yCoordinate, size, 100);
	ctx.closePath();
	temp = cor; 

	cor -= speed + 1;
	if(cor == (-1)*(size)) { console.log("gone");return;}
		 
	requestAnimationFrame( ()=> {moveHole(cor, size, temp, yCoordinate)});

}
