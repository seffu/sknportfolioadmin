import React from 'react'
import Layout from '../layouts/Layout'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { retrieveInterests,createInterest,deleteInterest, updateInterest } from "../features/slices/interestsSlice";

export default function interests() {
    const dispatch = useDispatch();
    const interests = useSelector((state) => state.interests);
    const { register, handleSubmit,reset} = useForm();
    const { register: register2,handleSubmit: handleSubmit2,reset: reset2 } = useForm();

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
            maneno = {title:data.title,details:data.details,image:r.url,interest_id: data.interest_id}
        }else{maneno = data}
        dispatch(updateInterest(maneno))
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

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.set("file", data.image[0]);
        formData.set("upload_preset", "portfolio");
        const info = await fetch('https://api.cloudinary.com/v1_1/seffukioi/image/upload', {
            method: "POST",
            body: formData
        });
        const r = await info.json()
        dispatch(createInterest({title:data.title,details:data.details,image:r.url}))
        .then(res => {
            if (res.payload) {
              swal({
                title: "Done!",
                text: "Interest Added Successfully",
                icon: "success",
                timer: 2000,
                button: false
              });
            } else {
              swal({
                title: "Error!",
                text: "Unsuccessful",
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
    const removeInterest = id => {
        swal({
          title: "Are you sure?",
          text: "You want to delete this Interest?",
          icon: "warning",
          showCancelButton: true,
          showCloseButton: true,
          cancelButtonColor: '#d33',
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            dispatch(deleteInterest(id))
              .then(res => {
                swal({
                  title: "Done!",
                  text: "Interest is deleted",
                  icon: "success",
                  timer: 2000,
                  button: false
                })
            });
          }
        });
      }
    useEffect(() => {
      dispatch(retrieveInterests())
    },[dispatch]);
  return (
    <>
        <div className="container-fluid flex-grow-1 container-p-y">
            <h4 className="font-weight-bold py-3 mb-0">Interests</h4>
            <div className="text-muted small mt-0 mb-4 d-block breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
                    <li className="breadcrumb-item active"><a href="#!">Interests</a></li>
                </ol>
            </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center m-l-0">
                                    <div className="col-sm-6">
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <button className="btn btn-success btn-sm mb-3 btn-round" onClick={() => reset()} data-toggle="modal" data-target="#modal-report"><i className="feather icon-plus"></i> Add Interest</button>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table id="report-table" className="table mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Title</th>
                                                <th>Details</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {interests.map((interest)=>(
                                                <tr key={interest.interest_id}>
                                                    <td className="align-middle">
                                                        <img src={interest.image} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                                        <p className="m-0 d-inline-block align-middle font-16">
                                                            <a href="#!" className="text-body">{interest.title}</a>
                                                        </p>
                                                    </td>
                                                    <td className="align-middle">
                                                    {interest.details}
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="#!" data-toggle="modal" data-target="#modal-edit" onClick={() => reset2(interest)} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"></i></a>
                                                        <a href="#!" onClick={e => removeInterest(interest.interest_id)} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"></i></a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="modal fade" id="modal-report" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add Interest</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="floating-label" for="Title">Title</label>
                                    <input {...register("title")} className="form-control" id="title"/>
                                    {/* <input type="text" className="form-control" id="title" placeholder=""/> */}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" for="Details">Details</label>
                                    <textarea className="form-control" {...register("details")}></textarea>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" for="Icon">Interest Image</label>
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

        <div className="modal fade" id="modal-edit" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit Interest</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit2(onUpdate)} enctype="multipart/form-data">
                        <input {...register2("interest_id")} className="form-control" type="hidden"/>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="floating-label" for="Title">Title</label>
                                    <input {...register2("title")} className="form-control" id="title"/>
                                    {/* <input type="text" className="form-control" id="title" placeholder=""/> */}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" for="Details">Details</label>
                                    <textarea className="form-control" {...register2("details")}></textarea>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" for="Icon">Interest Image</label>
                                    <input  type="file" {...register2("image")} className="form-control" id="Icon"/>
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

interests.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
