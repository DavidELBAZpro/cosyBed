// store.js
import { reactive } from 'vue'

const initialState = {
  user: {
    loggedIn: false,
    name: null as string | null,
  },
}

// Charge l'état initial du localStorage s'il existe
const storedState = JSON.parse(localStorage.getItem('store') || '{}')
const state = reactive({ ...initialState, ...storedState })

const saveState = () => {
  localStorage.setItem('store', JSON.stringify(state))
}

const logIn = (userName: string | null) => {
  state.user.loggedIn = true
  state.user.name = userName
  saveState()
}

const logOut = () => {
  state.user.loggedIn = false
  state.user.name = null
  saveState()
}

export const useStore = () => {
  return { state, logIn, logOut }
}
