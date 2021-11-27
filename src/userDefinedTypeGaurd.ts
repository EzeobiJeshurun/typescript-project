type SquareProps = {
    size: number,
}

type Rect = {
    width: number,
    height: number,
} 

type ShapeProps = SquareProps | Rect;

//below are user defined type gaurds
function isSquare(shape: ShapeProps): shape is SquareProps {
    return 'size' in shape;
}

function isRectangle(shape: ShapeProps): shape is Rect {
    return 'width' in shape;
}

function areaShape(shape: ShapeProps){
    if(isSquare(shape)){
        return shape.size * shape.size;
    }
    if(isRectangle(shape)){
        return shape.width * shape.height;
    }

    const _ensure: never= shape;
    return _ensure;
}