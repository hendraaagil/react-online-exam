import { describe, expect, it } from 'vitest'
import { authProvider } from '../auth'

describe('src/providers/auth', () => {
  it('should fail to login', () => {
    const username = 'hendra'
    const password = 'hendra12'
    const signIn = () => authProvider.signin(username, password)

    expect(signIn).rejects.toThrowError('Invalid username or password!')
  })

  it('should success to login', async () => {
    const username = 'hendra'
    const password = 'hendra123'
    await authProvider.signin(username, password)

    expect(authProvider.isAuthenticated).toBe(true)
    expect(authProvider.username).toBe(username)
  })

  it('should success to logout', async () => {
    await authProvider.signout()

    expect(authProvider.isAuthenticated).toBe(false)
    expect(authProvider.username).toBe('')
  })
})
