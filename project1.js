document.addEventListener("DOMContentLoaded", () => {
    let Balance = 1000;

    document.getElementById("submitGuess").addEventListener("click", () => {
        const betInput = document.getElementById("bet").value;
        const guessInput = document.getElementById("guess").value;

        let Bet = parseInt(betInput);
        let Inputno = parseInt(guessInput);
        const resultMessage = document.getElementById("resultMessage");
        const balanceDisplay = document.getElementById("balanceDisplay");

        if (isNaN(Bet) || Bet <= 0) {
            resultMessage.textContent = "Please enter a valid bet amount.";
            return;
        }

        if (Bet > Balance) {
            resultMessage.textContent = "You don't have enough balance.";
            return;
        }

        if (isNaN(Inputno) || Inputno < 1 || Inputno > 6) {
            resultMessage.textContent = "Please enter a number between 1 and 6.";
            return;
        }

        const min = 1;
        const max = 6;
        const Generatedno = Math.floor(Math.random() * (max - min + 1)) + min;

        if (Inputno == 6) {
            resultMessage.textContent = "Enter number between 1 and 5";
            return;
        }

        if (Inputno >= 5 && Generatedno <  6) {
            Balance = Balance + Bet * 0.1;
            resultMessage.textContent = `Generated number is ${Generatedno}. You guessed it right!`;
        }

        else if ((Inputno >= 4 && Inputno < 5) && Generatedno <= Inputno) {
            Balance = Balance + Bet * 0.5;
            resultMessage.textContent = `Generated number is ${Generatedno}. You guessed it right!`;
        }

        else if ((Inputno >= 3 && Inputno < 4) && Generatedno <= Inputno) {
            Balance = Balance + Bet * 0.7;
            resultMessage.textContent = `Generated number is ${Generatedno}. You guessed it right!`;
        }

        else if ((Inputno >= 2 && Inputno < 3) && Generatedno <= Inputno) {
            Balance = Balance + Bet * 0.9;
            resultMessage.textContent = `Generated number is ${Generatedno}. You guessed it right!`;
        }

        else if ((Inputno >= 1 && Inputno < 2) && Generatedno <= Inputno) {
            Balance = Balance + Bet;
            resultMessage.textContent = `Generated number is ${Generatedno}. You guessed it right!`;
        }

        else {
            Balance = Balance - Bet;
            resultMessage.textContent = `Generated number is ${Generatedno}. You guessed it wrong.`;
        }

        balanceDisplay.textContent = Math.floor(Balance); // update displayed balance
    });
});
