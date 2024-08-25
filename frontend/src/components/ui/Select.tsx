import {FunctionComponent as FC} from 'react'

interface ISelectProps {
	options: Array<string>,
	onChange(v:string): void,
}

export const Select:FC<ISelectProps> = ({options, onChange}) => {
	return (
		<>
			<select onChange={(e) => onChange(e.target.value)} className="bg-primary border mt-2 border-secondery text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				{options.map((option: string) => 
					<option key={option} value={option}>{option}</option>
				)}
			</select>
		</>
	)
}