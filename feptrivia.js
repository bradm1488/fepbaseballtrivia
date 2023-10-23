let index = 0
let score = 0

const questions = [
    {
        question:"How many bases are in baseball?", 
        answer:"4",
        choices:["1", "2", "3", "4"],
    }, {
        question:"How many position players are in baseball?",
        answer:"9",
        choices:["5", "7", "9", "11"],
    }, {
        question:"How many innings are in one game?",
        answer:"9",
        choices:["7", "8", "9", "10"],
    }, {
        question:"How many outs does a team have when they are at bat in a single inning?",
        answer:"3",
        choices:["3", "4", "5", "6"],
    }, {
        question:"How many outfield positions are there?",
        answer:"3",
        choices:["1", "2", "3", "4"],
    }, {
        question:"How many runs is a home run if a team has no runners on base?",
        answer:"1",
        choices:["1", "2", "3", "4"],
    }, {
        question:"Who throws the ball from a mound to try and get a batter out?",
        answer:"Pitcher",
        choices:["Designated Hitter", "Pitcher", "Catcher", "Short Stop"],
    }, {
        question:"How many runs are scored in a grand slam?",
        answer:"4",
        choices:["2", "3", "4", "5"],
    }, {
        question:"What position players typically wear different gloves in the field?",
        answer:"Catcher and First Baseman",
        choices:["Center Fielder and Pitcher", "Designated Hitter and Right Fielder", "Pitcher and Short Stop", "Catcher and First Baseman"],
    }, {
        question:"What type of pitch is a version of a fastball?",
        answer:"Four Seamer",
        choices:["Knuckle Ball", "Four Seamer", "Curveball", "Slider"],
    }]

const question = document.querySelector(".question")

const choice0 = document.querySelector("#zero")
const choice1 = document.querySelector("#one")
const choice2 = document.querySelector("#two")
const choice3 = document.querySelector("#three")

const next = document.querySelector(".next")
const status = document.querySelector(".status") 
const message = document.querySelector("h4")
const allchoices = document.querySelectorAll(".choice")

function displayQuestion() {
    let currentQuestion = questions[index]
    let choices = currentQuestion.choices
    question.innerText = currentQuestion.question
    choice0.innerText = choices[0]
    choice1.innerText = choices[1]
    choice2.innerText = choices[2]
    choice3.innerText = choices[3]
}

const handleClick = (e) => {
    let userChoice = e.target.innerText
    console.log(userChoice)
    if (userChoice === questions[index].answer) {
        message.innerText = "You got the right answer!"
        score += 100
    }
    else {
        message.innerText = "Wrong answer!"
    }
    allchoices.forEach((choice) => {
        choice.disabled = true
    })
    status.innerText = score
}

for (i = 0; i < allchoices.length; i++) {
    allchoices[i].addEventListener("click", handleClick)
}

next.addEventListener("click", () => {
    if (index < questions.length - 1) {
        index++
        allchoices.forEach((choice) => {
            choice.disabled = false
        })
    } else {
            next.disabled = true
    }
    displayQuestion()
})

displayQuestion()