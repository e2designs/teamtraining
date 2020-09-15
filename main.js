
class name{
    constructor(name) {
        this.name = name;
    }
    print_hi() {
        console.log(`Hi, ${this.name}`);
    }
}

class last {
    constructor(first, last) {
        this.name = new name(first);
        this.first = this.name.name
        this.last = last;
    }
    print_full() {
        console.log(`${this.first}, ${this.last}`);
    }
}

var myname = new last('Hi', 'javascript');
myname.name.print_hi();
myname.print_full();

var newname = new name("second")
newname.print_hi()
try {
   newname.print_full() /* Produces error */
} catch(error){
    console.log(`There was an Error:\n${error}`)
}

