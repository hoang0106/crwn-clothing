import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
<<<<<<< HEAD
  [selectUser],
  user => user.currentUser
);
=======
    [selectUser],
    (user) => user.currentUser
);
>>>>>>> c53ddc7703036a425c4f3bc9c50228da3391927e
