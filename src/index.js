import './style.css';
import Img from './assets/images/cat.jpg';

function component() {
  var element = document.createElement('div');
  element.innerHTML = 'Hello, webpack';
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
