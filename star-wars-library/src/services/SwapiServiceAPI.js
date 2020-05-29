class SwapiServiceAPI {

    _baseUrl = 'https://swapi.dev/api';

    async getData(url) {
        const response = await fetch(`${this._baseUrl} ${url}`);
      
        if(!response.ok) {
          throw new Error (`Your result wasn't found. ${url}`); // здесь задаем параметры для метода .catch()
        }
      
        return await response.json();
      }

    async getPeople() {
        const response = await this.getData('/people/');
        return response.results;
    }

    getPerson(id) {
        return this.getData(`/people/${id}/`)
    }

    getPlanet(id) {
      return this.getData(`/planets/${id}/`)
    }
}

export default SwapiServiceAPI;
  
//   getData('https://swapi.dev/api/people/-1/')
//     .then((result) => {
//       console.log(`then ${result}` ,result)
//     })
//     .catch((err) => {
//       console.log(`catch ${err}`)
//     })