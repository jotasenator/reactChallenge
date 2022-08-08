import { types } from "../../types/types"

export const deleteReducer = (state = {}, action:any) => {

    switch (action.type) {
        case types.delete:
            return {
                ...action.payload,
            }

        default:
            return state
    }

}