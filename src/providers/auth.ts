export interface AuthProvider {
  isAuthenticated: boolean
  username: null | string
  signin(username: string, password: string): Promise<void>
  signout(): Promise<void>
}

/**
 * This represents some generic auth provider API, like Firebase.
 */
export const authProvider: AuthProvider = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  username: localStorage.getItem('username') || null,
  async signin(username: string, password: string) {
    await new Promise((r) => setTimeout(r, 1000)) // fake delay

    // Fake authentication check
    if (username !== 'hendra' || password !== 'hendra123') {
      throw new Error('Invalid username or password!')
    }

    authProvider.isAuthenticated = true
    authProvider.username = username

    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('username', username)
  },
  async signout() {
    await new Promise((r) => setTimeout(r, 1000)) // fake delay
    authProvider.isAuthenticated = false
    authProvider.username = ''

    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('username')
  },
}
