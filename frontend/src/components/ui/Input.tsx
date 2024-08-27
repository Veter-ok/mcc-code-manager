interface IInputProps {
    value: string
    onChange(v: string): void
    placeholder?: string
    style?: string
}

export const Input:React.FC<IInputProps> = ({value, onChange, placeholder, style}) => {
    return (
        <input 
            className={`w-full  h-[40px] p-2 text-lg border-primary border-4 rounded-md ${style}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}