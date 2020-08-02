export default {
    fetchAllCountries: async () => {
        let url = "https://corona.lmao.ninja/v2/countries?yesterday&sort";
        let options = { 
            method: 'GET',
            redirect: 'follow'
        }
        let response = await fetch(url, options)
            .then((response) => response.json())
            .catch(err => console.log(err))
            
        return response;    
    },

    fetchCovidSummary: async () => {
        let url = 'https://api.covid19api.com/summary'
        let options = {
            method: 'GET',
            redirect: 'follow'
        }

        let response = await fetch(url, options)
            .then((response) => response.json())
            .catch(err => console.log(err))

            return response;
    }
}