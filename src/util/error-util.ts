import {setAppErrorAC, SetAppErrorType, setAppStatusAC, setAppStatusType} from "app/app-reducer";
import {Dispatch} from "react";

export const handleServerNetworkError = (error: any, dispatch: Dispatch<SetAppErrorType | setAppStatusType>) => {
	dispatch(setAppErrorAC(error ? error.message : 'Some error occurred'))
	dispatch(setAppStatusAC('failed'))
}