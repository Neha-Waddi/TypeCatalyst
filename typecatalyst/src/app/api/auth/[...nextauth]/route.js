import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import Users from "../../../../models/user"; 
import { connectMongodb } from "../../../../lib/mongodb";
import bcrypt from "bcryptjs";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
    
            async authorize(credentials) {
                try {
                    await connectMongodb();
                    const user = await Users.findOne({ username: credentials.username });
                    if (!user) {
                        return null;
                    }
    
                    const passwordMatch = await bcrypt.compare(credentials.password, user.password);
                    if (!passwordMatch) {
                        return null;
                    }
    
                    return { id: user._id.toString(), email: user.email, name: user.username };
                } catch (error) {
                    console.log("Error in authorize:", error);
                    return null;
                }
            }
        })
    ],
    
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; 
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; 
        session.user.name = token.name; 
      }
      console.log("Session data:", session);
      return session;
    }
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/",
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
