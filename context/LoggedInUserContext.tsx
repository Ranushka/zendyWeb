import React from "react";
import { Provider } from "next-auth/client";

export const LoggedInUserProvider = ({ children, session }) => {
  return (
    <Provider
      options={{
        clientMaxAge: 0,
        keepAlive: 0,
      }}
      session={session}
    >
      {children}
    </Provider>
  );
};
