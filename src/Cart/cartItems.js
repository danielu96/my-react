const cartItems = [
    {
        "id": 1,
        "name": "Kubek imienny",
        "colors": [
            "#0000ff"
        ],
        "category": "Kubki",
        "company": "Polski",
        "description": "z dowolnym imieniem",
        "img": "https://danielu96.github.io/my-react/Images/Kubek-kwiaty.png",
        "Image": "https://danielu96.github.io/my-react/Images/kubek_czarny.png",
        "price": 25,
        "quantity": 10,
        "amount": 0,
        "availableProducts": 5,
        "opis": "Kubki z nadrukowanym dowolnym imieniem. Nadruk wykonany jest metodą sublimacji w szkliwie kubka... ",
        "shipping": false
    },
    {
        "id": 2,
        "name": "Kubek magiczny",
        "colors": [
            "#00ff00"
        ],
        "category": "Kubki",
        "company": "UE",
        "description": "zmieniający kolor ",
        "img": "https://danielu96.github.io/my-react/Images/latte.png",
        "price": 35,
        "quantity": 15,
        "amount": 0,
        "availableProducts": 15,
        "opis": "Kubki zmieniające kolor pod wpływem ciepła. Nadruk wykonany jest metodą sublimacji w szkliwie kubka... ",
        "Image": "https://danielu96.github.io/my-react/Images/latte.png",
        "shipping": false
    },
    {
        "id": 3,
        "name": "Kubek ze zdjęciem",
        "colors": [
            "#ff0000"
        ],
        "category": "Kubki",
        "company": "UE",
        "description": "nadruk foto",
        "img": "https://danielu96.github.io/my-react/Images/latte.png",
        "price": 30,
        "quantity": 10,
        "amount": 0,
        "availableProducts": 25,
        "opis": "Kubki z nadrukowanym dowolnym zdjęciem. Nadruk wykonany jest metodą sublimacji w szkliwie kubka... ",
        "Image": "https://danielu96.github.io/my-react/Images/kubek_czarny.png",
        "shipping": false
    },
    {
        "id": 4,
        "name": "Kubek z łyżeczką",
        "colors": [
            "#0000ff"
        ],
        "category": "Kubki",
        "company": "UE",
        "description": "nadruk foto",
        "img": "https://danielu96.github.io/my-react/Images/latte.png",
        "price": 35,
        "quantity": 10,
        "amount": 0,
        "availableProducts": 35,
        "opis": "Kubki z nadrukowanym dowolnym zdjęciem. Nadruk wykonany jest metodą sublimacji w szkliwie kubka... ",
        "Image": "https://danielu96.github.io/my-react/Images/latte.png",
        "shipping": false
    },
    {
        "id": 5,
        "name": "Kubek plastikowy",
        "colors": [
            "#ff0000"
        ],
        "category": "Kubki",
        "company": "UE",
        "description": "nadruk foto",
        "img": "https://danielu96.github.io/my-react/Images/latte.png",
        "price": 20,
        "quantity": 15,
        "amount": 0,
        "availableProducts": 45,
        "opis": "Kubki z nadrukowanym dowolnym zdjęciem. Nadruk wykonany jest metodą sublimacji na powierzchni kubka... ",
        "Image": "https://danielu96.github.io/my-react/Images/kubek_czarny.png",
        "shipping": false
    },
    {
        "id": 6,
        "name": "Kubek z termiczny",
        "colors": [
            "#00ff00"
        ],
        "category": "Kubki",
        "company": "UE",
        "description": "nadruk foto",
        "img": "https://danielu96.github.io/my-react/Images/latte.png",
        "price": 45,
        "quantity": 10,
        "amount": 0,
        "availableProducts": 55,
        "opis": "Kubki z nadrukowanym dowolnym zdjęciem. Nadruk wykonany jest metodą sublimacji w szkliwie kubka... ",
        "Image": "https://danielu96.github.io/my-react/Images/kubek_czarny.png",
        "shipping": false
    },
    {
        "id": 7,
        "name": "Kubek szklany",
        "colors": [
            "#ff0000"
        ],
        "category": "Kubki",
        "company": "Polski",
        "description": "z dowolnym napisem",
        "img": "https://danielu96.github.io/my-react/Images/latte.png",
        "Image": "https://danielu96.github.io/my-react/Images/kubek_czarny.png",
        "price": 30,
        "quantity": 20,
        "amount": 0,
        "availableProducts": 65,
        "opis": "Kubki z nadrukowanym dowolnym npisem. Nadruk wykonany jest metodą sublimacji w szkliwie kubka... ",
        "shipping": false
    },
    {
        "id": 8,
        "name": "Kubek metalowy",
        "colors": [
            "#fg0000"
        ],
        "category": "Kubki",
        "company": "Polski",
        "description": "nadruk na kubku metalowym",
        "img": "https://danielu96.github.io/my-react/Images/latte.png",
        "price": 35,
        "quantity": 10,
        "amount": 0,
        "availableProducts": 75,
        "opis": "Kubki metalowe z nadrukiem. Nadruk wykonany jest metodą sublimacji na powierzchni kubka... ",
        "Image": "https://danielu96.github.io/my-react/Images/kubek_czarny.png",
        "shipping": false
    },
    {
        "id": 9,
        "name": "Filiżanka",
        "colors": [
            "#fg0000"
        ],
        "category": "Filiżanki",
        "company": "Polski",
        "description": "nadruk foto",
        "img": "https://danielu96.github.io/my-react/Images/latte.png",
        "price": 35,
        "quantity": 10,
        "amount": 0,
        "availableProducts": 15,
        "opis": "Filiżanka z kolrowym nadrukiem. Nadruk wykonany jest metodą sublimacji na powierzchni filiżanki ",
        "Image": "https://danielu96.github.io/my-react/Images/kubek_czarny.png",
        "shipping": false
    },
    {
        "id": 10,
        "name": "Foto Kryształ",
        "colors": [
            "#fg0000"
        ],
        "category": "Kryształ",
        "company": "UE",
        "description": "nadruk foto",
        "img": "https://danielu96.github.io/my-react/Images/latte.png",
        "price": 55,
        "quantity": 10,
        "amount": 0,
        "availableProducts": 95,
        "opis": "Kryształ z nadrukowanym dowolnym zdjęciem. Nadruk kolorowy wykonany jest metodą sublimacji w szkle  ... ",
        "Image": "https://danielu96.github.io/my-react/Images/kubek_czarny.png",
        "shipping": false
    },
    {
        "id": 11,
        "name": "Kufel szklany",
        "colors": [
            "#fg0000"
        ],
        "category": "Kufle",
        "company": "UE",
        "description": "nadruk czarny",
        "img": "https://danielu96.github.io/my-react/Images/latte.png",
        "price": 50,
        "quantity": 10,
        "amount": 0,
        "availableProducts": 105,
        "opis": "Kubfle z nadrukowaną dowolną grafiką . Nadruk wykonany jest metodą sublimacji na powierzchni kufla... ",
        "Image": "https://danielu96.github.io/my-react/Images/kubek_czarny.png",
        "shipping": false
    },
    {
        "id": 12,
        "name": "Wizytówki metal",
        "colors": [
            "#fg0000"
        ],
        "category": "Wizytówki",
        "company": "Polski",
        "description": "nadruk kolorowy",
        "img": "https://danielu96.github.io/my-react/Images/latte.png",
        "price": 5,
        "quantity": 100,
        "amount": 0,
        "availableProducts": 115,
        "opis": "Metalowe wizytówki z dowolnym nadrukiem. Nadruk wykonany jest metodą sublimacji w strukturze materiału... ",
        "Image": "https://danielu96.github.io/my-react/Images/Kubek-magiczny.png",
        "shipping": true
    }
]
export default cartItems;