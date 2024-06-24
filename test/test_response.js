document.addEventListener('DOMContentLoaded', () => {


    const form = document.getElementById('opcionMultipleForm');
    const totalScoreElement = document.getElementById('totalScore');

    // Mapeo de IDs a valores de puntos
    const pointsMap = {
        'ans1_1': 0,
        'ans1_2': 1,
        'ans1_3': 2,
        'ans1_4': 3,
        'ans1_5': 4,
        'ans2_1': 0,
        'ans2_2': 1,
        'ans2_3': 3,
        'ans3_1': 0,
        'ans3_2': 0,
        'ans3_3': 3,
        'ans3_4': 3,
        'ans3_5': 4,
        'ans3_6': 4,
        'ans4_1': 0,
        'ans4_2': 1,
        'ans5_1': 0,
        'ans5_2': 1,
        'ans6_1': 0,
        'ans6_2': 1,
        'ans7_1': 0,
        'ans7_2': 1,
        'ans8_1': 0,
        'ans8_2': 3,
        'ans8_3': 5
    };

    function calculateScore(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        let totalScore = 0;

        const selectedOption1 = document.querySelector(`input[name="edad"]:checked`);
        const selectedId1 = selectedOption1.id;
        const points1 = pointsMap[selectedId1];
        totalScore += points1;

        const selectedOption2 = document.querySelector(`input[name="imc"]:checked`);
        const selectedId2 = selectedOption2.id;
        const points2 = pointsMap[selectedId2];
        totalScore += points2;

        const selectedOption3 = document.querySelector(`input[name="cintura"]:checked`);
        const selectedId3 = selectedOption3.id;
        const points3 = pointsMap[selectedId3];
        totalScore += points3;

        const selectedOption4 = document.querySelector(`input[name="actividad"]:checked`);
        const selectedId4 = selectedOption4.id;
        const points4 = pointsMap[selectedId4];
        totalScore += points4;

        const selectedOption5 = document.querySelector(`input[name="verduras"]:checked`);
        const selectedId5 = selectedOption5.id;
        const points5 = pointsMap[selectedId5];
        totalScore += points5;

        const selectedOption6 = document.querySelector(`input[name="hipertension"]:checked`);
        const selectedId6 = selectedOption6.id;
        const points6 = pointsMap[selectedId6];
        totalScore += points6;

        const selectedOption7 = document.querySelector(`input[name="glucosa"]:checked`);
        const selectedId7 = selectedOption7.id;
        const points7 = pointsMap[selectedId7];
        totalScore += points7;

        const selectedOption8 = document.querySelector(`input[name="diabetes"]:checked`);
        const selectedId8 = selectedOption8.id;
        const points8 = pointsMap[selectedId8];
        totalScore += points8;

        // Muestra la puntuación total
        totalScoreElement.textContent = totalScore;
    }//calculateScore()

    

    // Añadir el evento de envío del formulario
    form.addEventListener('submit', calculateScore);






});//ContentLoaded


