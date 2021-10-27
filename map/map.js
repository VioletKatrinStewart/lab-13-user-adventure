import quests from '../data/quest-data.js';
import { getUser, loadProfile } from '../utils/utils.js';
const mapLinks = document.getElementById('map-links');
const user = getUser();
loadProfile();
for (let quest of quests){
    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {

        displayLink(quest);
    }
}

function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('quest');
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;
    mapLinks.appendChild(a);
} 

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;

    mapLinks.appendChild(span);
} 