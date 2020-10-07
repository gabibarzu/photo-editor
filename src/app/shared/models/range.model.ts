export class Range {
    min: number;
    max: number;
    step: number;

    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.step = max / 100;
    }
}