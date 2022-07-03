import axios from "axios";

let API = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    params: {
      maxResults: 30,
      key: 'AIzaSyBq3rQ_tTT9Ajd4B0v-tKaSpryAlwQglKY'
    }
    
  })


export const getBooks = async (query?: string, orderBy?: string, categories?: string, startIndex?: number, authors?: string ) => {
	let getBooks = await API.get(`volumes?q=${query}`, {
		params: {				
				orderBy,
				categories,
				startIndex: 0,
				authors,
							      
		}
	}) 		
  	return getBooks.data.items
}


export const getOneBook = async (id: string) => {
	let getOneBook = await API.get(`volumes/${id}`) 	
  	return getOneBook.data
}
