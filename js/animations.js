
// Class with all animations
export class Animation {
    constructor(target) {
        this.target = target
    }

    InfiniteRotateX() {
        gsap.to(this.target, {rotateY: 360, duration: 15, repeat: Infinity})
        console.log("Infinite RotateX start ...")
    }
}