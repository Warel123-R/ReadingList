import {useState} from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate(){
    const [title, setTitle] = useState('');
    const {handleBookCreate}= useBooksContext();
    const handleChange = (event) =>{
        setTitle(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        handleBookCreate(title);
        setTitle('');
    };
    return(
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange = {handleChange}/>
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;