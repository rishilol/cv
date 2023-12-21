 cvx// Start coding here
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 1024
canvas.height = window.innerHeight/window.innerWidth * canvas.width

function resized() {
    canvas.width = 1024
    canvas.height = window.innerHeight/window.innerWidth * canvas.width
}

function changeColor(color) {
    canvas.style.backgroundColor = color
}

var currentPoint = [canvas.width/2, canvas.height/2, 0]
function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    ctx.strokeStyle = `rgba(0, 0, 0, ${1 - currentPoint[2]/100})`
    ctx.beginPath()
    ctx.arc(currentPoint[0], currentPoint[1], currentPoint[2], 0, 2*Math.PI)
    ctx.closePath()
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(currentPoint[0], currentPoint[1], currentPoint[2]*0.8, 0, 2*Math.PI)
    ctx.closePath()
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(currentPoint[0], currentPoint[1], currentPoint[2]*0.6, 0, 2*Math.PI)
    ctx.closePath()
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(currentPoint[0], currentPoint[1], currentPoint[2]*0.4, 0, 2*Math.PI)
    ctx.closePath()
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(currentPoint[0], currentPoint[1], currentPoint[2]*0.2, 0, 2*Math.PI)
    ctx.closePath()
    ctx.stroke()
    currentPoint[2]++
    if (currentPoint[2] >= 100) {
        currentPoint[2] = 0
        currentPoint[0] = Math.random()*canvas.width
        currentPoint[1] = Math.random()*canvas.height
    }
}
animate()

