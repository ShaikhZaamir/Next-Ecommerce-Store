import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                // TEMP login (we'll connect DB later)
                if (credentials?.email && credentials?.password) {
                    return {
                        id: "1",
                        email: credentials.email,
                    };
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };