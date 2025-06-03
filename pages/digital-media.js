// מידע מפורט על הדוגמאות
const examplesData = {
    duolingo: {
        title: 'Duolingo',
        description: 'אפליקציית לימוד שפות שמשתמשת במשחוק:',
        features: [
            'מערכת נקודות ורמות',
            'רצפים יומיים',
            'תחרויות עם חברים',
            'הישגים ומדליות'
        ]
    },
    nike: {
        title: 'Nike+ Run Club',
        description: 'אפליקציית ריצה עם אלמנטים משחקיים:',
        features: [
            'אתגרים שבועיים',
            'מדליות והישגים',
            'תחרויות עם חברים',
            'משוב בזמן אמת'
        ]
    },
    waze: {
        title: 'Waze',
        description: 'אפליקציית ניווט עם אלמנטים משחקיים:',
        features: [
            'דירוג משתמשים',
            'תפקידים בקהילה',
            'הישגים ותגמולים',
            'תחרויות דיווחים'
        ]
    }
};

// הצגת פרטים על דוגמה
function showDetails(exampleId) {
    const data = examplesData[exampleId];
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <ul>
                ${data.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button onclick="this.parentElement.parentElement.remove()">סגור</button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// הוספת אנימציות
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
    
    // אנימציה לכרטיסי הדוגמאות
    const exampleCards = document.querySelectorAll('.example-card');
    exampleCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, 300 + (index * 100));
    });
}); 