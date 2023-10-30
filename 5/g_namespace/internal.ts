namespace PersonMod {
    export interface P {
        id: number
        name: string
    }
}

interface P {
    address: string
}

var p1: PersonMod.P = {
    id: 0,
    name: 'p'
}