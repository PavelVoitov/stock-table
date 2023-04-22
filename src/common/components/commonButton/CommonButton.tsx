type Props = {
	label: string
	onClick: () => void,
	disabled?: boolean
}

export const CommonButton = ({label, onClick, disabled}: Props) => {
	return (
		<button onClick={onClick} disabled={disabled}>
			{label}
		</button>
	)
}