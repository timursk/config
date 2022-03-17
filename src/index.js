import './styles/main.scss';
import image from './assets/image.png';

const sayHello = () => console.log('hello');
sayHello();

document.getElementById('root').innerHTML = `<img src=${image} />`;