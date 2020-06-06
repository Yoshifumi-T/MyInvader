'use strict'

class Enemy extends NonPlayerCharacter {
    constructor(field, status, position, look) {
        super(field, status, position, look);
    }

    update() {
        super.update();

        const fy = this.field.getTop();
        const fh = this.field.getHeight()
        const max = (fy + fh) * 0.8;
        if(this.position.getY() > max) this.dead();
    }
}
