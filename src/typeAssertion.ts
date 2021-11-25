//type assertion
let load=(): any=>{
}

let hello = load()

const trimmed = (hello as string).trim()


//recommended 

if(typeof hello == "string"){
    const trimmed = hello.trim()
}