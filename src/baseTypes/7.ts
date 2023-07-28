/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  mon = "weekday",
  tue = "weekday",
  wed = "weekday",
  thu = "weekday",
  fri = "weekday",
  sat = "weekend",
  sun = "weekend",
}

function isWeekend(day: WeekDays): boolean {
  if (day === 'weekday') {
    return false;
  }
  return true;
};


