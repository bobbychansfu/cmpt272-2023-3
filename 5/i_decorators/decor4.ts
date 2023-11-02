const allowlist = ["Jon", "Jane"];

const allowlistOnly = (target: any, memberName: string) => {  // usually target the element refered to. target[memberName] gets value
  let currentValue: any = target[memberName];                   // memberName is the variable name
  console.log(target)
  console.log(memberName)
  Object.defineProperty(target, memberName, {
    set: (newValue: any) => {
      if (!allowlist.includes(newValue)) {
        return;
      }
      currentValue = newValue;
    },
    get: () => currentValue
  });
};

class Person {
  @allowlistOnly
  name: string;
  constructor(name:string){
    this.name = name
  }
}

const person = new Person("Jon");
console.log(person.name);

person.name = "Peter";
console.log(person.name);

person.name = "Jane";
console.log(person.name);