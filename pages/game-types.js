document.addEventListener('DOMContentLoaded', () => {
    // הגדרת משחק הסיווג
    const gameCards = document.querySelectorAll('.game-card');
    const classificationGame = document.querySelector('.classification-game');
    
    // הוספת אירועי גרירה לכל כרטיס
    gameCards.forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
    });

    // אירועי גרירה
    function handleDragStart(e) {
        e.target.classList.add('dragging');
        e.dataTransfer.setData('text/plain', e.target.innerHTML);
    }

    function handleDragEnd(e) {
        e.target.classList.remove('dragging');
    }

    // הוספת אירועי גרירה לאזור הסיווג
    classificationGame.addEventListener('dragover', e => {
        e.preventDefault();
        const draggingCard = document.querySelector('.dragging');
        if (draggingCard) {
            const afterElement = getDragAfterElement(classificationGame, e.clientX);
            if (afterElement) {
                classificationGame.insertBefore(draggingCard, afterElement);
            } else {
                classificationGame.appendChild(draggingCard);
            }
        }
    });

    // פונקציית עזר למציאת מיקום הגרירה
    function getDragAfterElement(container, x) {
        const draggableElements = [...container.querySelectorAll('.game-card:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = x - box.left - box.width / 2;
            
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    // הגדרת החידון
    const quizButton = document.querySelector('.start-quiz');
    const quizQuestions = [
        {
            question: 'איזה סוג משחק הוא Call of Duty?',
            options: ['משחק אסטרטגיה', 'משחק פעולה', 'משחק תפקידים', 'משחק ספורט'],
            correct: 1
        },
        {
            question: 'איזה משחק נחשב למשחק אסטרטגיה?',
            options: ['FIFA', 'Civilization', 'Mario Kart', 'The Witcher'],
            correct: 1
        },
        {
            question: 'איזה משחק הוא דוגמה למשחק תפקידים (RPG)?',
            options: ['Chess', 'Call of Duty', 'Final Fantasy', 'FIFA'],
            correct: 2
        }
    ];

    quizButton.addEventListener('click', () => {
        let score = 0;
        quizQuestions.forEach((q, index) => {
            const answer = prompt(`${index + 1}. ${q.question}\n\n${q.options.join('\n')}`);
            if (answer && parseInt(answer) - 1 === q.correct) {
                score++;
            }
        });
        alert(`הציון שלך: ${score}/${quizQuestions.length}`);
    });
}); 