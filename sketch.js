var tree;
var particles;

var particleCount;

function setup() {
    createCanvas(400, 400);

    tree = new Quadtree();
    particles = [];

    particleCount = 200;
    for (var i = 0; i < particleCount; i++) {
        particles.push(new Point(random(1, width - 1), random(1, height - 1)));
    }

    particles.forEach((particle, i) => {
        console.log(tree.insert(particle));
    });
    console.log(tree);

}

function draw() {
    background(120);
    noFill();
    stroke(255, 0, 0);
    strokeWeight(2);

    //console.log(particles);
    let allPoints = tree.queryRange(new Area(0, 0, width, height));
    let query = tree.queryRange(new Area(0, 0, 399, 399));

    query.forEach((particle, i) => {
        //console.log(particle)
        strokeWeight(5);
        point(particle.x, particle.y);
        strokeWeight(2);
    });

    strokeWeight(0.5);
    stroke(100);
    tree.show();

    //rect(mouseX - 30, mouseY - 30, 60, 60);
    return;
}