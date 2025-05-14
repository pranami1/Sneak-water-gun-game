// baic fanda of this game is there is three object named by sneak, water and gun. so sneak drink water so sneak win, gun drown(dubi javu) into water so water win and gun sut the sneak so gun win.
let a=prompt("enter your name")
alert(a+"had to take first move..!")


let computertake= document.getElementById('randomvalue')
let sneakbet=document.getElementById('sneak')
let waterbet=document.getElementById('water')
let gunbet=document.getElementById('gun')
let result=document.getElementById('result1')
let totalscore=document.getElementById('total')
let loosescore=document.getElementById('lose')
let winscore=document.getElementById('win')

let total=0
let win=0
let loose=0


sneakbet.addEventListener('click',()=>{
    
    let randomnum= Math.floor(Math.random()*3)
    let allvalue=['sneak','water','gun']

    let comnval=allvalue[randomnum]

    computertake.innerText=comnval
    alert(("Now computer select"))
    if(comnval== 'sneak')
    {
        
        
        result.innerText = 'It\`s tie'
        return;
        
    }
    

    else if(comnval=='water')
    {
        result.innerText = 'You win...!'
        win++
        winscore.innerText=win

    }
    else
    {
        result.innerText = 'Computer win'
        loose++
        loosescore.innerText=loose
    }
    total++
    totalscore.innerText=total
});




// for water
waterbet.addEventListener('click',()=>{
    //alert(("Now computer select"))
    let randomnum= Math.floor(Math.random()*3)
    let allvalue=['sneak','water','gun']

    comnval=allvalue[randomnum]

    computertake.innerText=comnval
    alert(("Now computer select"))
    if(comnval== 'water')
    {
        
        result.innerText = 'It\`s tie'
        return;
    }

    else if(comnval=='gun')
    {
        result.innerText = 'You win..!'
        win++
        winscore.innerText=win

    }
    else
    {
        result.innerText = 'Computer win'
        loose++
        loosescore.innerText=loose
    }
    total++
    totalscore.innerText=total
});

//for gun
gunbet.addEventListener('click',()=>{
   
    let randomnum= Math.floor(Math.random()*3)
    let allvalue=['sneak','water','gun']

    let comnval=allvalue[randomnum]

    computertake.innerText=comnval
    alert(("Now computer select"))
    if(comnval== 'gun')
    {
        
        result.innerText = 'It\`s tie'
        return;
    }

    else if(comnval=='water')
    {
        result.innerText = 'Computer win'
        win++
        winscore.innerText=win

    }
    else
    {
        result.innerText = 'You win..!'
        loose++
        loosescore.innerText=loose
    }
    total++
    totalscore.innerText=total
});

