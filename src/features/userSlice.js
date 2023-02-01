import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: null,
    },
    reducers: {
        signIn: (state,action) => {
            state.value = action.payload;
        },
        signOut: (state) => {
            state.value = null;  
        },
      
    },
});

export const { signIn, signOut } = userSlice.actions;

// export const selectSendMessageIsOpen = (state) => state.user.sendMessageIsOpen;

export const selectUser = (state) => state.user.value;


export default userSlice.reducer;