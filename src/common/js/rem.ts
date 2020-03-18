const designWidth = 375
const scale = 100 / 2

function resize() {
  const clientWidth = document.documentElement.clientWidth
  const scale = 100
  document.documentElement.style.fontSize = (clientWidth / designWidth * scale) + 'px'
}

resize()
window.addEventListener('resize', resize)