import { generateUser, setUser } from './utils/utils.js';

// grab user form
const userForm = document.getElementById('user-form');

// On form submit
userForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(userForm);
    const userObj = generateUser(formData);
    setUser(userObj);
    window.location.replace('./map');
});