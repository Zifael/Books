import reducerBooks, { getPageBooks, setFoundBooks, setValueQuery } from "./reducer-books";





describe('test action reducer', () => {
    let state 
    
    beforeEach(() => {
        state = {  
            valueQuery: '',               
            foundBooks: [],
            oneBook: null,
            startIndex: 0,
            totalItems: null
        } 
    })

    test('set value', () => {
        let action = setValueQuery('hello')         
        let newState = reducerBooks(state, action)
        expect(newState.valueQuery).toBe('hello')
    })
    test('set foun books', () => {
        let action = setFoundBooks([1, 2, 3]) 
        expect(state.foundBooks.length).toBe(0)       
        let newState = reducerBooks(state, action)
        expect(newState.foundBooks.length).toBe(3)
    })
    test('get page books', () => {
        let state = {
            foundBooks: [1,2,3]
        }
        let action = getPageBooks([1, 2, 3]) 
        expect(state.foundBooks.length).toBe(3)       
        let newState = reducerBooks(state, action)
        expect(newState.foundBooks.length).toBe(6)        
    })
})