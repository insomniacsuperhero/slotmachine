alert('SPIN TO WIN')

let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let inpSpeed = document.getElementById('inpS')

let spin = document.getElementById('btn1')
let stop = document.getElementById('btn2')
let animationId;

function win(){
    if(value1.val==value2.val && value1.val==value3.val){
        return true;

    }
}



function toggleInput(){
    spin.prop('disabled',(inpSpeed.val()<1 || inpSpeed.val()>10))
    stop.prop('disabled',(inpSpeed.val()<1 || inpSpeed.val()>10))
}

spin.onclick = function(){
    value1.classList.add("trans")
    value2.classList.add("trans")
    value3.classList.add("trans")
    
    slotting();
    
    
}
stop.onclick = function(){

    value1.classList.remove("trans")
    value2.classList.remove("trans")
    value3.classList.remove("trans")
    
    clearInterval(animationId)
    if(win()){
        console.log('WWCD')
     //   alert('YAY! YOU WON')
    }
    document.documentElement.style.setProperty('--speed',ev.target.value)
   
}

let slotting = function(){

let values = [
    '😁','😂','😍','😎','😴','🤯','😘','🤬'
]
    function getRandom(){
    return values[Math.floor(Math.random()*8)]
}

function updateAnimation(newSpeed){
    if(animationId) clearInterval(animationId)
    animationId = setInterval(()=>{
        value1.innerText = getRandom()
        value2.innerText = getRandom()
        value3.innerText = getRandom()
    
    },1000/newSpeed)
}


    


inpSpeed.onchange = function(ev){
    console.log('value changed', ev.target.value)
    //document.documentElement == Root 
    document.documentElement.style.setProperty('--speed',ev.target.value)
    
    updateAnimation(ev.target.value)
    
    
}

}
