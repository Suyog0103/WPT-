class Book
{
    constructor(bn,cost)
    {
        this.bookName = bn
        this.bookCost = cost
    }

   showDetails()
   {
    console.log("the book is ",this.bookName)
   }
}

 let obj = new Book("learning react",300)
console.log(obj.bookName,obj.bookCost) //directly printing
obj.showDetails()  //printing through function call  


let books = []    //array
books.push(new Book("B1",200))  //inserting objects into array
books.push(new Book("B2",400))
books.push(new Book("B3",100))

console.log("Print single object", books[0].bookName," ",books[0].bookCost) //to print name & cost of single object by its index

let total=0
for(b of books)   //to print array containing objects
{
    console.log(b.bookName," ",b.bookCost)   //to print name and cost of all objects(books)
    total= total + b.bookCost
}

 console.log(total) 

for(x in obj) //to print object
{
    console.log(x,"=",obj[x])
}  



