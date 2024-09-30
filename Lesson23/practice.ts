interface UserProfile {
    id: number;
    username: string;
    email: string;
    fullName: string;
    address: {
        galaxy: string;
        planetSystem: string;
        planet: string;
        country: string;
        city: string;
        street: string;
    }
    phone: string;
}


type OptionalUserProfile = Partial<UserProfile>;


let currentUserProfile: UserProfile = {
    id: 22,
    username: 'robot4835',
    email: 'space-marine@mail.andromeda',
    fullName: 'Andrew Peter Christopher',
    address: {
        galaxy: 'Milky Way',
        planetSystem: 'solar system',
        planet: 'Earth',
        country: 'Russian Federation',
        city: 'Kaliningrad',
        street: 'Proterarskaya'
    },
    phone: '89521196218'
}


function askNewData(): {} {
    let fullName = prompt('Введите имя:');
    let galaxy = prompt("Из какой вы галактики?");
    let planetSystem = prompt("Из какой вы планетной системы?");
    let planet = prompt("Из какой вы планеты?");
    let country = prompt("Из какой вы страны?");
    let city = prompt("Из какого вы города?");
    let street = prompt("Ваша улица?");

    return {
        fullName: fullName,
        address: {
            galaxy: galaxy,
            planetSystem: planetSystem,
            planet: planet,
            country: country,
            city: city,
            street: street
        }
    }
}

let partialUserProfile: OptionalUserProfile =  {
    fullName: 'Шураев Сергей Валентинович',
    address: {
        galaxy: 'Milkyway',
        planetSystem: 'Sjlar System',
        planet: 'Zemlya',
        country: 'Russia',
        city: 'Kaliningrad',
        street: 'Proletarskaya street'
    }
}

function updateUserProfile(updateData: OptionalUserProfile) {
    return {
        ...currentUserProfile,
        ...updateData
    }
}