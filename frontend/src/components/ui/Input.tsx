interface IInputProps {
    value: string
    onChange(v: string): void
    placeholder?: string
    type?: string
    style?: string
}

export const Input:React.FC<IInputProps> = ({value, onChange, placeholder, type, style}) => {
    return (
        <input 
            type={type}
            className={`w-full  h-[40px] p-2 text-lg border-primary border-4 rounded-md ${style}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

interface IMCCcodeInputrops {
    value: string
    onChange(v: string): void
    placeholder?: string
    style?: string
}

export const MCCcodeInput:React.FC<IMCCcodeInputrops> = ({value, onChange, placeholder, style}) => {

    const change = (newValue: string) => {
        const lastSymbol = newValue[newValue.length - 1]
        console.log(lastSymbol)
        if ((!isNaN(Number(lastSymbol)) && newValue.length <= 4) || lastSymbol === undefined){
            onChange(newValue)
        }
    }

    return (
        <input 
            className={`w-full  h-[40px] p-2 text-lg border-primary border-4 rounded-md ${style}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => change(e.target.value)}
        />
    )
}