const MovingObject = require("./moving_object.js");

const canvas = document.getElementById("game-canvas");

window.MovingObject = MovingObject;

const ctx = canvas.getContext('2d');


const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 10,
    color: "#00FF00"
});

mo.draw(ctx);
