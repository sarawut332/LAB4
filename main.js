const loginForm = document.querySelector('.login-form')
const inp_username = document.querySelector('.username')
const inp_password = document.querySelector('.password')

const validateInout= (inputObj) =>[

]

const hdlLogin = e => {
    e.preventDefault()
    console.log(loginForm.elements)
    let allInput = loginForm.elements
    let inputObj = {}
    for(let el of loginForm.elements) {
        inputObj[el.id] = el.value
    }
    console.log(inputObj)
    // console.log(allInput[0].value);
    // console.log(allInput['username'].id);
    // console.log(allInput['username'].value);

    // console.log(allInput['role'].id);
    // console.log(inp_username.value)
    // console.log(inp_password.value)
    
}

loginForm.addEventListener('submit',  hdlLogin)