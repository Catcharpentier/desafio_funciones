// Cambiar divs iniciales a negro al hacer clic
const divs = ['div1', 'div2', 'div3', 'div4'];
divs.forEach(id => {
  const box = document.getElementById(id);
  box.addEventListener('click', () => {
    box.style.backgroundColor = 'black';
  });
});

document.addEventListener('keydown', function (event) {
  const key1 = document.getElementById('key1');
  const key2 = document.getElementById('key2');

  switch (event.key) {
    // Cambia el div #key1
    case 'a':
      key1.style.backgroundColor = 'pink';
      break;
    case 's':
      key1.style.backgroundColor = 'orange';
      break;
    case 'd':
      key1.style.backgroundColor = 'skyblue';
      break;

    // Cambia el div #key2
    case 'q':
      key2.style.backgroundColor = 'purple';
      break;
    case 'w':
      key2.style.backgroundColor = 'gray';
      break;
    case 'e':
      key2.style.backgroundColor = 'brown';
      break;
  }
});
