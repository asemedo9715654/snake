document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startButton = document.querySelector('.strart')
    const width = 100
    let currentIndex = 0
    let appleIndex = 0
    let currentSnake = [2, 1, 0]

    let direction = 1
    let score = 0
    let speed = 0.9

    let intervalTime = 0
    let interval = 0




    function startGame(){
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        direction = 1
        scoreDisplay.innerText = score
        intervalTime =1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake') )
    interval = setInterval((moveOutComes,inter))

    }

    function control(e) {
        squares[currentIndex].classList.remove('snake')

        if (e.keyCode === 39) {
            diretion = 1
        } else if (e.keyCode === 38) {
            diretion = -width
        } else if (e.keyCode === 37) {
            diretion - 1
        } else if (e.keyCode === 40) {
            diretion = +width
        }
    }


    document.addEventListener('keyup', control )
})