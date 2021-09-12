const initialState = [
    {
        id:0,
        name:"ram",
        number:1234123455,
        email:"ram11@gmail.com"
    },
    {
        id:1,
        name:"Shiva",
        number:12121123455,
        email:"shiva11@gmail.com"
    },
    {
        id:2,
        name:"Muruganandham",
        number:9080203656,
        email:"manosankar2000@gmail.com"
    },
    {
        id:3,
        name:"mano",
        number:782343312343,
        email:"manosankar11@gmail.com"
    },
];


const contactReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state,action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact=> contact.id === action.payload.
                id? action.payload : contact
                );
                state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter(contact => contact.id !== action.payload ? contact : null);
                state = filterContacts;
            return state;
        default:
             return state;
    }
};

export default contactReducer;