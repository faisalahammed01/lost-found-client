import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../Context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { singInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn btn-outline mt-4">
      Signin With Google<FcGoogle className="size-8"></FcGoogle>
    </button>
  );
};

export default SocialLogin;
