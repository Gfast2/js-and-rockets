// Please implement your solution in this file
import React from 'react';
import ReactDOM from 'react-dom';

const filter18flights = arr => {
  const startUnix18 = 1514764800 - 1;
  const endUnix18 = 1546300800 + 1;
  return arr.filter(e => {
    const uTime = parseInt(e.launch_date_unix);
    return isNaN(uTime) ? false : uTime > startUnix18 && uTime < endUnix18;
  });
};

const filterNasas = arr => {
  const resultArr = arr.filter(e => {
    const payloadArr = e.rocket.second_stage.payloads;
    return payloadArr.some(e => e.customers.join().includes('NASA'));
  });
  return resultArr;
};

const sortTFunc = (objA, objB) => {
  const timestamp = obj => parseInt(obj.launch_date_unix);
  return timestamp(objB) - timestamp(objA);
};

const sortPCountFunc = (objA, objB) => {
  const payloadCount = obj => obj.rocket.second_stage.payloads.length;
  return payloadCount(objB) - payloadCount(objA);
};

const filterAttributes = arr => {
  const resultArr = arr.map(e => {
    const { flight_number, mission_name } = e;
    const payloads_count = e.rocket.second_stage.payloads.length;
    return { flight_number, mission_name, payloads_count };
  });
  return resultArr;
};

const prepareData = data => {
  const list18 = filter18flights(data);
  const listNasa = filterNasas(list18);
  const listSorted = listNasa.sort(sortTFunc).sort(sortPCountFunc);
  const listFilterAtt = filterAttributes(listSorted);
  return listFilterAtt;
};

const renderData = arr => {
  const root = document.getElementById('out');
  ReactDOM.render(<>{JSON.stringify(arr, null, '  ')}</>, root);
};

module.exports = {
  prepareData,
  renderData,
};
