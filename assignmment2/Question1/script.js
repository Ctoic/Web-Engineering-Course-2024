const fortunes = [
    "You will have a great day!",
    "Adventure awaits you.",
    "Your efforts will soon be rewarded.",
    "A pleasant surprise is in store for you.",
    "Believe in yourself and good things will happen."
];

function displayFortune() {
    const fortuneElement = document.getElementById('fortune');
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneElement.textContent = fortunes[randomIndex];
}

window.onload = displayFortune;
