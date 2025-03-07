//Call

const obj = {
    firstName: 'Sanket',
    greet :function(){
        console.log('Hello , my name is', this.firstName);
    }
}

newObj = {firstName:'Dhiraj' };
obj.greet.call(newObj);

//apply
const obj2 = {
    firstName: 'Sanket',
    greet :function(prompt){
        console.log('Hello , my name is', this.firstName,this.prompt,this.prompt);
    }
}
obj2.greet.apply(newObj,['hello','hi','bye']);
//bind
//bind doesnt run the function instantly , it gives the function to a new function with the this to the desired pointer 


const obj3 = {
    firstName: 'Sanket',
    greet :function(prompt){
        console.log('Hello , my name is', this.firstName);
    }

}
f = obj3.greet.bind(newObj);
f();