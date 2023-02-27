//notation two types
//1.dot notation and 2.brackets[] notation;

const student = {
    name: 'John',
    age: 20,
    class:'inter',
    marks:{
        math:78,
        physics:89,
        chemistry:90,
        biology:91
    },
}

//dot notation
//dot notation bit faster than bracket notation
const marks = student.marks;
const math = student.marks.math;
const chemistry = student.marks.chemistry;

//console.log(chemistry);

const biology = student['marks']['biology'];
const subject = 'math';
const subject2 = 'biology';
const subjectMarks = student.marks[subject];
const marks2 = student.marks[subject2];
console.log(marks2);


