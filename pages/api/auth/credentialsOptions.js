export default {
  // The name to display on the sign in form (e.g. 'Sign in with...')
  name: 'Credentials',
  // The credentials is used to generate a suitable form on the sign in page.
  // You can specify whatever fields you are expecting to be submitted.
  // e.g. domain, username, password, 2FA token, etc.
  credentials: {
    username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials, req) {
    console.log('==credentials===>>>', credentials)

    const bodyData = {
      email: credentials.email,
      password: credentials.password,
    }

    const res = await fetch('https://api.staging-oa.zendy.io/auth/auth', {
      method: 'POST',
      body: JSON.stringify(bodyData),
      headers: { 'Content-Type': 'application/json' },
    })
    const user = await res.json()

    console.log('==user===>>>', user)

    // If no error and we have user data, return it
    if (res.ok && user) {
      return user
    }
    // Return null if user data could not be retrieved
    return null
  },
}
