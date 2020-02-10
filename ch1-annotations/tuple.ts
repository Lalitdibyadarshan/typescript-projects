const coke = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

const pepsi: (string | boolean | number) [] = ['brown', true, 40]; // does not  preserve order
pepsi[1] = 40;
pepsi[2] = true;

// tuple preserves the order
const sprite: [string, boolean, number] = ['brown', true, 40]; 

//reusable way
type Drink = [string, boolean, number];
const soda: Drink = ['brown', true, 40];


