import { AuthenticateOtp } from 'components/organisms'
import { LoginRegisterTemplate } from 'components/templates'

export default function Index() {
  return (
    <LoginRegisterTemplate>
      <AuthenticateOtp />
    </LoginRegisterTemplate>
  )
}
