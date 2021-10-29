import { getUser, candyScore, loadProfile } from '../utils/utils.js';
import { lowCandy, mediumCandy, highCandy } from '../data/gameover-data.js';

loadProfile();

const user = getUser();
const endResult = (candyScore(user.candy));
//console.log(user);

const timeResult = document.getElementById('time-result');
const candyResult = document.getElementById('candy-result');

if (endResult === 'lowCandy') {
    timeResult.textContent = lowCandy.time;
    candyResult.textContent = lowCandy.candy;
} else if (endResult === 'mediumCandy') {
    timeResult.textContent = mediumCandy.time;
    candyResult.textContent = mediumCandy.candy;
} else {
    timeResult.textContent = highCandy.time;
    candyResult.textContent = highCandy.candy;
}