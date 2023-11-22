////////////////////////////////////
// Lesson: Call, Bind and Apply Methods in JS

//EXEMPLE OF Call A REUSE METHOD OF OBJECT

var diego = {
    name:'Diego',
    age: 31,
    job: 'Auditor',
    presentation: function(style, timeOfDay){//This is the method of that object in JS
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' +
            this.name + ', I\'m a ' +  this.job + ' and I\'m ' + this.age + ' years old.' )
        } 
        else if (style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' +  this.job + ' and I\'m ' + this.age + ' years old. have a nice '
            + timeOfDay + '.')
        }
    }
}
var thiago = {
    name: 'Thiago',
    age: 35,
    job: 'Employee'
}

var yuri = {
    name: 'Yuri',
    age: 20,
    job: 'Attorney'
}

// bellow the these 3 methods which was explained to everybody in here

diego.presentation.call(thiago, 'friendly', 'mornig')//Use a variable as argument 


diego.presentation.apply(yuri, ['friendly', 'mornig'])//Use a array as argument


var diegoPresent = diego.presentation.bind(thiago, 'formal')

diegoPresent('morning')