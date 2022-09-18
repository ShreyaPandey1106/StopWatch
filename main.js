let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}


// Dark Mode

let dMode= document.querySelector("#mode");
let startbtn= document.querySelectorAll("#startTimer");
let pausebtn= document.querySelectorAll("#pauseTimer");
let resetbtn= document.querySelectorAll("#resetTimer");

function darkTheme(){
    if(dMode.innerText=== "Dark Mode")
    {dMode.innerText= "Light Mode";
     dMode.className="btn btn-light rounded-0 w-20";
     startTimer.className="btn btn-dark w-25 p-3";
     pauseTimer.className="btn btn-dark w-25 p-3"
     resetTimer.className="btn btn-dark w-25 p-3"
    }
    else
    {dMode.innerText= "Dark Mode";
    dMode.className="btn btn-dark rounded-0 w-20";
    startTimer.className="btn btn-primary w-25 p-3"
    pauseTimer.className="btn btn-primary w-25 p-3"
    resetTimer.className="btn btn-primary w-25 p-3"
    }
    let element = document.querySelector(".hero");
   element.classList.toggle("dark");
   let watch= document.querySelector(".timerDisplay")
   watch.classList.toggle("timerDarkDisplay");
   
   
    
}

dMode.addEventListener("click",darkTheme)