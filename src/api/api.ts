import axios from "axios";

let a = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    params: {
      key: 'AIzaSyBq3rQ_tTT9Ajd4B0v-tKaSpryAlwQglKY'
    }
    
  })


const searchBooks = async () => {
    let getBook = await a.get(`volumes?q=&maxResults=20&key=AIzaSyBq3rQ_tTT9Ajd4B0v-tKaSpryAlwQglKY`) 
    console.log(getBook.data.items)    
}