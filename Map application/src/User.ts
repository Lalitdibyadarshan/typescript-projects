import faker from 'faker';

export class User implements MappableInterface{
    title: string;
    location: {
        lat: number,
        lng: number
    };
    iconUrl ='https://icons.iconarchive.com/icons/majdi-khawaja/kung-fu-panda/48/Po-2-icon.png';
    
    constructor() {
        this.title = faker.name.firstName();
        this.location = {
            lat: 18.5204,
            lng: 73.8567
        }
    }
}