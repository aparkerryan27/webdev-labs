const makeBigger = () => {
   document.querySelector('p').style.fontSize = "larger";
   document.querySelector('h1').style.fontSize = "larger";
   
};

const makeSmaller = () => {
   document.querySelector('p').style.fontSize = "smaller";
   document.querySelector('h1').style.fontSize = "smaller";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

