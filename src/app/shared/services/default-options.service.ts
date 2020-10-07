import { Injectable } from '@angular/core';
import { Filter, Range } from '../models';

const DEFAULT_FILTERS = [
  new Filter('Blur', 'blur', 0, new Range(0, 20), 'px'),
  new Filter('Brightness', 'brightness', 100, new Range(0, 200), '%'),
  new Filter('Contrast', 'contrast', 100, new Range(0, 200), '%'),
  new Filter('Grayscale', 'grayscale', 0, new Range(0, 100), '%'),
  new Filter('Hue Rotate', 'hue-rotate', 0, new Range(0, 360), 'deg'),
  new Filter('Invert', 'invert', 0, new Range(0, 1), ''),
  new Filter('Opacity', 'opacity', 0, new Range(0, 1), ''),
  new Filter('Saturation', 'saturate', 100, new Range(0, 200), '%'),
  new Filter('Sepia', 'sepia', 0, new Range(0, 100), '%')
];

@Injectable({
  providedIn: 'root'
})
export class DefaultFiltersService {

  constructor() { }

  getDefaultFilters() {
    return DEFAULT_FILTERS;
  }
}
