/** Calcular idade
 *  Mostra sempre a minha idade correta no front
 *  Calcula a diferença de tempo entre a data atual e a data que nasci
 */

const ageElement = document.querySelector('.age');

const currentDate = new Date();
const bornDate = new Date('2002,03,03');

const age = currentDate.getTime() - bornDate.getTime();
const ageInYears = Math.floor(age / 31556926000);

ageElement.innerText = ageInYears;
