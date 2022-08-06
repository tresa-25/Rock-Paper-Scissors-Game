const game = () => {
    // scores of player and computer
    let pScore = 0;
    let cScore = 0;

    // creating start game function
    const startGame = () => {
        // taking play button, intro screen and match screen
        const playButton = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const matchScreen = document.querySelector('.match')

        // When someone clicks on play then do the following
        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
            matchScreen.classList.remove('fadeOut')
        });
    }
    //play match funtion
    const playMatch = () => {
        // taking option buttons , player hand and computer hand
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        // getting computer options by generating random numbers
        const computerOptions = ['rock', 'paper', 'scissors'];
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            //for shaking the hands
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            })
        })

        //taking the options and doing accordingly
        options.forEach(option => {
            option.addEventListener('click', function () {
                //computer's choice
                // generating random number between 1 and 3
                const computerNumber = Math.floor(Math.random() * 3);
                // selecting rock paper scissor based on the number generated
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    compare(this.textContent, computerChoice);

                    // update the images
                    playerHand.src = `images/${this.textContent}.png`
                    computerHand.src = `images/${computerChoice}.png`
                }, 2000)

                // animating the hands up and down
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';

            })
        })
    }

    
    //updating the score
    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compare = (playerChoice,computerChoice)=>{
        const winner = document.querySelector('.winner')

        //tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie"
            return;
        }

        //rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer wins";
                cScore++
                updateScore();
                return;
            }
        }

        //paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Computer wins";
                cScore++
                updateScore();
                return;
            }
            else{
                winner.textContent = "Player wins";
                pScore++
                updateScore();
                return;
            }
        }

        //scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = "Player wins";
                pScore++
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer wins";
                cScore++
                updateScore();
                return;
            }
        }
    }


    startGame();
    playMatch();
}

game();
