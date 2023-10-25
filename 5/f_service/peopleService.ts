interface PersonServices {
    add(p:Person):void;
    getAll:() => Person[];
}


class PeopleController implements PersonServices {
    
}