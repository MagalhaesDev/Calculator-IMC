// ==================  BOTÃO PARA ALTERAR A COR DO SITE =================

function themeSwitcher() {
  const circle = document.querySelector('.circle')
  const body = document.querySelector('body')
  const button = document.querySelector('#calc')
  const h2 = document.querySelector('.form-container h2')
  const header = document.querySelector('header')
  const circleOne = document.querySelector('.circle-one')
  const circleTwo = document.querySelector('.circle-two')
  const buttonClose = document.querySelector('#close-modal')
  const buttonReset = document.querySelector('#reset-site')

  circle.addEventListener('click', e => {
    e.target.classList.toggle('on-click')

    if (e.target.classList.contains('on-click')) {
      buttonReset.style.background = '#070001'
      buttonClose.style.background = '#070001'
      body.style.background = '#35352b'
      button.style.background = 'black'
      h2.style.color = '#ffff'
      header.style.background = 'black'
      circle.style.background = '#707070'
      circleOne.style.background = '#070001'
      circleTwo.style.background = '#070001'
    } else {
      body.style.background = '#bd5067'
      button.style.background = '#662641'
      h2.style.color = '#e2e2e2'
      header.style.background = '#662641'
      circle.style.background = '#bd5067'
      circleOne.style.background = '#66264171'
      circleTwo.style.background = '#66264171'
      buttonReset.style.background = '#195319'
      buttonClose.style.background = '#992929'
    }
  })
}

// ==================  INFORMAÇÃO DA INTERROGAÇÃO =================

function interrogationInformation() {
  const p = document.querySelector('.help p')
  const interrogation = document.querySelector('.interrogation')

  p.addEventListener('mouseover', () => {
    interrogation.classList.toggle('on-interrogation')
  })

  p.addEventListener('mouseout', () => {
    interrogation.classList.toggle('on-interrogation')
  })
}

// ==================  CALCULO DO IMC =================

receiveValueInputAndCalc = () => {
  const weight = document.querySelector('form label input#weight')
  const height = document.querySelector('form label input#height')
  const form = document.querySelector('form')
  const modal = document.querySelector('.modal')
  const resetSite = document.querySelector('#reset-site')
  const closeModal = document.querySelector('#close-modal')
  const textPrince = document.querySelector('#result-msg h2')
  const textSecondary = document.querySelector('#result-msg p')

  form.addEventListener('submit', e => {
    e.preventDefault()
    let finishedResult = ''

    const valueWeight = weight.value
    const valueHeight = height.value

    const result = valueWeight / valueHeight ** 2

    console.log(result)
    finishedResult = result.toFixed(2)
    if (finishedResult < 1) {
      alert('Preencha com numeros ( Não se esqueça da virgula na altura )')
      return
    } else if (finishedResult < 18.5) {
      ;(textPrince.innerHTML = `Seu IMC é ${finishedResult}`),
        (textSecondary.innerHTML = '(Abaixo do peso)')
    } else if (finishedResult >= 18.5 && finishedResult <= 24.9) {
      ;(textPrince.innerHTML = `Seu IMC é ${finishedResult}`),
        (textSecondary.innerHTML = '(Peso normal)')
    } else if (finishedResult >= 25 && finishedResult <= 29.9) {
      ;(textPrince.innerHTML = `Seu IMC é ${finishedResult}`),
        (textSecondary.innerHTML = '(Sobrepeso)')
    } else if (finishedResult >= 30 && finishedResult <= 34.9) {
      ;(textPrince.innerHTML = `Seu IMC é ${finishedResult}`),
        (textSecondary.innerHTML = '(Obesidade grau 1)')
    } else if (finishedResult >= 35 && finishedResult <= 39.9) {
      ;(textPrince.innerHTML = `Seu IMC é ${finishedResult}`),
        (textSecondary.innerHTML = '(Obesidade grau 2)')
    } else if (finishedResult >= 40) {
      ;(textPrince.innerHTML = `Seu IMC é ${finishedResult}`),
        (textSecondary.innerHTML = '(Obesidade grau 3)')
    } else {
      alert('Preencha com numeros')
      return
    }

    if (valueWeight && valueHeight) {
      modal.classList.toggle('open')
    }

    if (!valueWeight && !valueHeight) {
      alert('Preencha os campos')
      return
    }
  })

  resetSite.addEventListener('click', () => {
    document.location.reload(true)
  })

  closeModal.addEventListener('click', () => {
    if (modal.classList.contains('open')) {
      modal.classList.remove('open')
    }
  })
}

// ==================  EXECUTANDO AS FUNÇÕES =================

interrogationInformation()
themeSwitcher()
receiveValueInputAndCalc()
