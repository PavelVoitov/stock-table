import {appReducer, ErrorType, initialAppStateType, setAppErrorAC, setAppStatusAC, StatusType} from "app/app-reducer";


let startState: initialAppStateType


beforeEach(() => {
  startState = {
    status: "succeeded",
    error: null
  }
})

test('status should be changed', () => {
  const status: StatusType = "loading"

  const action = setAppStatusAC(status)

  const endState = appReducer(startState, action)

  expect(endState.status).toEqual(status)
})
test('error should be changed', () => {

  const error: ErrorType = "Some error"

  const action = setAppErrorAC(error)

  const endState = appReducer(startState, action)

  expect(endState.error).toEqual(error)
})


