var coinsEl = document.getElementById("coins");
var messageEl = document.getElementById("message");
var showBidNo = document.getElementById("show-bid-no");
var showDiceNo = document.getElementById("show-dice-no");
var bidNoInput = document.getElementById("bid-no");
var amountInput = document.getElementById("amount");
var btnEl = document.getElementById("play-game-btn");

var coins = 1000;
coinsEl.innerHTML = coins;

// Note: Bid no validation handler...!
function validateBidNo() {
    if ((bidNoInput.value >= 1) && (bidNoInput.value <= 6)) {
        return true;
    }
    else {
        return false;
    }
};

// Note: Amount validation handler...!
function validateAmount() {
    if ((amountInput.value >= 1) && (amountInput.value <= 500)) {
        return true;
    }
    else {
        return false;
    }
};

// Note: Function to play game...!
function playGame() {
    if (validateBidNo()) {
        if (validateAmount()) {

            var dice = Math.ceil(Math.random() * 6);
            showBidNo.innerHTML = bidNoInput.value;
            showDiceNo.innerHTML = dice;

            if (dice == bidNoInput.value) {
                coins = coins + Number(amountInput.value);
                messageEl.innerHTML = "You won the bid! ❤️";
                coinsEl.innerHTML = coins;
            }

            else {
                coins = coins - Number(amountInput.value);
                messageEl.innerHTML = "You loss the bid! 😢";
                coinsEl.innerHTML = coins;

                if (coins == 0) {
                    btnEl.disabled = true;
                }
            }
        }

        else {
            alert("Amount should not less than 1 or greater than 500");
        }
    }

    else {
        alert("Bid No should not less than 1 or greater than 6");
    };
};