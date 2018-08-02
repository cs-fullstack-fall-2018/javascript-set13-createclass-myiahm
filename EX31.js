class Movie{
    constructor(movieName, rating, year)
    {
        this.movieName = movieName;
        this.rating = rating;
        this.year = year;
    }
    printMovie()
    {
    alert(this.movieName + " is rated: " + this.rating + " stars " + " and was released in the year: " + this.year);
}
}

function main()
{
var movie1 = new Movie("Crash",5,2010);
movie1.printMovie();
var movie2 = new Movie("Scarface",5,1983);
movie2.printMovie();
}

main();