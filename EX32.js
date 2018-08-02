class Product {
    constructor(price, quantity, name)
    {
        this.price = price;
        this.quantity = quantity;
        this.name = name
    }
    printAllAttributes()
    {
alert(this.name + " cost "+ "$"+ this.price +  " you are requesting: " + this.quantity );
    }

}
function main()
{
var coat = new Product(100,2,"TrackJacket");
    coat.printAllAttributes();
    var wig = new Product(500,1,"Blond and Black");
    wig.printAllAttributes();
}


main();