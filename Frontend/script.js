const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const Airplane = document.getElementById('Airplane')

if (btn1 && Airplane) {
  btn1.addEventListener('click', () => {
    Airplane.classList.add("fly-active");
  });
  
  Airplane.addEventListener('animationend', () => {
    window.location.href ="Newpage.html";
  });
  
  if (btn2) {
    btn2.addEventListener('click', () => {
      window.location.href="Index.html";
    });
  }
}
