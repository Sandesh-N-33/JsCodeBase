if (false) {
    //This can be used in console only and not in the code
    monitorEvents(document); // Monitors and gives all events that is happening in the document
    unmonitorEvents(document); //removes the monitoring on that element
}

let fPara = document.getElementById('fpara');
fPara.addEventListener('click', clickHandler, { capture: true }); // The last boolean is for useCapture to capture in capturing phase

function clickHandler(event) {
    console.log('Clicked on ', event.target);
    console.log('Clicked on ', event.currentTarget);
    // Note all arguments passed through the addEventListener() should match with remove to work as expected. Even the useCapture flag
    fPara.removeEventListener('click', clickHandler, { capture: true });
}


//EVENT DELEGATION


let sDiv = document.getElementsByClassName('sDiv')[0];
sDiv.addEventListener('click', clickHandler, { once: true }); // once true removes the listener once it has been triggered

function clickHandler(event) {
    event.preventDefault(); // Stops default options
    event.stopPropagation(); // Stops the propagtaion ove event phases from this point
    console.log('Clicked on ', event.target); // Actual/absolute click target
    console.log('Clicked on ', event.currentTarget); // The one where the event listener is attached
    if (event.target.nodeName == 'A' && event.target.textContent == 'sDiv sPara') { // nodeName needs to be uppercase
        console.log('Identified ', event.target.textContent);
    }
}