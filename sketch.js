var FORM
var banner,bannerIMG;
var database;

function preload() {
    bannerIMG = loadImage("img/banner.png");
}

function setup() {
    createCanvas(600,600);

    database = firebase.database();

    form = new Form();

    banner = createSprite(300,100,10,10);
    banner.addImage(bannerIMG);
}

function draw() {
    background(255);

    form.display();
    drawSprites();
}
