const MovingObject = require("./moving_object");

class Asteroid extends MovingObject {
    constructor(){
        Asteroid.COLOR = "#0000FF";
        Asteroid.RADIUS = "20";
        MovingObject(color: Asteroid.COLOR, radius: Asteroid.radius, vel: Util.getVelocity);
    }
}
// Asteroid.vel = Until.randomVec(length)
//
//
const Util = {
    getVelocity(num) {
        Math.floor(Math.random(num));
    }


    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }
};