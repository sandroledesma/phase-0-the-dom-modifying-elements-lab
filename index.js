// Write your code here!

const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.id = 'victory';

newHeader.textContent = 'Sandro is the champion';
