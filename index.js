// let today = new Date(-(24 * 3600 * 1000) * 4)
let today = new Date()
console.log(today);

let today2 = new Date();

console.log(today.getDate());           // Число месяца (от 1 до 31)
console.log(today.getDay());            // День недели (от 0 до 6, где 0 — воскресенье)
console.log(today.getFullYear());       // Год из 4 цифр (например, 2026)
console.log(today.getHours());          // Часы (от 0 до 23)
console.log(today.getMilliseconds());   // Миллисекунды (от 0 до 999)
console.log(today.getMinutes());        // Минуты (от 0 до 59)
console.log(today.getMonth());          // Месяц (от 0 до 11, где 0 — январь)
console.log(today.getSeconds());        // Секунды (от 0 до 59)
console.log(today.getTime());           // Количество миллисекунд с 1 января 1970 года
console.log(today.getTimezoneOffset()); // Разница между UTC и местным временем в минутах
console.log(today.getUTCDate());        // Число месяца по всемирному времени UTC (от 1 до 31)
console.log(today.getUTCDay());         // День недели по всемирному времени UTC (от 0 до 6)
console.log(today.getUTCFullYear());     // Год из 4 цифр по UTC (например, 2026)
console.log(today.getUTCHours());        // Часы по UTC (от 0 до 23)
console.log(today.getUTCMilliseconds()); // Миллисекунды по UTC (от 0 до 999)
console.log(today.getUTCMinutes());      // Минуты по UTC (от 0 до 59)
console.log(today.getUTCMonth());        // Месяц по UTC (от 0 до 11, где 0 — январь)
console.log(today.getUTCSeconds());      // Секунды по UTC (от 0 до 59)
console.log(today.setDate(15));          // Устанавливает день месяца (от 1 до 31)
console.log(today.setFullYear(2027));    // Устанавливает год (можно также передать месяц и день)
console.log(today.setHours(14));         // Устанавливает часы (можно также передать минуты, секунды и мс)
console.log(today.setMilliseconds(500)); // Устанавливает миллисекунды (от 0 до 999)
console.log(today.setMinutes(30));       // Устанавливает минуты (можно также передать секунды и мс)
console.log(today.setMonth(5));          // Устанавливает месяц (от 0 до 11, где 5 — июнь)
console.log(today.setSeconds(45));       // Устанавливает секунды (от 0 до 59)
console.log(today.setTime(1700000000000));// Устанавливает дату и время по количеству миллисекунд с 01.01.1970
console.log(today.setUTCDate(20));       // Устанавливает число месяца по UTC (от 1 до 31)
console.log(today.setUTCFullYear(2028));  // Устанавливает год по UTC (из 4 цифр)
console.log(today.setUTCHours(10));       // Устанавливает часы по UTC (от 0 до 23)
console.log(today.setUTCMilliseconds(250));// Устанавливает миллисекунды по UTC (от 0 до 999)
console.log(today.setUTCMinutes(15));    // Устанавливает минуты по UTC (от 0 до 59)
console.log(today.setUTCMonth(0));        // Устанавливает месяц по UTC (от 0 до 11, где 0 — январь)
console.log(today.setUTCSeconds(30));     // Устанавливает секунды по UTC (от 0 до 59)
console.log(today.toDateString());        // Возвращает только дату в виде читаемой строки (например, "Thu Nov 12 2026")
console.log(today.toISOString());        // Возвращает дату и время в стандартном формате ISO 8601 по UTC (например, "2026-11-12T8:49:00.000Z")
0









