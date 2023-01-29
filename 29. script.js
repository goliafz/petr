/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




/*
  const lastfilm = prompt('Один из последних просмотренных фильмов?', ''),
        rating = prompt('На сколько оцените его?', ''),
        lastfilm2 = prompt('Один из последних просмотренных фильмов?', ''),
        rating2 = prompt('На сколько оцените его?', '');

  personalMovieDB.movies[lastfilm] = rating;
  personalMovieDB.movies[lastfilm2] = rating2;
*/

const questionCounter = 2;



function rememberMyFilms() {
  for (let i = 1; i <= questionCounter; i++) {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert ('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      alert ('Вы киноман');
    } else {
      alert ('Произошла ошибка');
    }
}

detectPersonalLevel();


/* 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
 false - выводит в консоль главный объект программы
*/

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }

}

showMyDB(personalMovieDB.privat);

/*
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
*/

function writeYourGenres() {
  for(let i = 1; i <= 3; i++) {
    const favGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');
    // personalMovieDB.genres.push(favGenres);
    personalMovieDB.genres[i - 1] = favGenres;
   }
}

writeYourGenres();

console.log(numberOfFilms);


