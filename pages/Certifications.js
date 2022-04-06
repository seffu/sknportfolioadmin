import React from 'react'
import Layout from '../layouts/Layout'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { retrieveCertifications,createCertification,deleteCertification, updateCertification } from "../features/slices/certificationsSlice";

export default function Certifications() {
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
        <div className="container-fluid flex-grow-1 container-p-y">
            <h4 className="font-weight-bold py-3 mb-0">Certifications</h4>
            <div className="text-muted small mt-0 mb-4 d-block breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
                    <li className="breadcrumb-item active"><a href="#!">Certifications</a></li>
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
                                    <button className="btn btn-success btn-sm mb-3 btn-round"  onClick={() => reset()} data-toggle="modal" data-target="#modal-report"><i className="feather icon-plus"></i> Add Certification</button>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table id="report-table" className="table mb-0">
                                    <thead className="thead-light">
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
                                                <td className="align-middle">
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="#!" className="text-body">{certification.title}</a>
                                                    </p>
                                                </td>
                                                <td className="align-middle">
                                                {certification.organization}
                                                </td>
                                                <td className="align-middle">
                                                {certification.issue_date}
                                                </td>
                                                <td className="align-middle">
                                                {certification.expiry_date}
                                                </td>
                                                <td className="align-middle">
                                                    <fieldset disabled>
                                                        <label className="switcher switcher-success">
                                                            <input type="checkbox" className="switcher-input" checked={certification.expires} />
                                                            <span className="switcher-indicator">
                                                                <span className="switcher-yes"></span>
                                                                <span className="switcher-no"></span>
                                                            </span>
                                                        </label>
                                                    </fieldset>
                                                </td>
                                                <td className="align-middle">
                                                {certification.credential_id}
                                                </td>
                                                <td className="align-middle">
                                                {certification.credential_url}
                                                </td>
                                                <td className="table-action">
                                                    <a href="#!" data-toggle="modal" data-target="#modal-edit" onClick={() => reset2(certification)} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"></i></a>
                                                    <a href="#!" onClick={e => removeCertification(certification.certification_id)} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"></i></a>
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
                    <h5 className="modal-title">Add Certification</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                    <label className="floating-label" htmlFor="Details">Organization</label>
                                    <input {...register("organization")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Credential ID</label>
                                    <input {...register("credential_id")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Credential URL</label>
                                    <input {...register("credential_url")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Issue Date</label>
                                    <input type="text" className="form-control datepicker-base" {...register("issue_date")} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Expiry Date</label>
                                    <input type="text" {...register("expiry_date")} className="form-control datepicker-base" />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="switcher">
                                        <input  {...register("expires")} type="checkbox" className="switcher-input"/>
                                        <span className="switcher-indicator">
                                            <span className="switcher-yes"></span>
                                            <span className="switcher-no"></span>
                                        </span>
                                        <span className="switcher-label">Expires?</span>
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

        <div className="modal fade" id="modal-edit" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit Certification</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit2(onUpdate)}>
                    <input {...register2("certification_id")} className="form-control" type="hidden"/>
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
                                    <label className="floating-label" htmlFor="Details">Organization</label>
                                    <input {...register2("organization")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Credential ID</label>
                                    <input {...register2("credential_id")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Credential URL</label>
                                    <input {...register2("credential_url")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Issue Date</label>
                                    <input type="text" className="form-control datepicker-base" {...register2("issue_date")} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Details">Expiry Date</label>
                                    <input type="text" {...register2("expiry_date")} className="form-control datepicker-base" />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group fill">
                                    <label className="switcher">
                                        <input  {...register2("expires")} type="checkbox" className="switcher-input"/>
                                        <span className="switcher-indicator">
                                            <span className="switcher-yes"></span>
                                            <span className="switcher-no"></span>
                                        </span>
                                        <span className="switcher-label">Expires?</span>
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
    </>
  )
}

Certifications.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
