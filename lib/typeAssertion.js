//type assertion
let load = () => {
};
let hello = load();
const trimmed = hello.trim();
//recommended 
if (typeof hello == "string") {
    const trimmed = hello.trim();
}
