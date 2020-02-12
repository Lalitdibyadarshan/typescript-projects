import faker from 'faker';
export class Company implements MappableInterface {
    title: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number
    };
    iconUrl = 'http://icons.iconarchive.com/icons/yootheme/social-bookmark/48/social-google-box-icon.png';
    

    constructor() {
        this.title = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    
}