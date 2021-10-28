import quests from '../data/quest-data.js';

export function generateUser(formData){
    return { 
        completed: {},
        candy: 0,
        hp: 3,
        name: formData.get('name'),
        costume: formData.get('costume'),
    };
}


export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function findById(items, id) {
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}


export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function scoreQuest(choiceObject, questId, userObject){
    userObject.hp += choiceObject.hp;
    userObject.candy += choiceObject.candy;
    userObject.completed[questId] = true;
}

export function loadProfile(){
    // grab the user info from local storage
    const user = getUser();
    // update the DOM with the user info
    const img = document.getElementById('user-image');
    img.src = `../assets/${user.costume}.png`;
    const name = document.getElementById('user-name');
    name.textContent = user.name;
    const candy = document.getElementById('user-candy');
    candy.textContent = user.candy;
    const hp = document.getElementById('user-hp');
    hp.textContent = user.hp;
} 

export function hasCompletedAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}