const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerHTML = '0'

  const updateCounter = () => {
    const target = Number(counter.getAttribute('data-target'))
    const c = Number(counter.innerHTML)

    const increment = target / 200

    if (c < target) {
      counter.innerHTML = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerHTML = target
    }
    console.log(typeof target, target)
  }
  updateCounter()
})
