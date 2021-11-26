type Point2DProp = {
    x: number,
    y: number,
}

//type Point3DProp = {
//    x: number,
//    y: number,
//    z: number,
//}

type Point3DProp = Point2DProp & {
    z: number
}


//

type Email = {
    email: string,
}

type Phone = {
    phone: string,
}

type Name = {
    name: string,
}

function contact(details: Email & Phone & Name){
    console.log(`Dear ${details.name}. from ${details.email}, you can call ${details.phone}`)
}

contact(
   {name: 'james', phone: "0803", email: "rt@gmail.com"}
)

type contactDetails = Email & Phone & Name;