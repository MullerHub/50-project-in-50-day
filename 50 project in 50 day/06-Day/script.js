const carregarTexto = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let time = setInterval(carregamento, 30)

function carregamento() {
  load++

  if (load > 99) {
    clearInterval(time)
  }

  carregarTexto.innerText = `${load}%`
  carregarTexto.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
}

const scale = (nummero, n_menor, n_maior, x_menor, x_maior) => {
  return (
    ((nummero - n_menor) * (x_maior - x_menor)) / (n_maior - n_menor) + x_menor
  )
}
/*
 */
