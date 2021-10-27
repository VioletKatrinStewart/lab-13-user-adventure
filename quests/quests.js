import quests from '../data/quest-data.js';
import { findById, scoreQuest, getUser, setUser } from '../utils/utils.js';

const params = new URLSearchParams(window.location.search);
const questData = findById(quests, params.get('id'));

const title = document.getElementById('quest-title');
title.textContent = questData.title;
const img = document.querySelector('img');
//console.log(img);
img.src = `../assets/${questData.image}`;
//console.log(questData.image);
const description = document.getElementById('quest-description');
description.textContent = questData.description;
const questChoices = document.getElementById('quest-choices');
for (let choice of questData.choices){
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    questChoices.append(label);

}
const button = document.createElement('button');
button.textContent = 'Choose My Choice';
questChoices.append(button);

questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();
    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    const choice = findById(questData.choices, selectedRadio.value);
    console.log(choice);
    const user = getUser();
    console.log(user);
    scoreQuest(choice, questData.id, user);
    setUser(user);
    const questDetails = document.getElementById('quest-details');
    questDetails.classList.add('hidden');
    //console.log(questDetails);
    const questResults = document.getElementById('results');
    console.log(questResults);
    questResults.classList.add('hidden');
    const resultP = document.createElement('p');
    resultP.textContent = choice.result;
    const backLink = document.createElement('a');
    backLink.href = '../map';
    backLink.textContent = 'Back to Map';

    questResults.append(resultP, backLink);

    questResults.classList.remove('hidden');
});