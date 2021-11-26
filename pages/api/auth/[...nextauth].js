import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import prisma from './helper'

const __loginWithFacebook = Providers.Facebook({
  clientId: '350902929357351',
  clientSecret: 'a97aa244d62d84a9ea6be1b804720ffc',
})

const __loginWithLinkedIn = Providers.LinkedIn({
  clientId: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
})

const __loginWithEmail = Providers.Email({
  server: process.env.EMAIL_SERVER,
  from: process.env.EMAIL_FROM,
})

const __events = {
  error: async (message) => {
    console.error('--===->', message)
  },
}

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [__loginWithLinkedIn, __loginWithEmail, __loginWithFacebook],
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,
  events: __events,
  debug: false,
  adapter: Adapters.Prisma.Adapter({ prisma }),
}

export default (req, res) => {
  // console.log("====>", options);

  return NextAuth(req, res, options)
}
