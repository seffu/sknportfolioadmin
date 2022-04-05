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
        <div class="container-fluid flex-grow-1 container-p-y">
            <h4 class="font-weight-bold py-3 mb-0">Experience</h4>
            <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                    <li class="breadcrumb-item active"><a href="#!">Experience</a></li>
                </ol>
            </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center m-l-0">
                                    <div class="col-sm-6">
                                    </div>
                                    <div class="col-sm-6 text-right">
                                        <button class="btn btn-success btn-sm mb-3 btn-round" data-toggle="modal" data-target="#modal-report" onClick={() => reset()}><i class="feather icon-plus"></i> Add Experience</button>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table id="report-table" class="table mb-0">
                                        <thead class="thead-light">
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
                                                    <td class="align-middle">
                                                        <p class="m-0 d-inline-block align-middle font-16">
                                                            <a href="#!" class="text-body">{experience.company}</a>
                                                        </p>
                                                    </td>
                                                    <td class="align-middle">
                                                    {experience.role}
                                                    </td>
                                                    <td class="align-middle">
                                                    {experience.location}
                                                    </td>
                                                    <td class="align-middle">
                                                            <fieldset disabled>
                                                                        <label class="switcher switcher-success">
                                                                            <input type="checkbox" class="switcher-input" checked={experience.is_current} />
                                                                            <span class="switcher-indicator">
                                                                                <span class="switcher-yes"></span>
                                                                                <span class="switcher-no"></span>
                                                                            </span>
                                                                        </label>
                                                            </fieldset>
                                                    </td>
                                                    <td class="align-middle">
                                                    {experience.start_date}
                                                    </td>
                                                    <td class="align-middle">
                                                    {experience.end_date}
                                                    </td>
                                                    <td class="table-action">
                                                        <a href="#!" data-toggle="modal" data-target="#modal-edit" onClick={() => reset2(experience)} class="btn btn-icon btn-outline-success"><i class="feather icon-edit"></i></a>
                                                        <a href="#!" onClick={e => removeExperience(experience.experience_id)} class="btn btn-icon btn-outline-danger"><i class="feather icon-trash-2"></i></a>
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
        <div class="modal fade" id="modal-report" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Experience</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label class="floating-label" for="Title">Company</label>
                                    <input {...register("company")} className="form-control" id="title"/>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Role</label>
                                    <input {...register("role")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Location</label>
                                    <input {...register("location")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Description</label>
                                    <textarea class="form-control" {...register("description")}></textarea>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Start Date</label>
                                    <input type="text" class="form-control datepicker-base" {...register("start_date")} />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">End Date</label>
                                    <input type="text" {...register("end_date")} class="form-control datepicker-base" />
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="switcher">
                                        <input  {...register("is_current")} type="checkbox" class="switcher-input"/>
                                        <span class="switcher-indicator">
                                            <span class="switcher-yes"></span>
                                            <span class="switcher-no"></span>
                                        </span>
                                        <span class="switcher-label">Current?</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>

        <div class="modal fade" id="modal-edit" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Experience</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handleSubmit2(onUpdate)}>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label class="floating-label" for="Title">Company</label>
                                        <input {...register2("company")} className="form-control" id="title"/>
                                    </div>
                                </div>
                                <input {...register2("experience_id")} className="form-control" type="hidden"/>
                                <div class="col-sm-12">
                                    <div class="form-group fill">
                                        <label class="floating-label" for="Details">Role</label>
                                        <input {...register2("role")} className="form-control" id="proficiency"/>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group fill">
                                        <label class="floating-label" for="Details">Location</label>
                                        <input {...register2("location")} className="form-control" id="proficiency"/>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group fill">
                                        <label class="floating-label" for="Details">Description</label>
                                        <textarea class="form-control" {...register2("description")}></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group fill">
                                        <label class="floating-label" for="Details">Start Date</label>
                                        <input type="text" class="form-control datepicker-base" {...register2("start_date")} />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group fill">
                                        <label class="floating-label" for="Details">End Date</label>
                                        <input type="text" {...register2("end_date")} class="form-control datepicker-base" />
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group fill">
                                        <label class="switcher">
                                            <input  {...register2("is_current")} type="checkbox" class="switcher-input"/>
                                            <span class="switcher-indicator">
                                                <span class="switcher-yes"></span>
                                                <span class="switcher-no"></span>
                                            </span>
                                            <span class="switcher-label">Current?</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <button type="submit" class="btn btn-primary">Submit</button>
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
