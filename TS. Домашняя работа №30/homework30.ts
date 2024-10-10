function LogExecution(target: any, key: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = function(...args: any[]) {
        
        let timeStart = new Date().getMilliseconds();

        console.log(`Метод с именем ${key} начал работать`);

        method.apply(this, args);

        let timeEnd = new Date().getMilliseconds();

        let fullTime = timeEnd - timeStart;

        console.log(`Метод с именем ${key} завершил работу за ${fullTime} мс`);

        return method;
    }

    return descriptor;
}


class TaskManager {
    @LogExecution
    processTask(taskName: string, func: Function) {
        console.log(`Выполнение задачи ${taskName}`);

        func();
    }
}

const tasks: TaskManager = new TaskManager();

tasks.processTask("Вычисление суммы", () => {
    let sum: number = 0;
    for (let i = 0; i < 999999999; i++) {
        sum += i;
    }
    return sum;
});



tasks.processTask("Задача 2", () => {
    let arr: number[] = [34,43,232,11,55,33,3443,65,87,33,1,34,65,776,334];
    arr.sort();
    arr.reverse();
    let newArr: any[] = [
    arr,
    arr.reduce(function(acc, current) {
    return Math.min(acc, current)
    }),
    arr.reduce(function(acc, current) {
    return Math.max(acc, current)
    })
    ]
    return newArr;
});
