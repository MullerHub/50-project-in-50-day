const smallCups = document.querySelectorAll('.cup-small')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const listers = document.getElementById('liters')

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highLightCups(idx))
})

function highLightCups(idx) {
  console.log(idx)
}
