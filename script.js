const regForm = document.querySelector('#regform');
const email = document.querySelector('#email');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const output = document.querySelector('#users')


const validateText = (input) => {
  

  if(input.value.trim() === '') {
    setError (input,'Name can not be empty')
    input.focus();
    return false;
  }
  else if (input.value.trim().length < 2) {
    setError(input,'Name must be atleast 2 chars long');
    input.focus();
    return false; 
  }
  else {
    setSucsses(input);
    return true;
  }
}




const validateEmail = email => {
  let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(email.value.trim() === '') {
    setError(email, 'You need to enter an email address');
    return false;
  } 
  else if(!regEx.test(email.value)) {
    setError(email, 'Email address is not valid');
    return false;
  }
  else {
    setSucsses(email)
    return true;
  }
}
  

// email.addEventListener('keyup', () => {
  
//     validateEmail(email);
// })




const setError = (input , textMessage) => {
  const parent=input.parentElement;
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
  parent.querySelector('.invalid-feedback').innerText = textMessage;
}
const setSucsses = input => {
  const parent=input.parentElement;
  input.classList.remove ('is-invalid');
  input.classList.add('is-valid');
}

const validate = input => {
  switch(input.type) {
    case 'text':return validateText(input)
    case 'email':return validateEmail(input)
    default:
      break;
  }
}


const listusers = () => {
  output.innerHTML = '';
  users.forEach(user => {
    output.innerHTML +=
    ` <div id="${user.id}" class=" col-md-12 d-flex alig-itemes-center  ">
    <p h4 class ="fname">${user.firstname}</p>
    <p h4 class = "lname">${user.lastname}</p>
    </div>
    <div " class="mb-1 col-md-12 d-flex alig-itemes-center  ">
     <p  h4 class="mail">${user.email}</p>
   </div>

`

  });
}

const users = []


regForm.addEventListener('submit', e => {
    e.preventDefault()

    errors = []
    for (let i=0; i< regForm.length; i++){
      errors[i] = validate (regForm[i])
    }
    console.log(errors)
  

       if(!errors.includes(false)) {
         const user = {
           id:Date.now().toString(),
           firstname: firstname.value,
           lastname : lastname.value,
           email:email.value,
           completed :true

         }
         users.push(user);
         listusers();
         console.log(user)
        }
        
        
        
        
        
        
        
      })
      
     






        
