


function changeOrientation(){
	if(ori=="down") ori="up" ;
	else ori="down";
}

function checkIfReached(yPosition) {
	//console.log('Reach ', moveFlag, yPosition, pos, ori)
	if (!moveFlag) { 
		moveFlag = true;
		return false
	}

	if(yPosition >= 350 || yPosition <= 100) return true;
	else return false;
}

function stopMoving() {
	moveFlag = false;
}

function drawFc(){
	ctx.beginPath();
	ctx.fillStyle = "black" ;
	ctx.fillRect(0 , height-100 , width , 100);
	ctx.fillRect(0, 0 , width ,100);
}



function isHole() {   
	var lowerObjectColor = ctx.getImageData(200, 397, 1, 1).data;
	var lowerHoleColor = ctx.getImageData(200, 425, 1, 1).data;

	var upperHoleColor = ctx.getImageData(200, 95, 1, 1).data;
	var upperObjectColor = ctx.getImageData(200, 102, 1, 1).data;

	//console.log(objectColor[1], holeColor[0]);

	if ((lowerObjectColor[1] == 128 && lowerHoleColor[1] == 255) || (upperObjectColor[1] == 128 && upperHoleColor[1] == 255)) return true;
	else return false;
}  