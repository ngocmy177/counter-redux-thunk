import {INCREASE, DECREASE, ADD_NUMBER} from './type';

export const counterIncrease = () => ({type:INCREASE});
export const counterDecrease = () => ({type:DECREASE});
export const addNumberToCounter = (number) => (
    {
        type: ADD_NUMBER,
        payload: number
    }
)
export function addNumber1(number) {
    return (dispatch, getState) => {
        console.log(JSON.stringify(getState()))
        dispatch(addNumberToCounter(number));
    }
}