let studentScore = [
    {
        name : 'Andi',
        score : 90
    },
    {
        name : 'Rudi',
        score : 80
    },
    {
        name : 'Dira',
        score : 100
    },
];

let higestScore = {name:'', score : 0};

for(let student of studentScore) {
    if (student.score > higestScore.score) {
        higestScore = student;
    }
}

console.log(`Siswa dengan nilai tertinggi adalah ${higestScore.name} dengan nilai ${higestScore.score}`);