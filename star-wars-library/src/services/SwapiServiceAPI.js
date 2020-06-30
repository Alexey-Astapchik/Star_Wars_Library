export default class SwapiServiceAPI {

    _baseUrl = 'https://swapi.dev/api';

    async getData(url) {
        const response = await fetch(`${this._baseUrl}${url}`);
      
        if(!response.ok) {
          throw new Error (`Your result wasn't found. ${url}`); // здесь задаем параметры для метода .catch()
        }
      
        return await response.json();
      }

    getPeople = async () => {
      const response = await this.getData('/people/');
      return response.results.map(this.transfromPerson);
    }

    async getPerson(id) {
      const person = await this.getData(`/people/${id}/`);
      return this.transfromPerson(person)
    }
    getAllPlanet = async () => {
      const response = await this.getData(`/planets/`);
      return response.results.map(this.transfromPlanet);
    }

    async getPlanet(id) {
      const planet = await this.getData(`/planets/${id}/`);
      return this.transfromPlanet(planet);
    }


    getId(item){
      return item.url.match(/\/([0-9]*)\/$/)[1];
    }


    transfromPlanet = (planet) => {
      const id =planet.url.match(/\/([0-9]*)\/$/)[1];
      return {
        id: this.getId(planet),
        name: planet.name,
        diameter: planet.diameter,
        climate: planet.climate
      }
    }

    transfromPerson = (person) => {
      return {
        id: this.getId(person),
        mass: person.mass,
        name: person.name,
        gender: person.gender,
        skincolor: person.skin_color
      }
    }

    //create a function transfrom for Spaceship
}

  
//   getData('https://swapi.dev/api/people/-1/')
//     .then((result) => {
//       console.log(`then ${result}` ,result)
//     })
//     .catch((err) => {
//       console.log(`catch ${err}`)
//     })