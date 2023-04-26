import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Layout from "@/components/Layout";
import Account from "@/components/Account";

const Signup = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <Layout>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <Account/>
        )}
      </div>
    </Layout>
  );
};

export default Signup;
