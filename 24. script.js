/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert ('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert ('Вы киноман');
  } else {
    alert ('Произошла ошибка');
  }

/*
  const lastfilm = prompt('Один из последних просмотренных фильмов?', ''),
        rating = prompt('На сколько оцените его?', ''),
        lastfilm2 = prompt('Один из последних просмотренных фильмов?', ''),
        rating2 = prompt('На сколько оцените его?', '');

  personalMovieDB.movies[lastfilm] = rating;
  personalMovieDB.movies[lastfilm2] = rating2;
*/

const questionCounter = 2;

emptyQ: for (let i = 1; i <= questionCounter; i++) {
    const lastfilm = prompt('Один из последних просмотренных фильмов?', ''),
          rating = prompt('На сколько оцените его?', '');
    if (lastfilm != null && rating != null && lastfilm != '' && rating != '' && lastfilm.length < 50)
    {
      personalMovieDB.movies[lastfilm] = rating;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }

  }


console.log(numberOfFilms);

console.log(personalMovieDB);

const str = 'hello';

console.log(str.toUpperCase());
