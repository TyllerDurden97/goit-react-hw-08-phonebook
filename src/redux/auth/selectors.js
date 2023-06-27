export const selectUserLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectUserRefreshing = state => state.auth.isRefreshing;
