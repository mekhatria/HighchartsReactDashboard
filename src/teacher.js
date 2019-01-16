import { Person } from './person';

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log('teach ' + this.degree);
  }
}

const data = { name: 'money' };
export { data };
export default Teacher;
