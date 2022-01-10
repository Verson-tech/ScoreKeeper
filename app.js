
colors = [
    '#f5faf6',
    '#fafaf5',
    '#faf5f9',
    '#f6f5fa',
    '#faf7f5',
    '#dbd8d5',
    '#f7e9f5',
    '#f7f6dc'
  ];

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
        createRandomCircle()
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
        circle.remove(circle)
      }
}


// ping pong live
const circle = document.createElement("div");
function createRandomCircle() {
    
    const size = getRandomSize(10, 60);
    const playground = document.querySelector('#playground')
    const { width, height } = playground.getBoundingClientRect();
    const x = getRandomSize(0, width - size);
    const y = getRandomSize(0, height - size);
  
    circle.classList.add("circle");
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
  
    setColor(circle);
  
    playground.append(circle);
  }


  function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }