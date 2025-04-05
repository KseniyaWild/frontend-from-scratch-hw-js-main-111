/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// const score = SCORE_RANDOM; // тестовое значение, можно изменять
// let grade;

// // your code

// SCORE_RANDOM = Math.floor(Math.random(0, 101) * 101);

// while(SCORE_RANDOM) {
//     if (SCORE_RANDOM <= 49) {
//         grade = 'F';
//     }
//     else if (SCORE_RANDOM >= 50 && SCORE_RANDOM <= 69) {
//         grade = 'D';
//     }
//     else if (SCORE_RANDOM >= 70 && SCORE_RANDOM <= 79) {
//         grade = 'C';
//     }
//     else if (SCORE_RANDOM >= 80 && SCORE_RANDOM <= 89) {
//         grade = 'B';
//     }
//     else {
//         grade = 'A';
//     }
// }

const score = 70; // тестовое значение, можно изменять
let grade;

// your code

 
    if (score <= 49) {
        grade = 'F';
    }
    else if (score >= 50 && score <= 69) {
        grade = 'D';
    }
    else if (score >= 70 && score <= 79) {
        grade = 'C';
    }
    else if (score >= 80 && score <= 89) {
        grade = 'B';
    }
    else {
        grade = 'A';
    }
    console.log(grade);
    


