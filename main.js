// const formContainer= document.getElementById('main');
const button= document.getElementsByClassName('button');
const mainContainer= document.getElementById('form');
let fname= document.getElementById('fname');

const viewBtn=document.createElement('button');
let division=document.createElement('div');
viewBtn.innerHTML="View";
// let head=document.getElementById('head');
button[0].addEventListener('click', function(e){
    // formContainer.remove();
    // head.innerHTML = "Thank You!";
    mainContainer.lastElementChild.remove();
    mainContainer.firstElementChild.textContent='Thank You!'
    mainContainer.appendChild(viewBtn);
})
viewBtn.addEventListener('click', function(e){
    mainContainer.lastElementChild.remove();
    mainContainer.append(division)
    mainContainer.lastElementChild.innerHTML=`Name:${fname.value}`

})
