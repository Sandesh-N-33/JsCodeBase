class Bike{
    name = "Royal Enfield";
    model;
    #regNo;

    constructor(model,regNo){
        this.model = model;
        this.#regNo = regNo;
    }

    drive(){
        console.log(`Driving ${this.name} ${this.model}: ${this.fetchRegNo}`);
    }

    get fetchRegNo(){
        return this.#regNo;
    }

    set updateRegNo(regNo){
        this.#regNo = regNo;
    }
}

let obj = new Bike("Meteor 350", "KA 11 HB 6699");
console.log(obj.model);
console.log(obj.fetchRegNo);
// obj.updateRegNo("KA 04 HB 6699"); // Wrong way as Js treats getter and setters as properties instead of methods
obj.updateRegNo = "KA 04 HB 6699";
console.log(obj.fetchRegNo);
console.log("");
console.log("///////////////// DEFAULT PARAM VALUES /////////////////");

function sayName(name = "Majnu"){
    console.log(`Hi ${name}`);
}

function sayFullName(fName = "Majnu", lName = fName.toUpperCase()){
    console.log(`Hi ${fName} ${lName}`);
}

function lastName(){
    return "Bhai";
}
sayName("Sandesh"); // Default behvaiour
sayName(); // Missing/undefined param -> Uses default value
sayFullName(); // Can handle param dependecny
sayName(null); // Takes null
sayName(undefined); // Considers default value
sayFullName(undefined,lastName());

// NOTE: WE CAN USE ARRAYS, OBJECTS, FUNCTIONS AND OTHER NORMAL PRIMITIVE TYPES AS DEFULAT VALUES