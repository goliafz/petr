/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
/*

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


  const lastfilm = prompt('Один из последних просмотренных фильмов?', ''),
        rating = prompt('На сколько оцените его?', ''),
        lastfilm2 = prompt('Один из последних просмотренных фильмов?', ''),
        rating2 = prompt('На сколько оцените его?', '');

  personalMovieDB.movies[lastfilm] = rating;
  personalMovieDB.movies[lastfilm2] = rating2;


console.log(numberOfFilms);

console.log(personalMovieDB);

*/

let result = '';

const lengthz = 10;

first: for (let i = 1; i < lengthz; i++) {
    console.log(`First level: ${i}`);

    for (let j = 0; j < i; j++) {
        console.log(`Second level: ${j}`);

        for (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}
