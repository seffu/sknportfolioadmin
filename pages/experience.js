import React from 'react'
import Layout from '../layouts/Layout'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { retrieveExperiences,createExperience,deleteExperience,updateExperience } from "../features/slices/experiencesSlice";

export default function experience() {
    const dispatch = useDispatch();
    const experiences = useSelector((state) => state.experiences);
    const { register, handleSubmit,reset } = useForm();
    const {register: register2,handleSubmit: handleSubmit2,reset: reset2} = useForm();

    const onSubmit = async (data) => {
        dispatch(createExperience(data))
        .then(res => {
            if (res.payload) {
              swal({
                title: "Done!",
                text: "Experience Added Successful",
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

    const onUpdate = data => {
        dispatch(updateExperience(data))
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

    const removeExperience = id => {
        swal({
          title: "Are you sure?",
          text: "You want to delete this Experience?",
          icon: "warning",
          showCancelButton: true,
          showCloseButton: true,
          cancelButtonColor: '#d33',
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            dispatch(deleteExperience(id))
              .then(res => {
                swal({
                  title: "Done!",
                  text: "Experience is deleted",
                  icon: "success",
                  timer: 2000,
                  button: false
                })
            });
          }
        });
      }
    useEffect(() => {
      dispatch(retrieveExperiences())
    },[dispatch]);
  return (
    <>
        <div className="container-fluid flex-grow-1 container-p-y">
            <h4 className="font-weight-bold py-3 mb-0">Experience</h4>
            <div className="text-muted small mt-0 mb-4 d-block breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
                    <li className="breadcrumb-item active"><a href="#!">Experience</a></li>
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
                                        <button className="btn btn-success btn-sm mb-3 btn-round" data-toggle="modal" data-target="#modal-report" onClick={() => reset()}><i className="feather icon-plus"></i> Add Experience</button>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table id="report-table" className="table mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Company</th>
                                                <th>Role</th>
                                                <th>Location</th>
                                                <th>Is Current</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {experiences.map((experience)=>(
                                                <tr key={experience.experience_id}>
                                                    <td className="align-middle">
                                                        <p className="m-0 d-inline-block align-middle font-16">
                                                            <a href="#!" className="text-body">{experience.company}</a>
                                                        </p>
                                                    </td>
                                                    <td className="align-middle">
                                                    {experience.role}
                                                    </td>
                                                    <td className="align-middle">
                                                    {experience.location}
                                                    </td>
                                                    <td className="align-middle">
                                                            <fieldset disabled>
                                                                        <label className="switcher switcher-success">
                                                                            <input type="checkbox" className="switcher-input" checked={experience.is_current} />
                                                                            <span className="switcher-indicator">
                                                                                <span className="switcher-yes"></span>
                                                                                <span className="switcher-no"></span>
                                                                            </span>
                                                                        </label>
                                                            </fieldset>
                                                    </td>
                                                    <td className="align-middle">
                                                    {experience.start_date}
                                                    </td>
                                                    <td className="align-middle">
                                                    {experience.end_date}
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="#!" data-toggle="modal" data-target="#modal-edit" onClick={() => reset2(experience)} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"></i></a>
                                                        <a href="#!" onClick={e => removeExperience(experience.experience_id)} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"></i></a>
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
                    <h5 className="modal-title">Add Experience</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="floating-label" for="Title">Company</label>
                                    <input {...register("company")} className="form-control" id="title"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" for="Details">Role</label>
                                    <input {...register("role")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" for="Details">Location</label>
                                    <input {...register("location")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" for="Details">Description</label>
                                    <textarea className="form-control" {...register("description")}></textarea>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group fill">
                                    <label className="floating-label" for="Details">Start Date</label>
                                    <input type="text" className="form-control datepicker-base" {...register("start_date")} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group fill">
                                    <label className="floating-label" for="Details">End Date</label>
                                    <input type="text" {...register("end_date")} className="form-control datepicker-base" />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="switcher">
                                        <input  {...register("is_current")} type="checkbox" className="switcher-input"/>
                                        <span className="switcher-indicator">
                                            <span className="switcher-yes"></span>
                                            <span className="switcher-no"></span>
                                        </span>
                                        <span className="switcher-label">Current?</span>
                                    </label>
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
                        <h5 className="modal-title">Edit Experience</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit2(onUpdate)}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="floating-label" for="Title">Company</label>
                                        <input {...register2("company")} className="form-control" id="title"/>
                                    </div>
                                </div>
                                <input {...register2("experience_id")} className="form-control" type="hidden"/>
                                <div className="col-sm-12">
                                    <div className="form-group fill">
                                        <label className="floating-label" for="Details">Role</label>
                                        <input {...register2("role")} className="form-control" id="proficiency"/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group fill">
                                        <label className="floating-label" for="Details">Location</label>
                                        <input {...register2("location")} className="form-control" id="proficiency"/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group fill">
                                        <label className="floating-label" for="Details">Description</label>
                                        <textarea className="form-control" {...register2("description")}></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group fill">
                                        <label className="floating-label" for="Details">Start Date</label>
                                        <input type="text" className="form-control datepicker-base" {...register2("start_date")} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group fill">
                                        <label className="floating-label" for="Details">End Date</label>
                                        <input type="text" {...register2("end_date")} className="form-control datepicker-base" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group fill">
                                        <label className="switcher">
                                            <input  {...register2("is_current")} type="checkbox" className="switcher-input"/>
                                            <span className="switcher-indicator">
                                                <span className="switcher-yes"></span>
                                                <span className="switcher-no"></span>
                                            </span>
                                            <span className="switcher-label">Current?</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-primary">Submit</button>
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

experience.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
