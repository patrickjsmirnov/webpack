import './style.css';
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

  return element;

}

document.body.appendChild(component());
