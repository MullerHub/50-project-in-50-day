const smallCups = document.querySelectorAll('.cup-small')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const listers = document.getElementById('liters')

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highLightCups(idx))
})

function highLightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
}
