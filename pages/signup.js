import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createUser } from "../features/slices/usersSlice";
import Router from 'next/router'



export default function signup() {
  const dispatch = useDispatch();
  const { register, handleSubmit} = useForm();
  // const onSubmit = async (data) => {
  //     console.log(data);
  //     dispatch(createUser(data));
  // };

    const onSubmit = async (data) => {
      console.log(data);
      dispatch(createUser(data))
      .then(res => {
        console.log(res.payload)
        if (res.payload) {
          swal({
            title: "Done!",
            text: "User Registration Successful",
            icon: "success",
            timer: 2000,
            button: false
          });
          Router.push('signin');
        } else {
          swal({
            title: "Error!",
            text: "User Registration Unsuccessful",
            icon: "error",
            timer: 2000,
            button: false
          })
        }
      })
  }

  return (
    <>
      <h4 class="text-center text-lighter font-weight-normal mt-5 mb-0">Create an Account</h4>

      <form class="my-5" onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group">
              <label class="form-label">First name</label>
              <input type="text" class="form-control" {...register("first_name")}/>
              <div class="clearfix"></div>
          </div>
          <div class="form-group">
              <label class="form-label">Last name</label>
              <input type="text" class="form-control" {...register("last_name")}/>
              <div class="clearfix"></div>
          </div>
          <div class="form-group">
              <label class="form-label">Email</label>
              <input type="text" class="form-control" {...register("email")}/>
              <div class="clearfix"></div>
          </div>
          <div class="form-group">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" {...register("password")}/>
              <div class="clearfix"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block mt-4">Sign Up</button>
          <div class="text-light small mt-4">
              By clicking "Sign Up", you agree to our
              <a href="javascript:void(0)"> terms of service and privacy policy</a>. We’ll occasionally send you account related emails.
          </div>
      </form>
      <div class="text-center text-muted">
          Already have an account?
          <Link href="/signin">
            <a> Sign In</a>
          </Link>
      </div>
    </>
  )
}

signup.getLayout = function getLayout(page) {
    return (
      <AuthLayout>
        {page}
      </AuthLayout>
    )
  }