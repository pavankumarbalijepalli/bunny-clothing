import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    // Here we try to log our user using google.
  const logGoogleUser = async () => {
    // This will open google popup and `await` till user logs in. This `user` is json file with so much data about user. 
    const { user } = await signInWithGooglePopup();
    console.log(user);
    // This will create a user in user database based on details provided. 
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SIGN IN PAGE</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
