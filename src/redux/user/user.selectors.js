import {createSelector} from 'reselect';

const selectUser = state =>  state.user;
// const selectCart = state => state.cart;

export const selectCurrentUser = createSelector(
    // Pass it as Array or two seperate argument
    selectUser,
    // selectCart,
    (user) => user.currentUser
)