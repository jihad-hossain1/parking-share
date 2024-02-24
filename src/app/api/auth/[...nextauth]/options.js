import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user.models";
import bcrypt from "bcrypt";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);

        let userRole = "GitHub User";
        if (profile?.email == "jihadkhan934@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),

    GoogleProvider({
      profile: async (profile) => {
        console.log("Profile Google: ", profile);
        const foundUser = await User.findOne({ email: profile?.email })
          .lean()
          .exec();

        if (!foundUser) {
          const savedOnDatabase = new User({
            fullname: profile?.name,
            image: profile?.picture,
            email: profile?.email,
          });
          await savedOnDatabase.save();
          console.log("user form database: ", savedOnDatabase);
        }

        // let userRole = "Google User";
        // if (profile?.email == "jihadkhan934@gmail.com") {
        //   userRole = "admin";
        // }
        console.log("user are already exist ", {
          ...profile,
          id: foundUser?._id,
          role: foundUser?.role,
          email: foundUser?.email,
          image: foundUser?.image,
        });
        return {
          ...profile,
          id: foundUser?._id,
          role: foundUser?.role,
          email: foundUser?.email,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({ email: credentials.email })
            .lean()
            .exec();
          console.log(foundUser);
          if (foundUser) {
            console.log("User Exists");
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );

            if (match) {
              console.log("Good Pass");
              delete foundUser.password;

              foundUser["role"] = "Unverified Email";
              return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },

    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
