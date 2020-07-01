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

    getAllPlanet = async () => {
      const response = await this.getData('/planets/');
      return response.results.map(this.transfromPlanet);
    }

    getAllShips = async () => {
      const response = await this.getData('/starships/');
      return response.results.map(this.transfromShips);
    }

    async getPerson(id) {
      const person = await this.getData(`/people/${id}/`);
      return this.transfromPerson(person)
    }

    async getShip(id) {
      const ship = await this.getData(`/starships/${id}/`);
      return this.transfromShips(ship);
    }

    async getPlanet(id) {
      const planet = await this.getData(`/planets/${id}/`);
      return this.transfromPlanet(planet);
    }


    getId(item){
      return item.url.match(/\/([0-9]*)\/$/)[1];
    }

    transfromShips = (ship) => {
      const id = ship.url.match(/\/([0-9]*)\/$/)[1];
      return {
        id: this.getId(ship),
        name: ship.name,
        cargo_capacity: ship.cargo_capacity,
        consumables: ship.consumables,
        model: ship.model
      }
    }

    transfromPlanet = (planet) => {
      const id = planet.url.match(/\/([0-9]*)\/$/)[1];
      return {
        id: this.getId(planet),
        name: planet.name,
        diameter: planet.diameter,
        climate: planet.climate,
        gravity: planet.gravity,
        population: planet.population
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
}

