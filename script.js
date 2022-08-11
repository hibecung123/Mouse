const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const timeleft=document.querySelector('#Time')
const score=document.querySelector('#Score')
const choose=document.querySelectorAll(".Difficulty")
const dif=document.getElementById('Diff')
let res=0
let hitposition
let mytime
let choosing=null
let timeup
let starttime
let timing
document.getElementById('Start').onclick=function()
{
    timeup=window.prompt("How long you want to play?")
    if(choosing===null)
    {
        alert('You are not choosing the Difficulty')
    }
    else if(choosing===Easy)
    {
        timing=900
        start()
    }
    else if(choosing===Medium)
    {
        timing=700
        start()
    }
    else
    {
        timing=500
        start()
    }
    
}
function start()
{
    mytime=setInterval(random,timing)
    starttime=setInterval(count,1000)
}
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
function count()
{
    timeleft.textContent=timeup
    timeup--;
    if(timeup==-1)
    {
        clearInterval(starttime)
        alert('Your score is: '+res)
        setTimeout("location.reload(true);",1000)
    }
}
choose.forEach(choose=> choose.addEventListener('click',(e)=>
{
    choosing=e.target.id
    dif.innerHTML=choosing
}))
