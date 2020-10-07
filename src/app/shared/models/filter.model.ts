import { Range } from '.';

export class Filter {
    name: string;
    property: string;
    value: number;
    range: Range;
    unit: string;
    constructor(name, property, value, range, unit) {
        this.name = name;
        this.property = property;
        this.value = value;
        this.range = range;
        this.unit = unit;
    }
}