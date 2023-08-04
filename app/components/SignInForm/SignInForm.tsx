"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEventHandler } from "react";

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log(formData);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Email
          <input type="password" name="password" required />
        </label>
        <button type="submit">signIn</button>
      </form>
    </div>
  );
};

export default SignInForm;
