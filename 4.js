const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота","Воскресенье"];
for (let index = 0; index < 31; index++) {
  console.log(`${index + 1} января, ${week[(index+1) % 7]}`);
}
