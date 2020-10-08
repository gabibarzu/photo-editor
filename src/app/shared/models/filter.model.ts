import { Range } from '.';

export class Filter {
    id: string;
    name: string;
    property: string;
    value: number;
    defaultValue: number;
    range: Range;
    unit: string;
    constructor(name, property, value, range, unit) {
        this.id = name;
        this.name = name;
        this.property = property;
        this.value = value;
        this.defaultValue = value;
        this.range = range;
        this.unit = unit;
    }
}