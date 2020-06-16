'use strict'

import { MC_Character } from './MC_Character';

// プレイヤークラス
export class MC_Player extends MC_Character {
    constructor(size, position, look, status, mgr) {
        super(size, position, look, status);
        this._mgr = mgr;
    }

    // 何もしない
    update() {
        // orverride none;
    }

    shoot() {
        this._mgr.addBullet(this);
    }

    moveLeft() {
        const dist = this.getDist() * - 1;
        this.position.moveX(dist);
    }

    moveRight() {
        const dist = this.getDist();
        this.position.moveX(dist);
    }
}
