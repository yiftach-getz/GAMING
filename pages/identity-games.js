// טיפול בטופס זהות
document.getElementById('identity-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const roleChoice = document.getElementById('role-choice').value;
    const behaviorDiff = document.getElementById('behavior-diff').value;
    
    // שמירת התשובות
    const answers = {
        role: roleChoice,
        behavior: behaviorDiff,
        timestamp: new Date().toISOString()
    };
    
    // שמירה ב-localStorage
    localStorage.setItem('identityExercise', JSON.stringify(answers));
    
    // הצגת משוב למשתמש
    showFeedback('התשובות נשמרו בהצלחה!');
});

// פונקציה להצגת משוב
function showFeedback(message) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'feedback';
    feedbackDiv.textContent = message;
    
    const form = document.getElementById('identity-form');
    form.appendChild(feedbackDiv);
    
    // הסרת המשוב אחרי 3 שניות
    setTimeout(() => {
        feedbackDiv.remove();
    }, 3000);
}

// טעינת תשובות קודמות אם קיימות
document.addEventListener('DOMContentLoaded', () => {
    const savedAnswers = localStorage.getItem('identityExercise');
    if (savedAnswers) {
        const answers = JSON.parse(savedAnswers);
        document.getElementById('role-choice').value = answers.role;
        document.getElementById('behavior-diff').value = answers.behavior;
    }
    
    // הוספת אנימציות
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