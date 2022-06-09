import {
    register,
} from './api/user.api.js'

document.getElementById('register').addEventListener('click', async () => {
    const name = document.getElementById('name').value
    const phoneNumber = document.getElementById('phoneNumber').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const data = { name, phoneNumber, email, password }
    await register(data)
})