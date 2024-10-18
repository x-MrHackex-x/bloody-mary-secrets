function checkAnswer() {
    const userInput = document.getElementById("userInput").value.trim();
    const messageElement = document.getElementById("message");

    // Correct flag (decoded message)
    const correctAnswer = "When the candles flicker, she appears behind you.";

    if (userInput === correctAnswer) {
        messageElement.textContent = "Correct! 🎉 You've found the flag: CTF{Candles_In_The_Dark}";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Incorrect, try again!";
        messageElement.style.color = "red";
    }
}

function showHint() {
    const hintElement = document.getElementById("hint");
    hintElement.style.display = hintElement.style.display === "none" ? "block" : "none";
}
