type SquareProp = {
    kind: 'square',
    size: number,
}

type RectangleProp = {
    kind: 'rectangle'
    width: number,
    height: number,
}

type CircleProp = {
    kind: 'circle',
    radius: number
}

type ShapeProp = 
    | SquareProp
    | RectangleProp
    | CircleProp



function area(shape: ShapeProp){
    if(shape.kind === 'square'){
        return shape.size * shape.size
    }
    if(shape.kind === 'rectangle'){
        return shape.width * shape.height
    }
    if(shape.kind === 'circle'){
        return Math.PI * (shape.radius**2)
    }
}    