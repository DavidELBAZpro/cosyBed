// store.js
import { reactive } from 'vue'

export const useStore = () => {
  const state = reactive({
    user: {
      loggedIn: false,
      name: null as string | null,
    },
  })

  const logIn = (userName: string | null) => {
    state.user.loggedIn = true
    state.user.name = userName
  }

  const logOut = () => {
    state.user.loggedIn = false
    state.user.name = null
  }

  return { state, logIn, logOut }
}
