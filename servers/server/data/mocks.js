'use strict';

/**
 * All movies
 */
var allMovies = new Promise(function(resolve) {

  resolve([
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7,
    },
    {
      id: 1,
      title: 'Sample Movie',
      theatresCount: 7
    }
  ]);

});

/**
 * One movie
 */
var oneMovie = new Promise(function (resolve) {

  resolve({
    id: 1,
    title: 'Sample Movie'
  });

});

/**
 * All theatres
 */
var allTheatres = new Promise(function(resolve) {

  resolve([
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    },
    {
      id: 1,
      name: 'Sample Theatre'
    }
  ]);

});

/**
 * All movie theatres
 */
var allMovieTheatres = new Promise(function(resolve) {

  resolve([
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    },
    {
      id: 1,
      name: 'Sample Theatre',
      showtimesCount: 4
    }
  ]);

});

var allShowtimes = new Promise(function(resolve) {

  resolve([
    {
      time: '3:00 PM'
    },
    {
      time: '3:00 PM'
    },
    {
      time: '3:00 PM'
    },
    {
      time: '3:00 PM'
    }
  ]);

});

/**
 * All theatre movies
 */
var allTheatreMovies = new Promise(function(resolve) {

  resolve([
    {
      id: 1,
      title: 'Sample Movie'
    },
    {
      id: 1,
      title: 'Sample Movie'
    },
    {
      id: 1,
      title: 'Sample Movie'
    },
    {
      id: 1,
      title: 'Sample Movie'
    },
    {
      id: 1,
      title: 'Sample Movie'
    },
    {
      id: 1,
      title: 'Sample Movie'
    },
    {
      id: 1,
      title: 'Sample Movie'
    }
  ]);

});

var oneTheatre = new Promise(function (resolve) {
  resolve({
    id: 1,
    name: 'Sample Theatre'
  });
});

var allTheatresMoviesShowtimes = new Promise(function (resolve) {
  resolve([
    {
      time: '3:00 PM'
    },
    {
      time: '3:00 PM'
    },
    {
      time: '3:00 PM'
    },
    {
      time: '3:00 PM'
    }
  ]);
});



module.exports = {
  movies: {
    all: allMovies,
    one: oneMovie,
    allTheatres: allMovieTheatres
  },

  theatres: {
    all: allTheatres,
    one: oneTheatre,
    allMovies: allTheatreMovies,
    allMoviesShowtimes: allTheatresMoviesShowtimes
  },

  showtimes: {
    all: allShowtimes
  }
};
