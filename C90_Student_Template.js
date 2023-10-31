canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	car1_imgTag = new Image();
	car1_imgTag.onload = uploadCar1;
	car1_imgTag.src = car1_image;

	car2_imgTag = new Image();
	car2_imgTag.onload = uploadCar2;
	car2_imgTag.src = car2_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == 38) {
		car1_up();
		console.log("tecla de flecha arriba");
	}
	if (keyPressed == 40) {
		car1_down();
		console.log("tecla de flecha abajo");
	}
	if (keyPressed == 37) {
		car1_left();
		console.log("tecla de flecha izquierda");
	}
	if (keyPressed == 39) {
		car1_right();
		console.log("tecla de flecha derecha");
	}
	if (keyPressed == 87) {
		car2_up();
		console.log("tecla w");
	}
	if (keyPressed == 83) {
		car2_down();
		console.log("tecla s");
	}
	if (keyPressed == 65) {
		car2_left();
		console.log("tecla a");
	}
	if (keyPressed == 68) {
		car2_right();
		console.log("tecla d");
	}
}

function car1_up() {
	// Lógica para mover el carro 1 hacia arriba
	car1_y -= 10;
	uploadBackground();
	uploadCar1();
}

function car1_down() {
	// Lógica para mover el carro 1 hacia abajo
	car1_y += 10;
	uploadBackground();
	uploadCar1();
}

function car1_left() {
	// Lógica para mover el carro 1 hacia la izquierda
	car1_x -= 10;
	uploadBackground();
	uploadCar1();
}

function car1_right() {
	// Lógica para mover el carro 1 hacia la derecha
	car1_x += 10;
	uploadBackground();
	uploadCar1();
}

function car2_up() {
	// Lógica para mover el carro 2 hacia arriba
	car2_y -= 10;
	uploadBackground();
	uploadCar2();
}

function car2_down() {
	// Lógica para mover el carro 2 hacia abajo
	car2_y += 10;
	uploadBackground();
	uploadCar2();
}

function car2_left() {
	// Lógica para mover el carro 2 hacia la izquierda
	car2_x -= 10;
	uploadBackground();
	uploadCar2();
}

function car2_right() {
	// Lógica para mover el carro 2 hacia la derecha
	car2_x += 10;
	uploadBackground();
	uploadCar2();
}
