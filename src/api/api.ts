import axios from "axios";

let API = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    params: {
      maxResults: 30,
      key: 'AIzaSyBq3rQ_tTT9Ajd4B0v-tKaSpryAlwQglKY'
    }
    
})



export const getBooks = async <T>(query:T, orderBy?:T, categories?:T, startIndex?: number, authors?:T ) => {
	const {data} = await API.get(`volumes?q=${query}`, {
		params: {				
				orderBy,
				categories,
				startIndex,
				authors,
							      
		}
	}) 		
  	return data
}


export const getOneBook = async (id: string) => {
	const {data} = await API.get(`volumes/${id}`) 	
  	return data
}
