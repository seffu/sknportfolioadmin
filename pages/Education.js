import React from 'react'
import Layout from '../layouts/Layout'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { retrieveEducations,createEducation,deleteEducation, updateEducation } from "../features/slices/educationsSlice";

export default function Education() {
    const dispatch = useDispatch();
    const educations = useSelector((state) => state.educations);
    const { register, handleSubmit,reset} = useForm();
    const {register: register2,handleSubmit: handleSubmit2,reset: reset2} = useForm();


    const onUpdate = data => {
        dispatch(updateEducation(data))
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
        dispatch(createEducation(data))
        .then(res => {
            if (res.payload) {
              swal({
                title: "Done!",
                text: "Education Added Successfully",
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

    const removeEducation = id => {
        swal({
          title: "Are you sure?",
          text: "You want to delete this Education?",
          icon: "warning",
          showCancelButton: true,
          showCloseButton: true,
          cancelButtonColor: '#d33',
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            dispatch(deleteEducation(id))
              .then(res => {
                swal({
                  title: "Done!",
                  text: "Education is deleted",
                  icon: "success",
                  timer: 2000,
                  button: false
                })
            });
          }
        });
    };

    useEffect(() => {
      dispatch(retrieveEducations())
    },[dispatch]);
  return (
    <>
        <div className="container-fluid flex-grow-1 container-p-y">
            <h4 className="font-weight-bold py-3 mb-0">Education</h4>
            <div className="text-muted small mt-0 mb-4 d-block breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
                    <li className="breadcrumb-item active"><a href="#!">Education</a></li>
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
                                        <button className="btn btn-success btn-sm mb-3 btn-round" onClick={() => reset()} data-toggle="modal" data-target="#modal-report"><i className="feather icon-plus"></i> Add Education</button>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table id="report-table" className="table mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Title</th>
                                                <th>School</th>
                                                <th>Level</th>
                                                <th>Field</th>
                                                <th>Location</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {educations.map((education)=>(
                                                <tr key={education.education_id}>
                                                    <td className="align-middle">
                                                        <p className="m-0 d-inline-block align-middle font-16">
                                                            <a href="#!" className="text-body">{education.title}</a>
                                                        </p>
                                                    </td>
                                                    <td className="align-middle">
                                                    {education.school}
                                                    </td>
                                                    <td className="align-middle">
                                                    {education.level}
                                                    </td>
                                                    <td className="align-middle">
                                                    {education.field}
                                                    </td>
                                                    <td className="align-middle">
                                                    {education.location}
                                                    </td>
                                                    <td className="align-middle">
                                                    {education.start_date}
                                                    </td>
                                                    <td className="align-middle">
                                                    {education.end_date}
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="#!" data-toggle="modal" data-target="#modal-edit" onClick={() => reset2(education)} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"></i></a>
                                                        <a href="#!" onClick={e => removeEducation(education.education_id)} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"></i></a>
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
        <div className="modal fade" id="modal-report" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add Education</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="floating-label" htmlFor="Title">Title</label>
                                    <input {...register("title")} className="form-control" id="title"/>
                                    {/* <input type="text" className="form-control" id="title" placeholder=""/> */}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">School</label>
                                    <input {...register("school")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Level</label>
                                    <input {...register("level")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Field</label>
                                    <input {...register("field")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Location</label>
                                    <input {...register("location")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Start Date</label>
                                    <input type="text" className="form-control datepicker-base" {...register("start_date")} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">End Date</label>
                                    <input type="text" {...register("end_date")} className="form-control datepicker-base" />
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

        <div className="modal fade" id="modal-edit" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit Education</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit2(onUpdate)} >
                        <input {...register2("education_id")} className="form-control" type="hidden"/>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="floating-label" htmlFor="Title">Title</label>
                                    <input {...register2("title")} className="form-control" id="title"/>
                                    {/* <input type="text" className="form-control" id="title" placeholder=""/> */}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">School</label>
                                    <input {...register2("school")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Level</label>
                                    <input {...register2("level")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Field</label>
                                    <input {...register2("field")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Location</label>
                                    <input {...register2("location")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Start Date</label>
                                    <input type="text" className="form-control datepicker-base" {...register2("start_date")} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">End Date</label>
                                    <input type="text" {...register2("end_date")} className="form-control datepicker-base" />
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

Education.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
