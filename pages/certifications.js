import React from 'react'
import Layout from '../layouts/Layout'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { retrieveCertifications,createCertification,deleteCertification, updateCertification } from "../features/slices/certificationsSlice";

export default function certifications() {
    const dispatch = useDispatch();
    const certifications = useSelector((state) => state.certifications);
    const { register, handleSubmit,reset} = useForm();
    const { register: register2,handleSubmit: handleSubmit2,reset: reset2 } = useForm();

    const onUpdate = data => {
        dispatch(updateCertification(data))
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
        dispatch(createCertification(data))
        .then(res => {
            if (res.payload) {
              swal({
                title: "Done!",
                text: "Certification Added Successfully",
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

    const removeCertification = id => {
        swal({
          title: "Are you sure?",
          text: "You want to delete this certification?",
          icon: "warning",
          showCancelButton: true,
          showCloseButton: true,
          cancelButtonColor: '#d33',
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            dispatch(deleteCertification(id))
              .then(res => {
                swal({
                  title: "Done!",
                  text: "certification is deleted",
                  icon: "success",
                  timer: 2000,
                  button: false
                })
            });
          }
        });
      }

    useEffect(() => {
      dispatch(retrieveCertifications())
    },[dispatch]);
  return (
    <>
        <div class="container-fluid flex-grow-1 container-p-y">
            <h4 class="font-weight-bold py-3 mb-0">Certifications</h4>
            <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                    <li class="breadcrumb-item active"><a href="#!">Certifications</a></li>
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
                                    <button class="btn btn-success btn-sm mb-3 btn-round"  onClick={() => reset()} data-toggle="modal" data-target="#modal-report"><i class="feather icon-plus"></i> Add Certification</button>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table id="report-table" class="table mb-0">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Title</th>
                                            <th>Organization</th>
                                            <th>Issue Date</th>
                                            <th>Expiry Date</th>
                                            <th>Expires</th>
                                            <th>Credential ID</th>
                                            <th>Credential URL</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {certifications.map((certification)=>(
                                            <tr key={certification.certification_id}>
                                                <td class="align-middle">
                                                    <p class="m-0 d-inline-block align-middle font-16">
                                                        <a href="#!" class="text-body">{certification.title}</a>
                                                    </p>
                                                </td>
                                                <td class="align-middle">
                                                {certification.organization}
                                                </td>
                                                <td class="align-middle">
                                                {certification.issue_date}
                                                </td>
                                                <td class="align-middle">
                                                {certification.expiry_date}
                                                </td>
                                                <td class="align-middle">
                                                    <fieldset disabled>
                                                        <label class="switcher switcher-success">
                                                            <input type="checkbox" class="switcher-input" checked={certification.expires} />
                                                            <span class="switcher-indicator">
                                                                <span class="switcher-yes"></span>
                                                                <span class="switcher-no"></span>
                                                            </span>
                                                        </label>
                                                    </fieldset>
                                                </td>
                                                <td class="align-middle">
                                                {certification.credential_id}
                                                </td>
                                                <td class="align-middle">
                                                {certification.credential_url}
                                                </td>
                                                <td class="table-action">
                                                    <a href="#!" data-toggle="modal" data-target="#modal-edit" onClick={() => reset2(certification)} class="btn btn-icon btn-outline-success"><i class="feather icon-edit"></i></a>
                                                    <a href="#!" onClick={e => removeCertification(certification.certification_id)} class="btn btn-icon btn-outline-danger"><i class="feather icon-trash-2"></i></a>
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
                    <h5 class="modal-title">Add Certification</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label class="floating-label" for="Title">Title</label>
                                    <input {...register("title")} className="form-control" id="title"/>
                                    {/* <input type="text" class="form-control" id="title" placeholder=""/> */}
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Organization</label>
                                    <input {...register("organization")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Credential ID</label>
                                    <input {...register("credential_id")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Credential URL</label>
                                    <input {...register("credential_url")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Issue Date</label>
                                    <input type="text" class="form-control datepicker-base" {...register("issue_date")} />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Expiry Date</label>
                                    <input type="text" {...register("expiry_date")} class="form-control datepicker-base" />
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="switcher">
                                        <input  {...register("expires")} type="checkbox" class="switcher-input"/>
                                        <span class="switcher-indicator">
                                            <span class="switcher-yes"></span>
                                            <span class="switcher-no"></span>
                                        </span>
                                        <span class="switcher-label">Expires?</span>
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
                    <h5 class="modal-title">Edit Certification</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form onSubmit={handleSubmit2(onUpdate)} enctype="multipart/form-data">
                    <input {...register2("certification_id")} className="form-control" type="hidden"/>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label class="floating-label" for="Title">Title</label>
                                    <input {...register2("title")} className="form-control" id="title"/>
                                    {/* <input type="text" class="form-control" id="title" placeholder=""/> */}
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Organization</label>
                                    <input {...register2("organization")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Credential ID</label>
                                    <input {...register2("credential_id")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Credential URL</label>
                                    <input {...register2("credential_url")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Issue Date</label>
                                    <input type="text" class="form-control datepicker-base" {...register2("issue_date")} />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Details">Expiry Date</label>
                                    <input type="text" {...register2("expiry_date")} class="form-control datepicker-base" />
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="switcher">
                                        <input  {...register2("expires")} type="checkbox" class="switcher-input"/>
                                        <span class="switcher-indicator">
                                            <span class="switcher-yes"></span>
                                            <span class="switcher-no"></span>
                                        </span>
                                        <span class="switcher-label">Expires?</span>
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
    </>
  )
}

certifications.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }