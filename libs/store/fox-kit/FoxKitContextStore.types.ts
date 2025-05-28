export type TTFoxKitStore = {
	refModalContainer: HTMLDivElement | null
	refDropDownContainer: HTMLDivElement | null

	setRefModalContainer: (el: HTMLDivElement | null) => void
	setRefDropDownContainer: (el: HTMLDivElement | null) => void
}