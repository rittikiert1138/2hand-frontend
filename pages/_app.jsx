import { SessionProvider } from "next-auth/react";
import "../public/css/tailwind.css";
import "../public/css/config.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
