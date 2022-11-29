function MovingObject(options) {
    [this.posx, this.posy] = options.pos;
    [this.velx, this.vely] = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

module.exports = MovingObject;

MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.posx, 
        this.posy,
        this.radius,
        0,
        2 * Math.PI,
        false
    );
    ctx.fill();
    console.log("inside draw", this);
}
