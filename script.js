const eyeBtn = document.querySelector('#eyeBtn')
const password = document.getElementById('password')

eyeBtn.addEventListener(
    'click',
    function () {
        if (password.type == 'password') {
            password.setAttribute('type', 'text')
            eyeBtn.src = "./eye-icons/eye-open.png"
        } else {
            password.setAttribute('type', 'password')
            eyeBtn.src = "./eye-icons/eye-close.png"
        }
    }
)