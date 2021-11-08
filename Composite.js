class Employee {
    constructor (name, role) {
        this.name = name;
        this.role = role;
    }

    work () {
        console.log(this.name + ' starting to work on this position: ' + this.role)
    }
}

class PM extends Employee {

}

class Developer extends Employee {

}

class QA extends Employee {

}


class EmployeeGroup {
    constructor (title, composites = []) {
        this.title = title;
        this.composites = composites;
    }

    startWorking () {
        this.composites.forEach(employee => {
            employee.work();
        })
    }
}

const company = new EmployeeGroup('LLC', [
    new Developer('ASahak', 'front-end-engineer'),
    new QA('John', 'quality-assurance'),
    new PM('Alie', 'project-manager'),
]);

company.startWorking();