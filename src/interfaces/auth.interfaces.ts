export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
    phone: string;
    address: Address;
    company: Company;
    password: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}
export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
