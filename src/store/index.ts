import { configureStore, Middleware, PayloadAction } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser, UserId, UserWithId } from "./users/slice";
import { toast } from "sonner";

const persistanceMiddlewareLocalStorage: Middleware = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
}

const syncDatabase: Middleware = (store) => (next) => (action) => {
  const {type, payload} = action as PayloadAction<UserId>
  const previousSate = store.getState();
  
  console.log({store, state: store.getState() })
  next(action);
  
  if(type === 'users/deleteUserById') {
    const userIdToRemove = payload;
    const userToRemove = previousSate.users.find((user: UserWithId) => user.id === userIdToRemove)


    fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        toast.success('Usuario borrado correctamente')
        return;
      }
      throw new Error('Error al eliminar usuario')
    })
    .catch(error => {
      toast.error('Error borrando el usuario')
      console.log('Estas intentando borrar este User:', userToRemove)
      if (userToRemove) store.dispatch(rollbackUser(userToRemove))
      console.log(error)
    })
  }
} 

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistanceMiddlewareLocalStorage, syncDatabase)
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch