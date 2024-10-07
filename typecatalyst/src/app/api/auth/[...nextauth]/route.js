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
                    // Find the user by username instead of email
                    const user = await Users.findOne({ username: credentials.username }); // Change email to username
                    if (!user) {
                        return null; // User not found
                    }
    
                    const passwordMatch = await bcrypt.compare(credentials.password, user.password);
                    if (!passwordMatch) {
                        return null; // Invalid password
                    }
    
                    // Return user with all necessary fields
                    return { id: user._id.toString(), email: user.email, name: user.username };
                } catch (error) {
                    console.log("Error in authorize:", error);
                    return null; // Return null on error
                }
            }
        })
    ],
    
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Set user ID in the token
        token.name = user.name; // Set username in the token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; // Attach user ID to session
        session.user.name = token.name; // Attach username to session
      }
      console.log("Session data:", session); // Log session data for debugging
      return session;
    }
  },
  session: {
    strategy: "jwt", // Use JWT for session handling
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // Redirect to the login page
    signOut: "/", // Redirect after sign out
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
