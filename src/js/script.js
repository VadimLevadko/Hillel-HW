'use strict';

(function () {
  function Student(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.attendance = new Array(10).fill(null);
    this.marks = new Array(10).fill(null);
  }

  const getIndexOfEmptyItem = (arr) => {
    if (!Array.isArray(arr)) throw new Error('Argument of function "getIndexOfEmptyItem" must be an array');

    const emptyItem = arr.indexOf(null);

    if (emptyItem < 0) throw new Error('It looks like the empty elements have run out');

    return emptyItem;
  };

  Student.prototype.present = function () {
    const arrAttendance = this.attendance;
    const index = getIndexOfEmptyItem(arrAttendance);

    arrAttendance[index] = true;
    console.log(arrAttendance);
  };

  Student.prototype.absent = function () {
    const arrAttendance = this.attendance;
    const index = getIndexOfEmptyItem(arrAttendance);

    arrAttendance[index] = false;
    console.log(arrAttendance);
  };

  Student.prototype.mark = function (score) {
    if (!Number.isInteger(score)) throw new Error('mark must be a number and integer!');
    if (score < 0 || score > 10) throw new Error('The score cannot be less than 0 or greater than 10');

    const arrMarks = this.marks;
    const index = getIndexOfEmptyItem(arrMarks);

    arrMarks[index] = score;
    console.log(arrMarks);
  };

  Student.prototype.summary = function () {
    const averageMark = this.marks.reduce((acc, mark) => {
      acc += mark;
      return acc;
    }, 0) / (this.marks.filter((el) => el !== null).length);

    const averageAttendance = this.attendance.reduce((acc, el) => {
      if (el) acc += 0.1;
      return acc;
    }, 0);

    if (averageMark > 9 && averageAttendance > 0.9) {
      return 'Ух ти, який молодчинка!';
    } if (averageMark >= 9 || averageAttendance >= 0.9) {
      return 'Нормально, але можна краще';
    }
    return 'Редька!';
  };

  const student1 = new Student('Vadim', 'Levadko', '25.05.2006');
  const student2 = new Student('Nikita', 'Byzko', '11.08.2006');
  const student3 = new Student('Mark', 'Turkulets', '25.03.2006');
}());
