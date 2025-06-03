// משחק זיכרון - התאמת הגדרות
const memoryCards = [
    { id: 1, text: "פעילות חופשית ומודעת", author: "הויזינחה" },
    { id: 2, text: "כלי לפיתוח יצירתיות", author: "פינק" },
    { id: 3, text: "בניית קהילה ותרבות", author: "קאלווה" },
    { id: 4, text: "מחוץ לחיים הרגילים", author: "הויזינחה" },
    { id: 5, text: "חשיבה מחוץ לקופסה", author: "פינק" },
    { id: 6, text: "אלמנטים חברתיים", author: "קאלווה" }
];

let flippedCards = [];
let matchedPairs = 0;

function createMemoryGame() {
    const memoryGrid = document.querySelector('.memory-grid');
    const shuffledCards = [...memoryCards, ...memoryCards]
        .sort(() => Math.random() - 0.5);

    memoryGrid.innerHTML = shuffledCards.map((card, index) => `
        <div class="memory-card" data-id="${card.id}" data-index="${index}">
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">
                    <p>${card.text}</p>
                    <small>${card.author}</small>
                </div>
            </div>
        </div>
    `).join('');

    // הוספת מאזיני אירועים
    document.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('click', () => flipCard(card));
    });
}

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const id1 = card1.dataset.id;
    const id2 = card2.dataset.id;

    if (id1 === id2) {
        matchedPairs++;
        if (matchedPairs === memoryCards.length) {
            showVictoryMessage();
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }

    flippedCards = [];
}

function showVictoryMessage() {
    const message = document.createElement('div');
    message.className = 'victory-message';
    message.innerHTML = `
        <h3>כל הכבוד! 🎉</h3>
        <p>הצלחת להתאים את כל ההגדרות!</p>
        <button onclick="createMemoryGame()">שחק שוב</button>
    `;
    document.querySelector('.memory-game').appendChild(message);
}

// שאלות ספציפיות לדף זה
const gameDefinitionQuestions = [
    {
        question: "מהו אחד המאפיינים המרכזיים של משחק לפי הויזינחה?",
        options: ["פעילות רצינית", "פעילות חופשית", "פעילות מחייבת", "פעילות תחרותית"],
        correctAnswer: 1
    },
    {
        question: "איזה חוקר מתמקד במשחק ככלי לפיתוח יצירתיות?",
        options: ["הויזינחה", "פינק", "קאלווה", "סאטון סמית'"],
        correctAnswer: 1
    }
];

// אתחול הדף
document.addEventListener('DOMContentLoaded', () => {
    createMemoryGame();
    
    // הוספת מאזין לכפתור החידון
    const quizButton = document.querySelector('.start-quiz');
    if (quizButton) {
        quizButton.addEventListener('click', () => {
            startQuiz(gameDefinitionQuestions);
        });
    }
}); 