import { AuthenticateLogin } from "components/organisms";
import { LoginRegisterTemplate } from "components/templates";

export default function Index() {
  return (
    <LoginRegisterTemplate>
      <AuthenticateLogin />
    </LoginRegisterTemplate>
  );
}
