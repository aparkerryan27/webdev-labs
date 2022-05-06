
const clicked = (val) => {
   document.querySelector("body").className = val;
}


document.querySelector("#default").addEventListener('click', function(){
   clicked("default");
});
document.querySelector("#ocean").addEventListener('click', function(){
   clicked("ocean");
});
document.querySelector("#desert").addEventListener('click', function(){
   clicked("desert");
});
document.querySelector("#high-contrast").addEventListener('click', function(){
   clicked("high-contrast");
});