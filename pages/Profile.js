import React from 'react';
import Layout from '../layouts/Layout'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useForm } from "react-hook-form"
import { updateUser } from "../features/slices/usersSlice";
export default function Profile({user}) {


    const dispatch = useDispatch();
    // const users = useSelector((state) => state.users);
    const { register, handleSubmit,reset} = useForm();
    const onUpdate = async data => {
        const maneno = null;
        if(typeof data.image === 'object'){
            const formData = new FormData();
            formData.set("file", data.image[0]);
            formData.set("upload_preset", "portfolio");
            const info = await fetch('https://api.cloudinary.com/v1_1/seffukioi/image/upload', {
                method: "POST",
                body: formData
            });
            const r = await info.json()
            data.image = r.url;
            maneno = data
        }else{maneno = data}
        dispatch(updateUser(maneno))
        .then(res => {
            if (res.payload) {
              swal({
                title: "Done!",
                text: "Update Successful",
                icon: "success",
                timer: 2000,
                button: false
              });
            } else {
              swal({
                title: "Error!",
                text: "Update Unsuccessful",
                icon: "error",
                timer: 2000,
                button: false
              })
            }
          })
          .then(
            $('.modal').each(function(){
                $(this).modal('hide');
            })
          )
    };
    // useEffect(() => {
    //     dispatch(retrieveUsers())
    //   },[dispatch]);
  return (
    <>
        <div className="container-fluid flex-grow-1 container-p-y">
            <h4 className="font-weight-bold py-3 mb-0">User Profile</h4>
            <div className="text-muted small mt-0 mb-4 d-block breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
                    <li className="breadcrumb-item active">User's Profile</li>
                </ol>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-auto col-sm-12">
                            <img src={user.image} alt className="d-block ui-w-100 rounded-circle mb-3"/>
                        </div>

                        <div className="col">
                        <div className="text-right">
                            <button className="btn btn-success btn-sm mb-3 btn-round" onClick={() => reset(user)} data-toggle="modal" data-target="#modal-edit"><i className="feather icon-plus"></i> Edit Profile</button>
                        </div>
                            <h4 className="font-weight-bold mb-4">{user.first_name} {user.last_name}</h4>
                            <div className="text-muted mb-4">{user.description}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card mb-4">
                        <div className="card-body">

                            <div className="row mb-2">
                                <div className="col-md-3 text-muted">Birthday: </div>
                                <div className="col-md-9">
                                   {user.dob}
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-md-3 text-muted">Country:</div>
                                <div className="col-md-9">
                                    <a href="javascript:void(0)" className="text-dark">Kenya</a>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-md-3 text-muted">Languages:</div>
                                <div className="col-md-9">
                                    <a href="javascript:void(0)" className="text-dark">English, Swahili</a>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-md-3 text-muted">Gender:</div>
                                <div className="col-md-9">
                                    <a href="javascript:void(0)" className="text-dark">{user.gender}</a>
                                </div>
                            </div>
                            <h6 className="my-3">Contacts</h6>

                            <div className="row mb-2">
                                <div className="col-md-3 text-muted">Phone:</div>
                                <div className="col-md-9">
                                    {user.phone}
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-3 text-muted">Alternative Phone:</div>
                                <div className="col-md-9">
                                    {user.phone2}
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-3 text-muted">Address:</div>
                                <div className="col-md-9">
                                    {user.address} - {user.ext}
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="col-xl-4">

                    <div className="card mb-4">
                        <hr className="border-light m-0"/>
                        <div className="card-body">
                            <p className="mb-2">
                                <i className="ion ion-md-desktop ui-w-30 text-center text-lighter"></i> Data Engineer</p>
                            <p className="mb-2">
                                <i className="ion ion-ios-navigate ui-w-30 text-center text-lighter"></i> Nairobi, Kenya</p>
                            <p className="mb-0">
                                <i className="ion ion-md-globe ui-w-30 text-center text-lighter"></i>
                                <a href="http://www.seffukioi.com" className="text-dark">seffukioi.com</a>
                            </p>
                        </div>
                        <hr className="border-light m-0"/>
                        <div className="card-body">
                            <a href={user.linkedin} className="d-block text-dark mb-2">
                                <i className="ion ion-logo-linkedin ui-w-30 text-center text-linkedin"></i> seffukioi
                            </a>
                            <a href={user.twitter} className="d-block text-dark mb-2">
                                <i className="ion ion-logo-twitter ui-w-30 text-center text-twitter"></i> @kioisn
                            </a>
                            <a href={user.github} className="d-block text-dark mb-2">
                                <i className="ion ion-logo-github ui-w-30 text-center text-github"></i> seffu
                            </a>
                            <a href={user.skype} className="d-block text-dark mb-0">
                                <i className="ion ion-logo-skype ui-w-30 text-center text-skype"></i> seffu
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    
        <div className="modal fade" id="modal-edit" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Profile</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(onUpdate)}>
                        <input {...register("project_id")} className="form-control" type="hidden"/>
                            <div className="row">
                            <div class="col-12">
                                <h5>General Information</h5>
                            </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="floating-label" htmlFor="Title">First Name</label>
                                        <input {...register("first_name")} className="form-control" id="title"/>
                                        {/* <input type="text" className="form-control" id="title" placeholder=""/> */}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="floating-label" htmlFor="Title">Last Name</label>
                                        <input {...register("last_name")} className="form-control" id="title"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="floating-label" htmlFor="Title">Email</label>
                                        <input {...register("email")} className="form-control" id="title"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="floating-label" htmlFor="Sex">Select Gender</label>
                                    <select class="form-control" {...register("gender")}id="Sex">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="floating-label" htmlFor="Title">Address</label>
                                        <input {...register("address")} className="form-control" id="title"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="floating-label" htmlFor="Title">Ext</label>
                                        <input {...register("ext")} className="form-control" id="title"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="floating-label" htmlFor="Title">Phone No.</label>
                                        <input {...register("phone")} className="form-control" id="title"/>
                                        {/* <input type="text" className="form-control" id="title" placeholder=""/> */}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="floating-label" htmlFor="Title">Alternative Phone No.</label>
                                        <input {...register("phone2")} className="form-control" id="title"/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group fill">
                                        <label className="floating-label" htmlFor="Details">Description</label>
                                        <textarea rows="5" className="form-control" {...register("description")}></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                <h5>Social Media</h5>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="floating-label" htmlFor="Title">LinkedIn</label>
                                        <input {...register("linkedin")} className="form-control" id="title"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="floating-label" htmlFor="Title">Twitter</label>
                                        <input {...register("twitter")} className="form-control" id="title"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="floating-label" htmlFor="Title">Github</label>
                                        <input {...register("github")} className="form-control" id="title"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="floating-label" htmlFor="Title">Skype</label>
                                        <input {...register("skype")} className="form-control" id="title"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                <h5>Image</h5>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group fill">
                                        <label className="floating-label" htmlFor="Icon">Profile Image</label>
                                        <input  type="file" {...register("image")} className="form-control" id="Icon"/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        
    </>
  )
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`http://127.0.0.1:8000/users/1`)
    const res = await fetch(`https://sknportfolio.herokuapp.com/users/1`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { user:data } }
  }

Profile.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }