import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";
function BookList(){
    const {books}= useBooksContext();
    console.log(books);
    console.log("HERE")
    const renderedbooks = books.map((book)=>{
        return <BookShow key={book.id} book={book}/>
    });
    return(
        <div className="book-list">
            {renderedbooks}
        </div>
    );
}

export default BookList;