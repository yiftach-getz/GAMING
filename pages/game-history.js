// בדיקת תשובות בחידון ההיסטוריה
function checkHistoryAnswer(answer) {
    const correctAnswer = 'pong';
    const buttons = document.querySelectorAll('.quiz-options button');
    
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent.toLowerCase().includes(answer)) {
            button.classList.add('selected');
        }
    });

    if (answer === correctAnswer) {
        showFeedback('נכון! Pong הוא אכן משחק הארקייד הראשון', true);
    } else {
        showFeedback('לא נכון. נסה שוב!', false);
    }
}

// הצגת משוב למשתמש
function showFeedback(message, isCorrect) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackDiv.textContent = message;
    
    const quizContainer = document.getElementById('history-quiz');
    quizContainer.appendChild(feedbackDiv);

    setTimeout(() => {
        feedbackDiv.remove();
        resetQuiz();
    }, 3000);
}

// איפוס החידון
function resetQuiz() {
    const buttons = document.querySelectorAll('.quiz-options button');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('selected');
    });
}

// אנימציות לטיימליין
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // אנימציה לטיימליין
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease-out';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 200 + (index * 200));
    });

    // הוספת קו מחבר בין פריטי הטיימליין
    const timeline = document.querySelector('.timeline');
    const connector = document.createElement('div');
    connector.className = 'timeline-connector';
    timeline.appendChild(connector);
}); 