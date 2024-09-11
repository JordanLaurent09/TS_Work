class EducationalInstitution {
    name: string;
    location: string;


    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
    }

    getDetails(): void {
        console.log(`${this.name} ${this.location}`);
    }
}

class School extends EducationalInstitution {
    numberOfStudents: number;
    schoolType: string;

    constructor(name: string, location: string, numberOfStudents: number, schoolType: string) {
        super(name, location);
        this.numberOfStudents = numberOfStudents;
        this.schoolType = schoolType;
    }

    getSchoolType(): void {
        console.log(`${this.schoolType}`);
    }
}

class HighSchool extends School {
    numberOfTeachers: number;
    hasSportTeams: boolean;

    constructor(name: string, location: string, numberOfStudents: number, schoolType: string, numbersOfTeachers: number, hasSportTeams: boolean) {
        super(name, location, numberOfStudents, schoolType);
        this.numberOfTeachers = numbersOfTeachers;
        this.hasSportTeams = hasSportTeams;
    }

    getTeacherStudentRatio(): void {
        let ratio: number = this.numberOfTeachers / this.numberOfStudents;
        console.log(`Соотношение учителей и студентов в школе вот такое вот: ${ratio}`);
    }
}

class University extends HighSchool {
    numberOfDepartments: number;
    hasResearchFacilities: boolean;

    constructor(name: string, location: string, numberOfStudents: number, schoolType: string, numbersOfTeachers: number, hasSportTeams: boolean, numberOfDepartments: number, hasResearchFacilities: boolean) {
        super(name, location, numberOfStudents, schoolType, numbersOfTeachers, hasSportTeams);
        this.numberOfDepartments = numberOfDepartments;
        this.hasResearchFacilities = hasResearchFacilities;
    }

    getDepartmentsDetails(): void {
        console.log(`Число отделов: ${this.numberOfDepartments}`);
    }
}