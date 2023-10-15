// calcular idade
// para mostrar sempre automaticamente minha idade correta

const ageElement = document.querySelector('.age');

const currentDate = new Date();
const bornDate = new Date('2002,03,03');

const age = currentDate.getTime() - bornDate.getTime();
const ageInYears = Math.floor(age / 31556926000);

ageElement.innerText = ageInYears;
