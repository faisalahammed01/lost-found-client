import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordVerification = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordVerification.test(password)) {
      toast.error(
        "Password must have uppercase, lowercase, and 6+ characters."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        swal("Registration successful!");
        result.user.updateProfile({
          displayName: name,
          photoURL: photoUrl,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-72 md:w-full  max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-3xl md:text-5xl font-bold">
            Register now!
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Register</button>
            </div>
            <p className="text-start mt-4 gap-x-2">
              Have an account?
              <Link className="text-red-600" to="/login">
                Log in now!
              </Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
