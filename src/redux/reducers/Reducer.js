
export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            // console.log('ADD_USER reducer', action.payload)
            return [...state, action.payload]

        default:
            return state
    }
}