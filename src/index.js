// Please run your solution from this file
import payload from '../fixtures/payload.json';
import { prepareData, renderData } from './solution';

console.log('Hello from %csrc/index.js', 'font-weight:bold');

renderData(prepareData(payload));
