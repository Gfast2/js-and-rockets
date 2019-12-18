// Please run your solution from this file
import payload from '../fixtures/payload.json';
import { prepareData, renderData as RenderData } from './solution';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('Hello from %csrc/index.js', 'font-weight:bold');

const main = () => {
  const root = document.getElementById('out');
  ReactDOM.render(<RenderData filteredData={prepareData(payload)} />, root);
};

window.addEventListener('load', main);
