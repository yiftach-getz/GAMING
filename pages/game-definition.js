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

// חידון 10 שאלות מכל נושאי האתר
const quizQuestions = [
  {
    question: 'מהי אחת מהגדרות המשחק לפי הויזינחה?',
    options: [
      'פעילות חופשית, מודעת, מחוץ לחיים הרגילים',
      'משחק הוא רק תחרות',
      'משחק הוא פעילות מסוכנת',
      'משחק הוא עבודה קשה'
    ],
    answer: 0
  },
  {
    question: 'איזה סוג משחק מתמקד בתכנון ואסטרטגיה?',
    options: [
      'משחקי פעולה',
      'משחקי אסטרטגיה',
      'משחקי ספורט',
      'משחקי מזל'
    ],
    answer: 1
  },
  {
    question: 'מהו Agon לפי קאילואה?',
    options: [
      'משחקי מזל',
      'משחקי תחרות',
      'משחקי חיקוי',
      'משחקי סחרור'
    ],
    answer: 1
  },
  {
    question: 'איזה משחק נחשב למשחק הארקייד הראשון?',
    options: [
      'Pac-Man',
      'Spacewar!',
      'Pong',
      'Tetris'
    ],
    answer: 2
  },
  {
    question: 'מהו אווטאר במשחקים דיגיטליים?',
    options: [
      'דמות ויזואלית שמייצגת את השחקן',
      'מחשב חזק',
      'כלי נשק במשחק',
      'מדריך למשחק'
    ],
    answer: 0
  },
  {
    question: 'מהו משחוק (Gamification)?',
    options: [
      'שילוב אלמנטים משחקיים במערכות שאינן משחק',
      'משחקי מחשב בלבד',
      'משחקי ספורט',
      'משחקי לוח בלבד'
    ],
    answer: 0
  },
  {
    question: 'איזו טכנולוגיה מאפשרת לשלב אלמנטים וירטואליים בעולם האמיתי?',
    options: [
      'מציאות רבודה (AR)',
      'משחקי לוח',
      'משחקי תפקידים',
      'משחקי ספורט'
    ],
    answer: 0
  },
  {
    question: 'מהו Mimicry לפי קאילואה?',
    options: [
      'משחקי תחרות',
      'משחקי מזל',
      'משחקי חיקוי ותפקידים',
      'משחקי סחרור'
    ],
    answer: 2
  },
  {
    question: 'מהו אחד היתרונות של משחקים בלמידה?',
    options: [
      'פיתוח כישורים חברתיים',
      'פיתוח כישורי נהיגה',
      'פיתוח כישורי בישול',
      'פיתוח כישורי שירה'
    ],
    answer: 0
  },
  {
    question: 'איזה הישג ייחשב להצלחה בחידון?',
    options: [
      '8 תשובות נכונות ומעלה',
      '5 תשובות נכונות',
      '2 תשובות נכונות',
      '10 תשובות לא נכונות'
    ],
    answer: 0
  }
];

let quizIndex = 0;
let quizScore = 0;

function startQuiz() {
  quizIndex = 0;
  quizScore = 0;
  showQuizQuestion();
}

function showQuizQuestion() {
  const quizSection = document.querySelector('.mini-quiz');
  if (quizIndex >= quizQuestions.length) {
    showQuizResult();
    return;
  }
  const q = quizQuestions[quizIndex];
  quizSection.innerHTML = `
    <div class="quiz-question">
      <h4>${q.question}</h4>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button onclick="checkQuizAnswer(${i})">${opt}</button>`).join('')}
      </div>
    </div>
  `;
}

function checkQuizAnswer(selected) {
  const q = quizQuestions[quizIndex];
  if (selected === q.answer) quizScore++;
  quizIndex++;
  showQuizQuestion();
}

function showQuizResult() {
  const quizSection = document.querySelector('.mini-quiz');
  const percent = Math.round((quizScore / quizQuestions.length) * 100);
  let trophy = '';
  let fireworks = '';
  if (percent >= 80) {
    trophy = '<div style="font-size:3rem;margin-bottom:1rem;">🏆</div>';
    fireworks = '<div class="fireworks"></div>';
    setTimeout(showFireworks, 100);
  }
  quizSection.innerHTML = `
    <div class="quiz-result">
      <h3>סיימת את החידון!</h3>
      ${trophy}
      <div>הציון שלך: ${quizScore} מתוך ${quizQuestions.length} (${percent}%)</div>
      <button onclick="startQuiz()">נסה שוב</button>
      ${fireworks}
    </div>
  `;
}

// זיקוקים
function showFireworks() {
  const container = document.querySelector('.fireworks');
  if (!container) return;
  for (let i = 0; i < 12; i++) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = (10 + Math.random() * 80) + '%';
    firework.style.animationDelay = (Math.random() * 0.7) + 's';
    container.appendChild(firework);
  }
}

// CSS לזיקוקים
const style = document.createElement('style');
style.innerHTML = `
.fireworks { position: relative; height: 80px; margin: 1rem 0; }
.firework {
  position: absolute;
  bottom: 0;
  width: 8px;
  height: 40px;
  background: linear-gradient(180deg,#ffe066,#ff6f61,#6c63ff,#4e54c8);
  border-radius: 4px;
  opacity: 0.7;
  animation: fireworkUp 0.8s cubic-bezier(.39,.575,.56,1) forwards;
}
@keyframes fireworkUp {
  0% { transform: scaleY(0.2) translateY(0); opacity: 0.7; }
  80% { opacity: 1; }
  100% { transform: scaleY(1.2) translateY(-60px); opacity: 0; }
}
`;
document.head.appendChild(style);

// הפעלת החידון אוטומטית בלחיצה
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.start-quiz');
  if (btn) btn.onclick = startQuiz;
});

// אתחול הדף
document.addEventListener('DOMContentLoaded', () => {
    createMemoryGame();
    
    // הוספת מאזין לכפתור החידון
    const quizButton = document.querySelector('.start-quiz');
    if (quizButton) {
        quizButton.addEventListener('click', () => {
            startQuiz();
        });
    }
}); 