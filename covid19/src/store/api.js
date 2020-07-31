export default {
    fetchAllCountriesData: async () => {
        let url = 'https://covidtracking.com/api/counties';

        let response = await fetch(url)
            .then((response) => response.json())
            .catch(err => console.log(err))
        return response;    
    }
}