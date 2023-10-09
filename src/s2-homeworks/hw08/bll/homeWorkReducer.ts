import { UserType } from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      const newState = [...state]
      if (action.payload === 'up') {
        newState.sort(function(a, b){
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        })
      } else if (action.payload === 'down') {
        newState.sort(function(a, b){
          if(a.name < b.name) { return 1; }
          if(a.name > b.name) { return -1; }
          return 0;
        })
      }
      return newState// need to fix
    }
    case 'check': {
      const newState = [...state]
      return newState.filter((user) => user.age >= 18) // need to fix
    }
    default:
      return state
  }
}
