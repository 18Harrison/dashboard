import './style.scss';
import * as bootstrap from 'bootstrap';
import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const head =document.querySelector(".head")
const ulss = document.querySelector(".uls")
const arros = document.querySelector(".arro")
const arrodd = document.querySelector(".arrod")


head.addEventListener("click",()=>{

    if(ulss.classList.contains("mm")){
        ulss.style.display = "none"
        ulss.classList.remove("mm")
        arros.style.display = "inline"
        arrodd.style.display = "none"
    
    }else{
        ulss.style.display = "block"
        ulss.classList.add("mm")
        arros.style.display = "none"
        arrodd.style.display= "inline"
    
    }

    
})


const menuu = document.querySelector(".menu")
const side = document.querySelector(".side")
const sec = document.querySelector(".seccol")
const delee = document.querySelector(".dele")

menuu.addEventListener("click",()=>{
    side.classList.add("left")
})

delee.addEventListener("click",()=>{
    side.classList.remove("left")
})
