import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import LineProvider from "next-auth/providers/line";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "970a9e2e253e7f97a850",
      clientSecret: "1198f71a2d493b317b43723698d51619cc054ad8",
    }),
    FacebookProvider({
      clientId: "1142309053329751",
      clientSecret: "2dbea079f7e6cc1296e59bac3ced0983",
    }),
    LineProvider({
      clientId: "1657508510",
      clientSecret: "783d40c9dee39dc0d007f19fac2594ac",
    }),
    GoogleProvider({
      clientId:
        "437525144802-9pusd3a5k5cf0u7dntufvp9ds1hsmo5r.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    DiscordProvider({
      clientId: "1024268113442766929",
      clientSecret: "DCUZD2vngWGKgy7kbtiS7DbhSXdpgoem",
    }),
    // ...add more providers here
  ],
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  //   error: "/auth/error", // Error code passed in query string as ?error=
  //   verifyRequest: "/auth/verify-request", // (used for check email message)
  //   newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
};
export default NextAuth(authOptions);
