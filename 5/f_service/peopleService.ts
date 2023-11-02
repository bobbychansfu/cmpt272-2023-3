interface PersonServices {
    add(p:Person):void;
    getAll:() => Person[];
    delete(id: number):void
}

class PeopleController implements PersonServices {
    add() {

    }
    getAll() {
        var p:Person[] = []
        return p
    }
    delete(id:number){
        
    }
}