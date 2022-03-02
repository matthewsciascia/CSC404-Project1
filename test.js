let cHW = require('./computeHW');
let cEG = require('./computeExam');
let cFE = require('./computeFinal');
let cFLG = require('./computeFinalLetterGrade')

//here you can test values
console.log(cHW.computeHW(100, 100, 100));//put in three hw grades here
console.log(cEG.computeExams(100, 100));//put in two exam grades here
console.log(cFE.getFinalGrade(20, 80)); 
console.log(cFLG.getFinalLetterGrade(92));
//first: Hw final hw grade (0 to 20) 
//second: Exam final grade (0 to 80)
console.log(cHW.computeHW(-10, 100, 100));//test negatives
console.log(cEG.computeExams(-5, 100));//test negatives
console.log(cFE.getFinalGrade(-4, 80));//test negatives
console.log(cFLG.getFinalLetterGrade(92));

console.log(cHW.computeHW(100, 105, 100));//test over 100%
console.log(cEG.computeExams(200, 100));//test over 100%
console.log(cFE.getFinalGrade(20, 80));//test over 100%
console.log(cFLG.getFinalLetterGrade(92));

//test boundaries
console.log(cHW.computeHW(0, 150, 100));
console.log(cEG.computeExams(0, 100));
console.log(cFE.getFinalGrade(0, 80));
console.log(cFLG.getFinalLetterGrade(92));
