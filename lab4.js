const prompt = require('prompt-sync')();

function view(counter){
    return String(`\n Count: ${counter}
              \n    (+) (-)
              \n    (q) for quit`)
}

function updated(msg, counter){
    if(msg === "+"){
        counter += 1
        return counter;
    }
    if(msg === "-"){
        counter -= 1
        return counter;
    }
    if(msg === "q"){
        return 'end' ;
    }
    
}

function app(counter){
    var x = 'start'
    while (x !== 'end'){
        const currentView = view(counter);
        console.clear()
        console.log(currentView)
        const msg = prompt('what would you do?: ');
        counter = updated(msg, counter)
        if (counter === 'end'){
            x = 'end'
        }
    }
}
app(0)