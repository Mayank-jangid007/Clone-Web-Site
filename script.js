var Ham = document.getElementById('ham');
var slid = document.getElementById('slid');

Ham.addEventListener('click', (e)=>{
        slid.style.left = "0%"; 
  
        slid.classList.toggle("toggle");
});
// slid.classList.remove("toggle");