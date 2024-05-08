import { createSlice } from "@reduxjs/toolkit";

 const initialState= {
    Data: [],
    amount: 0,
    total:  0,
    

 }
 const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add: (state, action)=>{
            state.amount = state.amount + 1
            const cartItem = state.Data.find((cartItem)=> cartItem.id === action.payload.id
           
        );
        
        cartItem
        ?(cartItem.amount = cartItem.amount + 1)
        : state.Data.push({...action.payload , amount : 1})
            
        },
        // increase:(state, action)=>{
        //     state.amount = state.amount + 1
        //     const itemIndex = state.Data.findIndex((cartItem)=>(cartItem.id = action.payload.id)
        // );
        // state.Data[itemIndex].amount += 1;
        // let total = 0;
        // total = state.Data.findIndex[itemIndex].amount * state.Data.Price

        // },
        //     decrease:(state, action)=>{
        //         const itemIndex = state.Data.findIndex((cartItem)=>(cartItem.id === action.payload.id)
        //     );
        //     state.Data[itemIndex].amount > 0 &&
        //     state.Data[itemIndex].amount -- &&
        //     state.amount++;
        // }
    }
});
export const {add , increase} = CartSlice.actions;
export default CartSlice.reducer
 

