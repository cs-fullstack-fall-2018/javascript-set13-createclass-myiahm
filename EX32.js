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
    console.log(coat);
    var wig = new Product(500,1,"Blond and Black");
    console.log(wig);
}


main();