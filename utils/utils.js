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