import React from 'react'
import Layout from '../layouts/Layout'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { retrieveTechnologies,createTechnology,deleteTechnology, updateTechnology } from "../features/slices/technologiesSlice";

export default function technologies() {
    const dispatch = useDispatch();
    const technologies = useSelector((state) => state.technologies);
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
            maneno = {title:data.title,proficiency:data.proficiency,image:r.url,technology_id: data.technology_id}
        }else{maneno = data}
        console.log(maneno)
        dispatch(updateTechnology(maneno))
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
        dispatch(createTechnology({title:data.title,proficiency:data.proficiency,image:r.url}))
        .then(res => {
            if (res.payload) {
              swal({
                title: "Done!",
                text: "Technology Added Successfully",
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

    const removeTechnology = id => {
        swal({
          title: "Are you sure?",
          text: "You want to delete this Technology?",
          icon: "warning",
          showCancelButton: true,
          showCloseButton: true,
          cancelButtonColor: '#d33',
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            dispatch(deleteTechnology(id))
              .then(res => {
                swal({
                  title: "Done!",
                  text: "Technology is deleted",
                  icon: "success",
                  timer: 2000,
                  button: false
                })
            });
          }
        });
    }

    useEffect(() => {
      dispatch(retrieveTechnologies())
    },[dispatch]);
  return (
    <>
        <div class="container-fluid flex-grow-1 container-p-y">
            <h4 class="font-weight-bold py-3 mb-0">Technologies</h4>
            <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                    <li class="breadcrumb-item active"><a href="#!">Technologies</a></li>
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
                                        <button class="btn btn-success btn-sm mb-3 btn-round" onClick={() => reset()} data-toggle="modal" data-target="#modal-report"><i class="feather icon-plus"></i> Add Technology</button>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table id="report-table" class="table mb-0">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Title</th>
                                                <th>Proficiency</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {technologies.map((technology)=>(
                                                <tr key={technology.technology_id}>
                                                    <td class="align-middle">
                                                        <img src={technology.image} alt="contact-img" title="contact-img" class="rounded mr-3" height="48" />
                                                        <p class="m-0 d-inline-block align-middle font-16">
                                                            <a href="#!" class="text-body">{technology.title}</a>
                                                        </p>
                                                    </td>
                                                    <td class="align-middle">
                                                    {technology.proficiency}
                                                    </td>
                                                    <td class="table-action">
                                                        <a href="#!" data-toggle="modal" data-target="#modal-edit" onClick={() => reset2(technology)} class="btn btn-icon btn-outline-success"><i class="feather icon-edit"></i></a>
                                                        <a href="#!" onClick={e => removeTechnology(technology.technology_id)} class="btn btn-icon btn-outline-danger"><i class="feather icon-trash-2"></i></a>
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
                    <h5 class="modal-title">Add Technology</h5>
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
                                    <label class="floating-label" for="Details">Proficiency</label>
                                    <input {...register("proficiency")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Icon">Technology Image</label>
                                    <input  type="file" {...register("image")} class="form-control" id="Icon"/>
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
                    <h5 class="modal-title">Edit Technology</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form onSubmit={handleSubmit2(onUpdate)} enctype="multipart/form-data">
                    <input {...register2("technology_id")} className="form-control" type="hidden"/>
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
                                    <label class="floating-label" for="Details">Proficiency</label>
                                    <input {...register2("proficiency")} className="form-control" id="proficiency"/>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Icon">Technology Image</label>
                                    <input  type="file" {...register2("image")} class="form-control" id="Icon"/>
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

technologies.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }



          // console.log(data)
        // const formData = new FormData();
        // formData.append("image", data.image[0],data.image[0].name);
        // fetch("http://127.0.0.1:8000/uploadfile/", {
        //     method: "POST",
        //     body: formData,
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'Accept': 'application/json'
        //     }
        //   });
        // dispatch(uploadFile(formData));