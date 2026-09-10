console.log("///////////////////////// WINDOW ////////////////////////////")
console.log(window);
console.log(window.console.log('hello'));
window.open(); // Opens new tab
// window.close(); //Closes the tab
console.log('');
console.log("/////////////// DOCUMENT AND DOM //////////////////");
console.log(document);
console.log('');
console.log("/////////////// DOM Manipulation: Access //////////////////");
{
    let fPara = document.getElementById('fpara');
    console.log(fPara);
    let sParas = document.getElementsByClassName('sPara');
    console.log(sParas);
    let tParas = document.getElementsByTagName('p');
    console.log(tParas); 
    // Note even the elements accessed in the code/js are also included as if it was seperate, in this case both fPara and created element fPara were included
    let qSelector = document.querySelector('.fPara');
    console.log(qSelector); // Returns first match only
    let qSelectorAll = document.querySelectorAll('.fPara');
    console.log(qSelectorAll); // Returns all matching elements as NODEs
}
console.log('');
console.log("/////////////// DOM Manipulation: Update //////////////////");
{
    let fPara = document.getElementById('fpara');
    fPara.innerHTML = "fDiv fPara <span>Adding span via innerHTML</span>";
    console.log(fPara);
    
    let sPara = document.getElementsByClassName('sPara')[0];
    sPara.outerHTML = "<p>Changed name from sDiv sPara to SPARA</p>"
    console.log(sPara);

    let tPara = document.getElementsByClassName('tPara')[0];
    console.log(tPara.textContent); // Gives as written in HTML with /t /n
    console.log(tPara.innerText); // Gives text of element without /t /n
}
console.log('');
console.log("/////////////// DOM Manipulation: Addition //////////////////");
{
    let fDiv = document.getElementsByClassName("fDiv")[0];
    let foPara = document.createElement('p');
    foPara.textContent = "fDiv foPara, added using createElement and appendChild"
    fDiv.appendChild(foPara);
    console.log(fDiv);
}
console.log('');
console.log("/////////////// DOM Manipulation: Remove //////////////////");
{
    let fDiv = document.getElementsByClassName("fDiv")[0];
    let fiPara = document.createElement('p');
    fiPara.textContent = "fDiv fiPara, added using createElement and appendChild";
    fDiv.appendChild(fiPara);
    fDiv.removeChild(fiPara);

    let sPara = document.getElementsByClassName('sPara')[0];
    console.log(sPara.parentElement); // PREFERRED as it gives only the HTML element/node
    console.log(sPara.parentNode);// NOT PRFERRED as it can be text node, element node or document node
}
console.log('');
console.log("/////////////// DOM Manipulation: Styling //////////////////");
{
    /* element.style */
    let [fDiv, sDiv, tDiv] = document.getElementsByTagName("div");
    console.log(fDiv.style);
    fDiv.style.backgroundColor = 'orange';
    fDiv.style.padding = '3rem';
    fDiv.style.marginTop = '1rem';
    console.log(fDiv.style);
    console.log('');

    /* element.style.cssText */
    console.log(sDiv.style.cssText);
    sDiv.style.cssText = "background-color: whitesmoke; padding: 2rem;"
    console.log(sDiv.style.cssText);
    console.log('');

    /* element.setAttribute('attributeName','attributeValue') */
    console.log(tDiv);
    tDiv.setAttribute('id','tdiv');
    tDiv.setAttribute('style','background-color:green; padding: 1rem;');
    console.log('');

    /* element.className */
    console.log(fDiv.className);
    fDiv.className = "FDIVVV"//REPLACES old
    console.log(fDiv.className);
    console.log('');

    /* element.classList */
    console.log(fDiv.classList);
    fDiv.classList = "FDIVVV"//REPLACES old
    console.log(fDiv.classList);
    fDiv.classList.add('fDiv');
    console.log(fDiv.classList);
    fDiv.classList.remove('FDIVVV');
    console.log(fDiv.classList);
    fDiv.classList.toggle('FDIVVV');
    console.log(fDiv.classList);
    fDiv.classList.toggle('FDIVVV');
    console.log(fDiv.classList);
    console.log(fDiv.classList.contains('FDIVVV'));
    console.log(fDiv.classList.contains('fDiv'));
}
console.log('');
console.log("/////////////// END //////////////////");
