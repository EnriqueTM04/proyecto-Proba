/*

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('opcionMultipleForm');
    const totalScoreElement = document.getElementById('totalScore');

    // Mapeo de IDs a valores de puntos
    const pointsMap = {
        'ans1_1': 1,
        'ans1_2': 4,
        'ans1_3': 3,
        'ans1_4': 2,
        'ans2_1': 2,
        'ans2_2': 3,
        'ans2_3': 4,
        'ans2_4': 1,
        'ans3_1': 3,
        'ans3_2': 2,
        'ans3_3': 1,
        'ans3_4': 4,
        'ans4_1': 4,
        'ans4_2': 1,
        'ans4_3': 2,
        'ans4_4': 3,
        'ans5_1': 1,
        'ans5_2': 2,
        'ans5_3': 3,
        'ans5_4': 4,
        'ans6_1': 2,
        'ans6_2': 3,
        'ans6_3': 4,
        'ans6_4': 1,
        'ans7_1': 3,
        'ans7_2': 4,
        'ans7_3': 1,
        'ans7_4': 2,
        'ans8_1': 4,
        'ans8_2': 3,
        'ans8_3': 2,
        'ans8_4': 1
    };

    function calculateScore(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        let totalScore = 0;

        for (let i = 1; i <= 8; i++) {
            const selectedOption = document.querySelector(`input[name="pregunta${i}"]:checked`);
            if (selectedOption) {
                const selectedId = selectedOption.id;
                // Obtiene el valor de puntos del mapeo
                const points = pointsMap[selectedId];
                // Suma el valor de puntos a la puntuación total
                totalScore += points;
            }
        }

        // Muestra la puntuación total
        totalScoreElement.textContent = totalScore;
    }

    // Añadir el evento de envío del formulario
    form.addEventListener('submit', calculateScore);
});
*/