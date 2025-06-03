// מערך של שאלות לדוגמה
const quizQuestions = [
    {
        question: "מהו אחד משלושת מימדי המשחק לפי הויזינחה?",
        options: ["פעולה (Play)", "תחרות", "ניצחון", "הפסד"],
        correctAnswer: 0
    },
    {
        question: "מהו המונח המתאר את שילוב עקרונות משחקיים בתחומים אחרים?",
        options: ["משחוק", "משחקיות", "גיימינג", "אינטראקטיביות"],
        correctAnswer: 0
    }
];

// פונקציה להצגת חידון
function startQuiz() {
    const quizContainer = document.querySelector('.quiz-container');
    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
        const question = quizQuestions[currentQuestion];
        quizContainer.innerHTML = `
            <div class="quiz-card">
                <h3>שאלה ${currentQuestion + 1} מתוך ${quizQuestions.length}</h3>
                <p>${question.question}</p>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <button class="option-btn" data-index="${index}">${option}</button>
                    `).join('')}
                </div>
            </div>
        `;

        // הוספת מאזיני אירועים לכפתורים
        document.querySelectorAll('.option-btn').forEach(button => {
            button.addEventListener('click', () => {
                const selectedAnswer = parseInt(button.dataset.index);
                if (selectedAnswer === question.correctAnswer) {
                    score++;
                    button.style.backgroundColor = '#4CAF50';
                } else {
                    button.style.backgroundColor = '#f44336';
                }
                
                setTimeout(() => {
                    currentQuestion++;
                    if (currentQuestion < quizQuestions.length) {
                        showQuestion();
                    } else {
                        showResults();
                    }
                }, 1000);
            });
        });
    }

    function showResults() {
        quizContainer.innerHTML = `
            <div class="quiz-card">
                <h3>סיימת את החידון!</h3>
                <p>הציון שלך: ${score} מתוך ${quizQuestions.length}</p>
                <button class="start-quiz" onclick="startQuiz()">נסה שוב</button>
            </div>
        `;
    }

    showQuestion();
}

// הוספת מאזיני אירועים
document.addEventListener('DOMContentLoaded', () => {
    // מאזין לכפתור התחל חידון
    const startQuizButton = document.querySelector('.start-quiz');
    if (startQuizButton) {
        startQuizButton.addEventListener('click', startQuiz);
    }

    // אנימציית גלילה חלקה
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// הוספת אנימציות לאלמנטים
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.topic-card, .video-card, .quiz-card').forEach((el) => observer.observe(el)); 