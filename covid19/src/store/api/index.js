export default {
    
    fetchAllCountries: async () => {
        let url = 'https://covidtracking.com/api/counties'

        const response = await fetch(url)
        .then((response) => response.json())
        .catch(err => console.log(err))
        return response;
    },

    fetchAllStates: async () => {
        let url = 'https://covidtracking.com/api/states';

        const response = await fetch(url)
            .then((response) => response.json())
            .catch(err => console.log(err))

        return response;
    },
    
    fetchDailyResults: async () => {
        let url ='https://covidtracking.com/api/us/daily';
        
        const response = await fetch(url)
            .then((response) => response.json())
            .catch(err => console.log(err))
        
        return response;
    }
}