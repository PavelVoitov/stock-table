const initialAppState: initialAppStateType = {
	status: 'idle' as StatusType,
	error: null as ErrorType,
}

export const appReducer = (state = initialAppState, action: AppActionsType) => {
	switch (action.type) {
		case "APP/SET_APP_STATUS":
			return {
				...state,
				status: action.status
			}
		case "APP/SET_APP_ERROR":
			return {
				...state,
				error: action.error
			}
		default:
			return state
	}
}

//actions
export const setAppStatusAC = (status: StatusType) => ({
	type: "APP/SET_APP_STATUS",
	status
} as const)
export const setAppErrorAC = (error: ErrorType) => ({
	type: "APP/SET_APP_ERROR",
	error
} as const )


//types
export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type ErrorType = string | null
export type initialAppStateType = {
	status: StatusType
	error: ErrorType
}
export type setAppStatusType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorType = ReturnType<typeof setAppErrorAC>
export type AppActionsType = setAppStatusType | SetAppErrorType



