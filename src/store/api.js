export default {
    fetchAllCountries: async () => {
        let url = "https://corona.lmao.ninja/v2/countries?yesterday&sort";
        let options = { 
            method: 'GET',
            redirect: 'follow'
        };
        
        let response = await fetch(url, options)
            .then((response) => response.json())
            .catch(err => console.log(err))
            
        return response;    
    },

    fetchCovidSummary: async () => {
        let url = 'https://corona.lmao.ninja/v2/all?yesterday';
        let options = {
            method: 'GET',
            redirect: 'follow'
        };

        let response = await fetch(url, options)
            .then((response) => response.json())
            .catch(err => console.log(err))

            return response;
    },

    fetchStateName: async () => {
        let url = 'https://corona.lmao.ninja/v2/states?sort&yesterday';
        let options = {
            method: 'Get',
            redirect: 'follow'
        };

        let response = await fetch(url, options)
        .then((response) => response.json())
        .catch(err => console.log(err))
    
        return response;
    },
};