class Book{
    constructor(title,author,publication_year){
        this.title = title
        this.author = author
        this.publication_year = publication_year
    }

    bookDetails(){
        console.log(`title: ${this.title}\nAuthor: ${this.author}\nYear of Publication: ${this.publication_year}`)
    }
}

class Ebook extends Book{
    constructor(title,author,publication_year,Book_Price){
        super(title,author,publication_year)
        this.Book_Price = Book_Price
    }

    bookDetails(){
        console.log(`title: ${this.title}\nAuthor: ${this.author}\nYear of Publication: ${this.publication_year}\nPrice: ${this.Book_Price}`)
    }
}

let ebook = new Book('HTML & CSS Design and Build Websites','JON DUCKETT','2011')

let ebook2 = new Ebook('HTML & CSS Design and Build Websites','JON DUCKETT','2011','100$')