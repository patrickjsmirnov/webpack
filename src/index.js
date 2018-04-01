import './scss/main.scss';
import './css/main.css';
import User from './components/User/index.js';
import printMe from './print.js';


function component() {
  const newUser = new User('Dima');
  console.log(newUser);
  let element = document.createElement('div');
  element.innerHTML = 'Hello, webpack';
  element.classList.add('hello');
  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  let a = [1, 4, 6, 7, 7];

  a.forEach((item) => {
    console.log(item);
  })
  return element;

}

document.body.appendChild(component());
