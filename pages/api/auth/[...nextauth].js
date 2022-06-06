import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import LinkedinProvider from 'next-auth/providers/linkedin'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsOptions from './credentialsOptions'

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider(CredentialsOptions),
    LinkedinProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  callbacks: {
    async session({ session }) {
      return session
    }
  }
})
