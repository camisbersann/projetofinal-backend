export class TravelModel {
    constructor(name, image, flag, description, capital, population, area, cities, region, coordenadasCapital) {
        this.name = name;
        this.image = image;
        this.flag = flag;
        this.description = description;
        this.capital = capital;
        this.population = population;
        this.area = area;
        this.cities = cities;
        this.region = region;
        this.price = 0
        this.distance = 0
        this.coordenadasCapital = coordenadasCapital
    }

    getTravel() {
        return {
            name: this.name,
            image: this.image,
            flag: this.flag,
            description: this.description,
            capital: this.capital,
            population: this.population,
            area: this.area,
            cities: this.cities,
            region: this.region
        };
    }
}

