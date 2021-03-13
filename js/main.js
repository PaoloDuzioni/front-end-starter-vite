// App styles
import '../scss/style.scss';

// Modules
import sayHi from './utils/sayHi';
console.log(sayHi());

// API call example
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log('API Response', json));
