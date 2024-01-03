interface AppButtonProps {
	label: string;
	// TODO fix any?
	onClick?: (e: any) => void;
}

export default function AppButton({label, onClick}: AppButtonProps) {
	return(
		<button onClick={onClick}>{label}</button>
	)
}