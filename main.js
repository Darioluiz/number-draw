const numberRandom = Math.round(Math.random() * 10)
let attempts = 1

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const inputNumber = document.querySelector('#inputNumber')
const reset = document.querySelector('#reset')

/*Funções*/
function tryClick(event) {
  event.preventDefault()

  const numberInput = document.querySelector('#numberUser').value

  if (Number(numberInput) == numberRandom) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector(
      '.screen2 h1'
    ).innerText = `Acertou em ${attempts} tentativas`
  }
  document.querySelector('#numberUser').value = ''
  attempts++
}

function clear() {
  screen2.classList.add('hide')
  screen1.classList.remove('hide')

  attempts = 1
}

/*Eventos*/
inputNumber.addEventListener('click', tryClick)
reset.addEventListener('click', clear)
