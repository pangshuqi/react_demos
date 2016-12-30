/**
 * Created by Administrator on 2016/12/23.
 */

export const ADD_NUMBER = 'ADD_NUMBER';

export function addNumber(number) {
    return {type: ADD_NUMBER, number:number}
}