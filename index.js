const buttons = document.querySelector(".right-nav-btn");
const fileBtn = document.querySelector(".image");
const empty = document.querySelector('.empty');


/*step1 :- adding event listener on button and make one fun*/
buttons.addEventListener('mouseover',btnHover);

/*step2 :- make one function for mouseover*/
function btnHover(e){
      e.target.style.backgroundColor = " rgb(238, 236, 236)";
}
/*step1 :- adding event listner on removeing background color*/
buttons.addEventListener('mouseout',btnHoverOut);

/*step2 :- make a fun for mouseout*/
function btnHoverOut(e) {
    e.target.style.backgroundColor = "white";
}


// /*step2 :- making fun for filebtn*/
// function fileOnclick(e){
//     e.innerHTML = buttons;
// }

// /* step1 :- add event listener on filebtn and make one call back fun*/
// fileBtn.addEventListener('click',fileOnclick)


fileBtn.addEventListener('click', () => {
    empty.innerHTML = `<img src="meet.png" alt="">`;
})

// let one = document.querySelector('.one')
// let oneImage = document.querySelector('.file-js')

// one.addEventListener('click', () => {
//     oneImage.innerHTML = `<img src="images/download.jpg" alt="">`
// })  
