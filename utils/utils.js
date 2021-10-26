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