import React from 'react'
import { SessionProvider } from 'next-auth/react'

export const LoggedInUserProvider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
