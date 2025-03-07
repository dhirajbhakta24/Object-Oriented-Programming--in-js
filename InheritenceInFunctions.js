function Events( ){
    bookEvents(events){
        console.log('event booked', events)
    }
}

Events.prototype.bookEvents = function(){
    console.log('Booking event');
}

function Movie(name){
  name = this.name;
 

}

//linking the prototype of event with movie using dunder proto
Movie.prototype.__proto__=Events.prototype

//linking the prototype of event with movie using OBject.create()
Movie.prototype = Object.create(Event.prototype);

a = new Movie("Avengers");
a.bookEvents()



function comedy(name){
 name = this.name;
}


function concert(name){
 name = this.name;
} 