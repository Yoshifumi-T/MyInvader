'use strict'

import {config} from '../config/config';
import {E_Base} from './e_base';

// タッチイベントクラス
export class E_Touch extends E_Base {
    constructor() {
        super();
        this.startX = 0;
        this.endX   = 0
    }

    init() {
        window.addEventListener("touchstart", this.touchStart.bind(this), {passive: false});
        window.addEventListener("touchmove", this.touchMove.bind(this), {passive: false});
        window.addEventListener("touchend", this.touchEnd.bind(this), {passive: false});
    }

    touchStart(event) {
        event.preventDefault();
        this.startX = event.touches[0].pageX;
        // 前回の座標が残ってるとタッチ時が反応しなくなることがある
        this.endX   = event.touches[0].pageX;
    }

    touchMove(event) {
        event.preventDefault();
        this.endX = event.changedTouches[0].pageX;
    }

    touchEnd() {
        if(Math.abs(this.endX - this.startX) >= config.event.swipe.dist) return;
        this.shoot();
    }

    shoot() {
        this.setEventName('shoot');
        this.notify();
    }
}
