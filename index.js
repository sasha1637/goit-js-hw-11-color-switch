import './sass/main.scss';
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const refs={
      body: document.body,
      btnStart: document.querySelector('button[data-action = "start"]'),
      btnStop: document.querySelector('button[data-action = "stop"]')
  }
let intervalId=null;
const INTERVAL_DELAY = 1000;

refs.btnStart.addEventListener('click',colorBodyChange);
refs.btnStop.addEventListener('click',onBtnStop);

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  function colorBodyChange () {
    intervalId = setInterval(()=>{
refs.body.style.background = colors[randomIntegerFromInterval(0 , colors.length-1)];
     } , INTERVAL_DELAY);
     refs.btnStart.disabled = true;
  };
  function onBtnStop(){
      clearInterval(intervalId);
      refs.btnStart.disabled = false;
  };
