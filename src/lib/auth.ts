import { NextAuthOptions } from "next-auth";
import { db } from "./db";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import GoogleProvider from "next-auth/providers/google";


function getGoogleCredentials() {
    const googleClientId = process.env.GOOGLE_CLIENTID!;
    const googleClientSecret = process.env.GOOGLE_SECRETID!;

    if (googleClientId || googleClientId.length === 0) {
        throw new Error("Missing Google CLIENT ID");
    }
    if (googleClientSecret || googleClientSecret.length === 0) {
        throw new Error("Missing Google CLIENT SECRET");
    }

    return { googleClientId, googleClientSecret }
}


const googleSecrets = [getGoogleCredentials().googleClientId!, getGoogleCredentials().googleClientSecret!];


export const authOptions: NextAuthOptions = {
    adapter: UpstashRedisAdapter(db),
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login",
    },


    providers: [
        GoogleProvider({
            clientId: googleSecrets[0],
            clientSecret: googleSecrets[1]
        }),
    ],
    callbacks: {

        async jwt({ token, user }) {
            const dbUser = (await db.get(`user:$${token.id}`)) as User | null;
            if (!dbUser) {
                token.id = user!.id;
                return token;
            }

            return {
                id: dbUser.id, 
                name: dbUser.name, 
                email: dbUser.email, 
                picture: dbUser.image
            }

        }
    }
}