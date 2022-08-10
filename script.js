const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const timeleft=document.querySelector('#Time')
const score=document.querySelector('#Score')

let res=0
let hitposition
function random()
{
    squares.forEach(squares=>
    {
        squares.classList.remove('mole')

    }    
    )
    let random=squares[Math.floor(Math.random()*9)]
    random.classList.add('mole')
    hitposition=random.id
}
squares.forEach(square=>
{
    square.addEventListener('click',() => {
        if(square.id==hitposition)
        {
            res++;
            score.innerHTML=res;
            hitposition=null
        }
    })
})
let mytime
let timeup=10
let starttime
function start()
{
    mytime=setInterval(random,600)
    starttime=setInterval(count,1000)
}
start()
function count()
{
    
    timeleft.textContent=timeup
    timeup--;
    if(timeup==-1)
    {
        clearInterval(starttime)
        alert('Ban duoc so diem la: '+res)
    }
}
