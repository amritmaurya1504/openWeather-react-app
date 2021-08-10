const initialState = {
    weatherData: []
}


const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_WEATHER":
            const { data } = action.payload;
            return {
                weatherData: data
            }
        default: return state;
    }
}

export default weatherReducer;