const calculateButton = document.querySelector('.calcuteButton')

calculateButton.addEventListener('click', (event)=> {
    event.preventDefault() // ira fazer com que nao apague os numeros
    const weight = Number(document.querySelector('#weight').value)
    const height = Number(document.querySelector('#height').value)
    const imc = (weight / (height / 100) ** 2).toFixed(2)
    console.log(imc)

    if (height && weight) {
        let situation = ' '
        if (imc < 18.5) {
            situation = 'Magreza'
        } else if (imc >= 18.5 && imc < 24.9) {
            situation = 'Peso normal'
        } else if (imc >= 24.9 && imc < 29.9) {
            situation = 'Sobrepeso'
        } else if (imc >= 29.9 && imc < 34.9) {
            situation = 'Obsesidade I'
        } else if (imc >= 18.5 && imc < 24.9) {
            situation = 'Obsesidade II'
        } else if (imc >= 18.5 && imc < 24.9) {
            situation = 'Obsesidade III'
        }
            
            const result = document.querySelectorAll('.result')
            result.forEach((result) => {
                result.innerHTML = `Seu IMC é ${imc} ${situation}`
                console.log(result)
            })

            const containerModal = document.querySelector('.containerModal')
            containerModal.style.display = 'grid'
        } else {
    alert('Por favor insira peso e altura')
    }
})

const closeButton = document.querySelector('.closeButton')
closeButton.addEventListener('click', () => {
    const containerModal = document.querySelector('.containerModal')
            containerModal.style.display = 'none'
})
