type ThisIsText = string | number;

function whatIsThat(arg: ThisIsText): string {
    let responce = '';
    if (typeof(arg) == 'string') {
        responce = 'Это строка';
    }
    else if (typeof(arg) == 'number') {
        responce = 'Это число';
    }
    else responce = "Так нельзя! Неверный тип";

    return responce;
}

interface Worker {
    id: string;
    name: string;
    position: string;
}

type Proletariat = Worker[];

function getWorkerNames(workers: Proletariat): string[] {
    let names: string[] = [];
    for (let i = 0; i < workers.length; i++) {
       names.push(workers[i].name);
        
    }
    return names;
}
