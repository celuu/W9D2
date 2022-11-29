const MovingObject = require("./moving_object");

import * as Until from "./utils"

export default class Asteroid extends MovingObject {
    constructor(object){
        super(object);
        this.color = "pink";
        this.vel = [Until.Util.randomVec(length), 50]
    }
}


