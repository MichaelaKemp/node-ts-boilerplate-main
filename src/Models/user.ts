// create the user interface

export interface User {
    "id": 1;
    "name": "lEanne Graham";
    "username": "Bret";
    "email": "Sincere@april.biz";
    "address": Address;
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": Company;
}

interface Address {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": 
    {
        "lat": "-37.3159",
        "lng": "81.1496"
    }
}

interface Company {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
}