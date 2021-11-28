//This is important when the type of input of one function depends on the type
//of output of another function
export function createPerson(firstName: string, lastname: string){
    return {
        firstName,
        lastname,
        fullName: `${firstName} ${lastname}`
    }
}

type Person = ReturnType<typeof createPerson>;

function logPerson(person: Person){
    console.log(
        'Person: ',
        person.firstName,
        person.lastname,
        person.fullName
    )
}

//you can also do
//function logPerson(person: ReturnType<typeof createPerson>){
//    console.log(
//       'Person: ',
 //       person.firstName,
 //       person.lastname,
//        person.fullName
 //   )
//}