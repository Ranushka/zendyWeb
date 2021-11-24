import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { ProfilePage } from "components/organisms";
import { BaseTemplate } from "components/templates";

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (!loading && !session) {
    router.push("/");
  }

  return (
    <BaseTemplate>
      <ProfilePage />
    </BaseTemplate>
  );
}
