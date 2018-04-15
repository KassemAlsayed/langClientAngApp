/////////////////converted to js////////////////////
// 1 - type script conveted to JS
let myNumber: number = 0;

/////////////////data type////////////////////
// 2 - data type definition - **kass - hover over data
let data:number = 10;
alert(data);
data = "hello world";
alert(data);

////////////////classes////////////////////////////
// 3 - classes
class Customer {
    customerId: number;
    companyName: string;

    addCustomer(): number {
        return 0;
    }
}

////////////////Access modifiers//////////////////
// 4 - Access modifiers - **kass- can only access addCustomer 
// support private and public only, default is public - unlike java
class Customer1 {
    private companyName: string;

    private getNumberFromDb():number{
        return 0;
    }
    public addCustomer(): number {
        return this.getNumberFromDb(); //**jass need this - unlike java */
    }
}
let cus = new Customer1();
cus.addCustomer(); //**kass- show that you can only access add method

////////////////Static////////////////////////////
// 5 - Static and Instance Members
class Customer3 {
    companyName: string;
    private static myData:string = "hi";

    addCustomer(): number {
        return 0;
    }
    public static sayHi(){
        alert(data);
    }
}
let cus3 = new Customer3();
Customer3.sayHi(); //**kass - note that you only need the class and not the instance to call static 
cus3.sayHi();                    // you cannot call static with instance variable - unlike Java


/////////////////Overloading////////////////////
// 6 - Function Overloading - stange implementation !?!?
// - strange becasue js does not support true function overloading, 
// - in js ever function is overload in a way
// - the only place I find that js code is simpler than typeScript code
class Customer4{
    addCustomer(custId: number):number;
    addCustomer(company:string):number;
    addCustomer(value: any):number {
        if (value && typeof value == "number") {
            alert("First overload - " + value);
        }
        if (value && typeof value == "string") {
            alert("Second overload - " + value);
        }
        return 0;
    }
}
let cus4 = new Customer4();
cus4.addCustomer(0); //**kass - show the methods that can be called on cus4 */

//////////////////constructor///////////////////
// 7 - constructor
class Customer5 {
    constructor(id:number=0, name:string='nameNotProvided'){ // like java - unlike java with params initialization
        this.customerId = id;
        this.companyName = name;
    }
    /* multipe constructors is allowd but you need to add one with 'any' - gets ugly - see function oaveloading
    constructor(name:string){ // like java
        this(0, name);
    }*/

    customerId: number;
    companyName: string;

    addCustomer(): number {
        return 0;
    }
}
let cus5 = new Customer5(1,'kass'); // using the param constructor

//
class Customer6 {
    constructor(customerId: number, companyName: string){ // unlike java, you don't need to define the instance 
                                                        // varialbes 
    }

    public getCustomerId():number{
        return customerId; 
    }
}

////////////////inheritance/////////////////////
// 8 - inheritance (single like java)
class Person {
    constructor(age:number=0, name:string='nameNotProvided'){ 
        this.age = age;
        this.name = name;
    }
    private age: number;
    private name: string;
    public getAge():number{
        return this.age;
    }
}
class Customer7 extends Person {
    constructor(id:number=0, name:string='nameNotProvided'){ 
        super();
        this.customerId = id;
        this.companyName = name;
    }

    private customerId: number;
    private companyName: string;

    public addCustomer(): number {
        return 0;
    }
}
let cust7 = new Customer7(0,'cust7');
cust7.getAge();

////////////////interfaces/////////////////////
// 9 - interfaces
interface Greeting{
    sayHello():string; // cannot specify private or public
}
interface Sleeping{
    isSleeping():boolean; // cannot specify private or public
}
class Person2 implements Greeting, Sleeping { //can implement multipel interfaces - like java
    constructor(age:number=0, name:string='nameNotProvided'){ 
        this.age = age;
        this.name = name;
    }
    private age: number;
    private name: string;
    public getAge():number{
        return this.age;
    }
    public sayHello(){
        return 'hello ' + name;
    }
    public isSleeping(){
        return (this.age < 2);
    }
}

/////////////////Modules////////////////////
// 10 - Modules - A module is a container for the code that helps organize your code in a neat way
// collection of classes and interfaces... need to export to see a class or interface
module Company {
    class Person {
        public getName():string{
            return '';
        }
    }

    export class Client {
        person:Person;
    }

    export class Customer {
    }
}

var c = new Company.Client;
c.person.getName();