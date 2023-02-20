// Игра 
const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggIeGameState = () => {
    gameState.taskInProgress = !gameState.taskInProgress
}

const gameElements = document.getElementsById("my game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProgress: false,
    rightAnswer: null,
}

btnGame.onclick = () => {
    if (!gameState.taskInProgress) {
        title.innerText = "Игра началась!"
        userAnswer.value = 0
        userTask.innerText = getTask() // генерируем задачу и ответ
        userAnswer.hidden = false
        btnGame.innerText = "Проверить!"
        gameState.taskInProgress = true
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value // сравнить ответ с правильным
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer // выводим результат
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        btnGame.innerText = "Начать заново!"
        gameState.taskInProgress = false
    }
}

