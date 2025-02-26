let startButton;
let animalButtons = [];
let animalImages = {};
let animals = ["grass", "fire", "water"];

function preload() {
  // Load images for the animals
  animalImages["grass"] = loadImage("assets/grass.png");
  animalImages["fire"] = loadImage("assets/fire.png");
  animalImages["water"] = loadImage("assets/water.png");
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
  background(200);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Welcome to Tamagotchi!", width / 2, height / 2 - 100);
}

function startGame() {
  console.log("Game Started");
  startButton.hide();
  clear();
  showAnimalButtons();
}

function showAnimalButtons() {
  background(200);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Select Your Animal", width / 2, height / 2 - 150);

  for (let i = 0; i < animals.length; i++) {
    let btn = createButton(animals[i]);
    btn.position(width / 2 - 50, height / 2 + i * 100);
    btn.mousePressed(() => selectAnimal(animals[i]));
    styleButton(btn);
    animalButtons.push(btn);

    // Display animal image above the button
    image(animalImages[animals[i]], width / 2 - 75, height / 2 + i * 100 - 75, 50, 50);
  }
}

function selectAnimal(animal) {
  console.log(animal + " selected");
  // Hide animal buttons
  animalButtons.forEach(btn => btn.hide());
  // Proceed with the game using the selected animal
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