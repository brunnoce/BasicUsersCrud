import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: "INV001",
    name: "Bruno",
    email: "example@gmail.com",
    github: "github example",
  },
  {
    id: "INV002",
    name: "Carlos Méndez",
    email: "carlos.mendez@example.com",
    github: "cmendezdev",
  },
  {
    id: "INV003",
    name: "Sofía Ramírez",
    email: "sofia.ramirez@example.com",
    github: "sofia-ram",
  },
  {
    id: "INV004",
    name: "Alejandro Torres",
    email: "alejandro.torres@example.com",
    github: "atorres-code",
  },
  {
    id: "INV005",
    name: "Valeria Gómez",
    email: "valeria.gomez@example.com",
    github: "valegomez-dev",
  },
  {
    id: "INV006",
    name: "Diego Álvarez",
    email: "diego.alvarez@example.com",
    github: "diegoalv",
  },
  {
    id: "INV007",
    name: "Camila Ríos",
    email: "camila.rios@example.com",
    github: "camilarios99",
  },
];

export type UserId = string;

export interface User {
  name: string,
  email: string,
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      state.push({id, ...action.payload})
    },
    // deleteUserById: (state, action: {type: string; payload: UserId})
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id)
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserDefined = state.some(user => user.id === action.payload.id)
      if (!isUserDefined) {
        state.push(action.payload)
      }
    },
  },
})

export default usersSlice.reducer

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions