import {
  quantityLessons, summaryTopResultContent, summaryMiddleResultContent, summaryBadResultContent, nowDate,
} from './options.js';

export default function Student(firstName, lastName, birthday) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = birthday;
  this.userAge = nowDate.getFullYear() - new Date(birthday.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1')).getFullYear();
  this.currentLesson = 0;
  this.attendance = new Array(quantityLessons);
  this.marks = new Array(quantityLessons);
}

Student.prototype.setAttendance = function (isUserPresent) {
  if (typeof isUserPresent !== 'boolean') throw new Error('setAttendance argument must be a boolean (true or false).');
  if (this.currentLesson === 10) throw new Error('Lessons are over');

  const arrAttendance = this.attendance;
  const index = this.currentLesson;

  arrAttendance[index] = isUserPresent;
  this.currentLesson++;
};

Student.prototype.present = function () {
  this.setAttendance(true);
};
Student.prototype.absent = function () {
  this.setAttendance(false);
};

Student.prototype.mark = function (score) {
  if (!Number.isInteger(score)) throw new Error('mark must be a number and integer!');
  if (score < 0 || score > 10) throw new Error('The score cannot be less than 0 or greater than 10');

  const index = this.currentLesson - 1;
  if (!this.attendance[index]) throw new Error('You can\'t grade a student if they weren\'t in class');

  const arrMarks = this.marks;
  arrMarks[index] = score;
};

Student.prototype.getAverageMark = function () {
  const result = this.marks.reduce((acc, mark) => {
    if (typeof mark !== 'number') return acc;

    acc.sumMarks += mark;
    acc.stepMarks++;
    return acc;
  }, {
    sumMarks: 0,
    stepMarks: 0,
  });

  return Number((result.sumMarks / result.stepMarks).toFixed(0));
};
Student.prototype.getAverageAttendance = function () {
  const result = this.attendance.reduce((acc, value) => {
    if (!value) return acc;

    acc++;
    return acc;
  }, 0);

  return result / this.attendance.length;
};

Student.prototype.summary = function () {
  const averageMark = this.getAverageMark();
  const averageAttendance = this.getAverageAttendance();

  const statistic = {
    averageMark,
    averageAttendance,
    resultText: '',
  };

  if (averageMark > 9 && averageAttendance > 0.9) {
    statistic.resultText = summaryTopResultContent;
    return statistic;
  } if (averageMark >= 9 || averageAttendance >= 0.9) {
    statistic.resultText = summaryMiddleResultContent;
    return statistic;
  }
  statistic.resultText = summaryBadResultContent;
  return statistic;
};
