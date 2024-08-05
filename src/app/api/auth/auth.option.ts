import { sendRequest } from "@/http/http";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

// async function refreshAccessToken(token: JWT) {
//   const res = await sendRequest<IBackendRes<JWT>>({
//     url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/refresh`,
//     method: "POST",
//     body: { refresh_token: token?.refresh_token },
//   });

//   if (res.data) {
//     return {
//       ...token,
//       access_token: res.data?.access_token ?? "",
//       refresh_token: res.data?.refresh_token ?? "",
//       access_expire: dayjs(new Date())
//         .add(
//           +(process.env.TOKEN_EXPIRE_NUMBER as string),
//           process.env.TOKEN_EXPIRE_UNIT as any
//         )
//         .unix(),
//       error: "",
//     };
//   } else {
//     //failed to refresh token => do nothing
//     return {
//       ...token,
//       error: "RefreshAccessTokenError", // This is used in the front-end, and if present, we can force a re-login, or similar
//     };
//   }
// }

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Sign in width Admin",
      credentials: {
        username: { label: "Tên đăng nhập", type: "text" },
        password: { label: "Mật khẩu", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const res = await sendRequest<TResponse<JWT>>({
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/admin/auth/login`,
          method: "POST",
          body: {
            username: credentials?.username,
            password: credentials?.password,
          },
        });

        if (res && res.data) {
          return res.data as any;
        } else {
          throw new Error(res?.message as string);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, account, user, session }) {
      if (trigger === "signIn" && account?.type === "credentials") {
        //@ts-ignore
        const decodedJWT = jwtDecode(user.accessToken);
        token = {
          ...token,
          //@ts-ignore
          accessToken: user.accessToken,
          //@ts-ignore
          refreshToken: user.refreshToken,
          //@ts-ignore
          user: user.user,
          accessExpireToken: decodedJWT.exp,
        };
      }
      return token;
    },

    async session({ session, token, user }) {
      // console.log("Session callback", { session, token, user });
      if (token) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.user = token.user;
        session.accessExpireToken = token.accessExpireToken;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
    signOut: "/auth/logout",
  },
};
