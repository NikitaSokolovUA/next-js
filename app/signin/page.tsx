import GoogleBtn from "../components/GoogleBtn/GoogleBtn";
import SignInForm from "../components/SignInForm/SignInForm";

export default async function AuthIn() {
  return (
    <div>
      <h1>sign In</h1>
      <GoogleBtn />
      <p>-----or-------</p>
      <SignInForm />
    </div>
  );
}
