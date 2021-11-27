type HomeProps = {
    name: string,
    address: string,
}

type HomeDictionary = {
    [username: string]: HomeProps,
}

const homes: HomeDictionary = {
    jane: {name: "Judith", address: "london"},
}