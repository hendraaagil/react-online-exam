interface AuthProvider {
  isAuthenticated: boolean
  username: null | string
  password: null | string
  signin(username: string, password: string): Promise<void>
  signout(): Promise<void>
}

/**
 * This represents some generic auth provider API, like Firebase.
 */
export const fakeAuthProvider: AuthProvider = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  username: localStorage.getItem('username') || null,
  password: null,
  async signin(username: string, password: string) {
    await new Promise((r) => setTimeout(r, 1000)) // fake delay
    fakeAuthProvider.isAuthenticated = true
    fakeAuthProvider.username = username
    fakeAuthProvider.password = password

    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('username', username)
  },
  async signout() {
    await new Promise((r) => setTimeout(r, 1000)) // fake delay
    fakeAuthProvider.isAuthenticated = false
    fakeAuthProvider.username = ''
    fakeAuthProvider.password = ''

    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('username')
  },
}
