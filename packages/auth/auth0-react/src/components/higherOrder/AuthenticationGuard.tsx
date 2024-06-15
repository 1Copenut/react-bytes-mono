import { withAuthenticationRequired } from "@auth0/auth0-react";
import AuthenticationGuardProps from "../../types/AuthenticationGuardProps";

const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
  component,
  title,
}: AuthenticationGuardProps) => {
  const Component = withAuthenticationRequired(component);
  return <Component title={title} />;
};

export default AuthenticationGuard;
