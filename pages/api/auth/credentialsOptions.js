const credentialsConfigOptions = {
  name: 'Credentials',
  credentials: {
    username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
    password: { label: 'Password', type: 'password' }
  },
  async authorize(credentials) {
    console.log('==credentials===>>>', credentials)

    const bodyData = {
      email: credentials.email,
      password: credentials.password,
      reCaptcha: credentials.reCaptcha
    }

    const res = await fetch('https://api.staging-oa.zendy.io/auth/auth', {
      method: 'POST',
      body: JSON.stringify(bodyData),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()

    console.log('==data res ===>>>', data)

    if (res.ok && data) {
      console.log('==user===>>>', data.user)

      return {
        ...data.user,
        custom: 'dsadasdsadasdsd',
        user: 'useruseruser',
        token: 'tokentokentoken'
      }
    }
    // Return null if user data could not be retrieved
    return null
  }
}

export default credentialsConfigOptions
