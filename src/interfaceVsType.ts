export interface InputProps {
    type: 'text' | 'email',
    value: string,
    onChange: (newValue: string) => void,
}

//export type InputProp ={
//  type: 'text' | 'email',
//  value: string,
//  onChange: (newValue: string)=> void,
//}

//we can also have in as below, which is not supported in interface
type InputValue = string;
type InputOnChange = (newValue: InputValue) => void;
type InputType = 'text' | 'email'

export type InputProp = {
 type: InputType,
 value: InputValue,
 onChange: InputOnChange,
}