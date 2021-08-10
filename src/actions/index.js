export const setWeatherInfo = (data) => {
    return {
        type : "SET_WEATHER",
        payload : {
            data : data
        }
    }
}