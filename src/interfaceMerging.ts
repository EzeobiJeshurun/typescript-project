//declaration merging it is not supported if you use type, only if we use inferface

//Express Base

export interface Request {
    body: any;
}

//Express JSON

export interface Request {
    json: any;
}

//we now have both json and body in the interface Request

function handleRequest(req: Request){
    req.body;
    req.json;
}

