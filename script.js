const quotes = [
  "Счастье — это не конечный пункт, а способ путешествовать.",
    "Успех приходит к тем, кто верит в себя и свои идеи.",
    "Знания — это сила, но мудрость — это умение использовать знания.",
    "Время, потраченное с удовольствием, не считается потраченным впустую.",
    "Дорога в тысячу миль начинается с одного шага."
    ];
const quotesElement = document.getElementById("quote");
const button = document.getElementById("generate-quote");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quotesElement.textContent = randomQuote;
});