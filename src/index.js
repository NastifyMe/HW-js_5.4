import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const keyDisplay = document.getElementById('key')
const keys = ['a', 'f' ,'o', ';', 's', 'g', 'd', 'j', 'l', '.',]

let currentKeyIndex = 0

const keyUpdate = () => {
    keyDisplay.textContent = keys[currentKeyIndex]
}
keyUpdate()
document.addEventListener('keydown', (e) => {
    const currentKey = e.key

    if (currentKey === keys[currentKeyIndex]){
        currentKeyIndex++

        if (currentKeyIndex >= keys.length){
            success({
                text: "Ви виграли! 🎉",
                delay: 2000
              });
    
              currentKeyIndex = 0
              keyDisplay.textContent = ''
        }
        keyUpdate()
    } else {
        error({
            text: `Помилка! Натиснуто "${currentKey}", потрібно "${keys[currentKeyIndex]}"`,
            delay: 2000
          });
    }
})

document.addEventListener('keypress', (e) => {
    e.preventDefault()
})


const btnRestart = document.querySelector('.btn-restart')

btnRestart.addEventListener('click', () => {
    currentKeyIndex = 0
    keyUpdate()
    notice({
        text: 'Ви почали гру спочатку',
        delay: 2000
    })
})



import Chart from 'chart.js/auto';

const grafic = document.getElementById('sales-chart')
const chartData = {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        borderWidth: 1,
      },
    ],
    }
  };
  const salesChart = new Chart(grafic, chartData);
