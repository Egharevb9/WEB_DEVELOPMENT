let movies = ["now you see me", "missions impossible", "Boys before flowers"];
let ratings = [8, 9, 10];


function addMovie(moviesName, ratingsNumbers){
  movies.push(moviesName);
  ratings.push(ratingsNumbers);
}

addMovie("ncc", 15)
console.log(movies);
console.log(ratings);


function getAverageRating(averageRating){
 const total = averageRating.reduce((total, averageRating) => total + averageRating, 0)
 const average = total / averageRating.length
 return average
}

let average_rating = getAverageRating(ratings)
console.log(average_rating)

