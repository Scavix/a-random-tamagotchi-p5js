let startButton;
let animalButtons = [];
let animalImages = {};
let animals = ["egg", "grass", "fire", "water"];
let selectedAnimal = "egg";
let currentScreen = "start";

function preload() {
  // Load images for the animals
  animalImages["grass"] = loadImage("assets/grass.png");
  animalImages["fire"] = loadImage("assets/fire.png");
  animalImages["water"] = loadImage("assets/water.png");
  animalImages["egg"] = loadImage("assets/egg.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCanvasScroll();
  startButton = createButton("Start Game");
  startButton.position(width / 2 - 50, height / 2);
  startButton.mousePressed(startGame);
  styleButton(startButton);
}

function draw() {
  switch (currentScreen) {
    case "start":
      drawStartScreen();
      break;
    case "selectAnimal":
      drawSelectAnimalScreen();
      break;
    case "hatching":
      drawHatchingScreen();
      break;
    case "hatched":
      drawHatchedScreen();
      break;
    case "play":
      drawPlayScreen();
      break;
  }
}

function drawStartScreen() {
  background(200);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Welcome to Tamagotchi!", width / 2, height / 2 - 100);
}

function drawSelectAnimalScreen() {
  background(200);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Select Your Animal", width / 2, height / 2 - 150);

  for (let i = 0; i < animals.length - 1; i++) {
    let btn = createButton(animals[i + 1]);
    btn.position(width / 2 - 50, height / 2 + i * 150);
    btn.mousePressed(() => selectAnimal(animals[i + 1]));
    styleButton(btn);
    animalButtons.push(btn);

    // Display animal image above the button
    image(
      animalImages[animals[i + 1]],
      width / 2 - 75,
      height / 2 + i * 150 - 100,
      100,
      100
    );
  }
}

function startGame() {
  console.log("Game Started");
  startButton.hide();
  currentScreen = "selectAnimal";
  redraw();
}

function selectAnimal(animal) {
  console.log(animal + " selected");
  // Hide animal buttons
  animalButtons.forEach((btn) => btn.hide());
  // Proceed with the game using the selected animal
  currentScreen = "hatching";
  selectedAnimal = animal;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  startButton.position(width / 2 - 50, height / 2);
  animalButtons.forEach((btn, i) => {
    btn.position(width / 2 - 50, height / 2 + i * 100);
  });
}

function noCanvasScroll() {
  document.body.style.overflow = "hidden";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
}

function styleButton(button) {
  button.style("background-color", "#4CAF50");
  button.style("border", "none");
  button.style("color", "white");
  button.style("padding", "15px 32px");
  button.style("text-align", "center");
  button.style("text-decoration", "none");
  button.style("display", "inline-block");
  button.style("font-size", "16px");
  button.style("margin", "4px 2px");
  button.style("cursor", "pointer");
  button.style("border-radius", "12px");
}

function drawHatchingScreen() {
  background(200);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Hatching...", width / 2, height / 2 - 100);
  image(animalImages["egg"], width / 2 - 50, height / 2, 100, 100);
  noLoop();
  textSize(32);
  textAlign(CENTER, CENTER);
  drawCountdown();
}

function drawCountdown() {
  let countdown = 4;
  let interval = setInterval(() => {
    console.log(countdown - 1);
    text(
      countdown - 1,
      width / 2 + (3 - countdown + 1) * 30 - 35,
      height / 2 + 150
    );
    countdown--;
    if (countdown === 0) {
      clearInterval(interval);
      console.log("Hatched!");
      currentScreen = "hatched";
      redraw();
    }
  }, 1000);
}

function drawHatchedScreen() {
  background(200);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Hatched!", width / 2, height / 2 - 100);
  image(animalImages[selectedAnimal], width / 2 - 50, height / 2, 100, 100);
  let startPlayButton = createButton("Start");
  startPlayButton.position(width / 2 - 50, height / 2 + 100);
  styleButton(startPlayButton);
  startPlayButton.mousePressed(() => {
    currentScreen = "play";
    redraw();
    startPlayButton.hide();
  });
}

function drawPlayScreen() {
  background(200);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Play Screen", width / 2, height / 2 - 100);
}
