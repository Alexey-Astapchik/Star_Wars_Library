export default class SwapiServiceAPI {

    _baseUrl = 'https://swapi.dev/api';

    async getData(url) {
        const response = await fetch(`${this._baseUrl}${url}`);
      
        if(!response.ok) {
          throw new Error (`Your result wasn't found. ${url}`); // здесь задаем параметры для метода .catch()
        }
      
        return await response.json();
      }

    async getPeople() {
        const response = await this.getData('/people/');
        return response.results.map(this.transformPerson);
    }

    async getPerson(id) {
      const person = await this.getData(`/people/${id}/`);
      return this.transfromPerson(person)
    }

    async getPlanet(id) {
      const planet = await this.getData(`/planets/${id}/`);
      return this.transfromPlanet(planet);
    }


    getId(item){
      return item.url.match(/\/([0-9]*)\/$/)[1];
    }


    transfromPlanet(planet){
      const id =planet.url.match(/\/([0-9]*)\/$/)[1];
      return {
        id: this.getId(planet),
        name: planet.name,
        diameter: planet.diameter,
        population: planet.population,
        gravity: planet.gravity
      }
    }

    transfromPerson = (person) => {
      return {
        id: this.getId(person),
        mass: person.mass,
        name: person.name,
        gender: person.gender,
        homeworld: person.homeworld
      }
    }
}

  
//   getData('https://swapi.dev/api/people/-1/')
//     .then((result) => {
//       console.log(`then ${result}` ,result)
//     })
//     .catch((err) => {
//       console.log(`catch ${err}`)
//     })