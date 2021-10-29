import { getUser, candyScore, loadProfile } from '../utils/utils.js';
import { lowCandy, mediumCandy, highCandy } from '../data/gameover-data.js';

loadProfile();

const user = getUser();
console.log(user);

const timeResult = document.getElementById('time-result');
const candyResult = document.getElementById('candy-result');

if (candyScore(user.candy) === 'lowCandy') {
    timeResult.textContent = lowCandy.time;
    candyResult.textContent = lowCandy.candy;
}

if (candyScore(user.candy) === 'mediumCandy') {
    timeResult.textContent = mediumCandy.time;
    candyResult.textContent = mediumCandy.candy;
}

if (candyScore(user.candy) === 'highCandy') {
    timeResult.textContent = highCandy.time;
    candyResult.textContent = highCandy.candy;
}