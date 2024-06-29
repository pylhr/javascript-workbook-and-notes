alert('i am from script.js outside')

const div = document.getElementById('boilerplate')

const header = document.createElement('h2');

const headerText = document.createTextNode('hey I\'m too from script.js' );

header.appendChild(headerText);

document.body.appendChild(header)