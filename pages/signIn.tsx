import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "../styles/SignIn.module.scss";

const signInSchema = zod.object({
   name: zod.string().min(1, { message: "Name is required" }),
   email: zod.string().email({ message: "Invalid e-mail address" }),
});

type SignInFormData = zod.infer<typeof signInSchema>;

const SignIn = () => {
   const router = useRouter();

   const signInForm = useForm<SignInFormData>({
      resolver: zodResolver(signInSchema),
      defaultValues: {
         name: "",
         email: "",
      },
   });
   const { handleSubmit, register } = signInForm;

   const handleSignIn = async (signInData: SignInFormData) => {
      const signInRequest = await signIn("credentials", {
         redirect: false,
         name: signInData.name,
         email: signInData.email,
      }).catch((err) => console.log(err));

      if (signInRequest && signInRequest.ok) {
         console.log(signInRequest);
         if (router.query.callbackUrl) {
            router.push(router.query.callbackUrl as string);
         } else {
            router.push("/");
         }
      } else {
         console.log("Access Denied");
      }
   };

   return (
      <div className={styles.container}>
         <div className={styles.contentContainer}>
            <form onSubmit={handleSubmit(handleSignIn)} action="">
               <FormProvider {...signInForm}>
                  <p>SignIn</p>
                  <div className={styles.inputContainer}>
                     <input
                        id="name"
                        type="text"
                        placeholder="Type your name"
                        {...register("name")}
                     />
                     <input
                        id="email"
                        type="text"
                        placeholder="Type your e-mail"
                        {...register("email")}
                     />
                  </div>
               </FormProvider>
               <button type="submit" className={styles.submitBtn}>
                  SignIn
               </button>
            </form>
         </div>
      </div>
   );
};

export default SignIn;
