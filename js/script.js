"use strict";

const numberOfFilms = prompt('How many movies have you already watched?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for (let i = 0; i < 2; i++){
   const a = prompt('Last movie you have seen?', ''),
         b = prompt('How would you rate it?', '');

   if (a != null && b != null && a != '' && b !='' && a.length < 50){
      personalMovieDB.movies[a] = b;
      console.log('done');
   } else {
      console.log('error');
      i--;
   }
}

if(personalMovieDB.count < 10){
   console.log('There is not so many movies in your watched list');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30){
   console.log("You're an amateur" );
} else if ( personalMovieDB.count >= 30 ){
   console.log('Youve wathcwd a lot!');
} else {
   console.log('Occured an error');
}

console.log(personalMovieDB.movies);
