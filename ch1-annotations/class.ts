export class Vehicle {
    speed = 0;

    constructor(private wheels: number) {}

    start() {
        this.speed = 1;
        console.log('Starting Engine !!!');
    }

    break() {
        if(this.speed !== 0) {
            this.speed--;
        }
    }

    accelarate() { 
        this.speed++;
    }

    getSpeed() {
        console.log(`Current speed is ${this.speed} km/h`);
    }

    getWheels() {
        console.log(`No. of wheels ${this.wheels}`);
    }
}

class Car extends Vehicle {
    
    constructor(private brand: string, wheels: number) {
        super(wheels);
    }
    
    // overriding
    //modifier should be same as parent class
    accelarate() {
        this.speed += 2;
    }

    getBrand() {
        console.log(`I am having a ${this.brand}`);
    }
}

var vehicle = new Vehicle(2);
var car1 = new Car('Tesla', 4);

vehicle.start();
vehicle.accelarate();
vehicle.getSpeed();
vehicle.getWheels();

car1.start();
car1.accelarate();
car1.getSpeed()
car1.getBrand();
car1.getWheels();