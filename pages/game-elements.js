// פונקציה לבדיקת תשובות במבחן הידע
function checkAnswer(answer) {
    const correctAnswers = {
        'שחמט': 'agon',
        'פוקר': 'alea',
        'משחקי תפקידים': 'mimicry',
        'רכבות הרים': 'ilinx'
    };

    const buttons = document.querySelectorAll('.quiz-options button');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent.includes(answer)) {
            button.classList.add('selected');
        }
    });

    // בדיקת התשובה
    const gameName = document.querySelector('.quiz-question ul li').textContent;
    if (correctAnswers[gameName] === answer) {
        showFeedback('נכון!', true);
    } else {
        showFeedback('לא נכון. נסה שוב!', false);
    }
}

// פונקציה להצגת משוב למשתמש
function showFeedback(message, isCorrect) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackDiv.textContent = message;
    
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.appendChild(feedbackDiv);

    // הסרת המשוב אחרי 3 שניות
    setTimeout(() => {
        feedbackDiv.remove();
        resetQuiz();
    }, 3000);
}

// פונקציה לאיפוס המבחן
function resetQuiz() {
    const buttons = document.querySelectorAll('.quiz-options button');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('selected');
    });
}

// הוספת אנימציות ומעברים חלקים
document.addEventListener('DOMContentLoaded', () => {
    const theoryBoxes = document.querySelectorAll('.theory-box');
    theoryBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            box.style.transition = 'all 0.5s ease-out';
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, 200);
    });
}); 