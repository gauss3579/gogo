import OAuth2 from "react-simple-oauth2-login";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [authenticated, setAut] = useState(null);
  const onSuccess = (response) => setAut(true);
  const onFailure = (response) => console.error(response);

  return !authenticated ? (
    <OAuth2
      authorizationUrl="https://accounts.google.com/o/oauth2/v2/auth"
      responseType="code"
      clientId=""
      redirectUri=""
      scope="https://www.googleapis.com/auth/userinfo.email"
      state="1a2b3c4d"
      prompt="consent"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  ) : (
    children
  );
};

const a = <AuthProvider>I'm a children</AuthProvider>;

export default AuthProvider;
