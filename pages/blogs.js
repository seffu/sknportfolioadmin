import React,{useState} from 'react'
import dynamic from 'next/dynamic'
import Layout from '../layouts/Layout'
import FormData from 'form-data';


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { retrieveBlogs,createBlog,deleteBlog, updateBlog } from "../features/slices/blogsSlice";

export default function blogs() {
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
  
    const uploadToClient = (event) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];
        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));
      }
    };

    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs);
    const { register, handleSubmit, setValue,watch,reset } = useForm();
    const { register: register2,handleSubmit: handleSubmit2,reset: reset2,watch:watch2, setValue: setValue2,getValues} = useForm();

    const getdetails = getValues("details");
    console.log(getdetails);

    const detailsContent = watch("detailsContent");
    const onDetailsStateChange = (detailsState) => {
        setValue("details", detailsState);
    };

    const onDetailsUpdateStateChange = (detailsUpdateState) => {
        setValue2("details", detailsUpdateState);
    };
    const detailsUpdateContent = watch2("detailsUpdateContent");

    const onUpdate = async data => {
        console.log(data)
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
            maneno = {title:data.title,details:data.details,image:r.url,blog_id: data.blog_id}
            }else{maneno = data}
        dispatch(updateBlog(maneno))
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

    const onSubmit = async data => {
        console.log(data)
        const formData = new FormData();
        formData.set("file", data.image[0]);
        formData.set("upload_preset", "portfolio");
        const info = await fetch('https://api.cloudinary.com/v1_1/seffukioi/image/upload', {
            method: "POST",
            body: formData
        });
        const r = await info.json()
        dispatch(createBlog({title:data.title,details:data.details,image:r.url}))
        .then(res => {
            if (res.payload) {
              swal({
                title: "Done!",
                text: "Blog Added Successfully",
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

    const removeBlog = id => {
        swal({
          title: "Are you sure?",
          text: "You want to delete this Blog?",
          icon: "warning",
          showCancelButton: true,
          showCloseButton: true,
          cancelButtonColor: '#d33',
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            dispatch(deleteBlog(id))
              .then(res => {
                swal({
                  title: "Done!",
                  text: "Blog is deleted",
                  icon: "success",
                  timer: 2000,
                  button: false
                })
            });
          }
        });
      }

    useEffect(() => {
      dispatch(retrieveBlogs())
    },[dispatch]);
  return (
    <>
        <div class="container-fluid flex-grow-1 container-p-y">
            <h4 class="font-weight-bold py-3 mb-0">Blogs</h4>
            <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                    <li class="breadcrumb-item active"><a href="#!">Blogs</a></li>
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
                                        <button class="btn btn-success btn-sm mb-3 btn-round" onClick={() => reset()} data-toggle="modal" data-target="#modal-report"><i class="feather icon-plus"></i> Add Blog</button>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table id="report-table" class="table mb-0">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Title</th>
                                                <th>Details</th>
                                                <th>Added Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {blogs.map((blog)=>(
                                                <tr key={blog.blog_id}>
                                                    <td class="align-middle">
                                                        <img src={blog.image} alt="contact-img" title="contact-img" class="rounded mr-3" height="48" />
                                                        <p class="m-0 d-inline-block align-middle font-16">
                                                            <a href="#!" class="text-body">{blog.title}</a>
                                                        </p>
                                                    </td>
                                                    <td class="align-middle" dangerouslySetInnerHTML={{ __html: blog.details.substring(0,30) + '...' }}>
                                                    </td>
                                                    <td class="align-middle">
                                                    {blog.date_created}
                                                    </td>
                                                    <td class="table-action">
                                                        <a href="#!" data-toggle="modal" data-target="#modal-edit" onClick={() => reset2(blog)} class="btn btn-icon btn-outline-success"><i class="feather icon-edit"></i></a>
                                                        <a href="#!" onClick={e => removeBlog(blog.blog_id)} class="btn btn-icon btn-outline-danger"><i class="feather icon-trash-2"></i></a>
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
                    <h5 class="modal-title">Add Blog</h5>
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
                                    <label class="floating-label" for="Details">Details</label>
                                    <QuillNoSSRWrapper value={detailsContent || ''} onChange={onDetailsStateChange} modules={modules} formats={formats} theme="snow" />
                                </div>
                            </div>

                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Icon">Blog Image</label>
                                    {createObjectURL&&<div class="col-sm-12"><img src={createObjectURL} alt="blog-img" class="rounded mr-3" height="48" /></div>}
                                    <input  type="file" {...register("image")} name="image" class="form-control" id="Icon"/>
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
                    <h5 class="modal-title">Edit Blog</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form onSubmit={handleSubmit2(onUpdate)} enctype="multipart/form-data">
                    <input {...register2("blog_id")} className="form-control" type="hidden"/>
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
                                    <label class="floating-label" for="Details">Details</label>
                                    <QuillNoSSRWrapper value={ getdetails || '' } onChange={onDetailsUpdateStateChange} modules={modules} formats={formats} theme="snow" />
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group fill">
                                    <label class="floating-label" for="Icon">Blog Image</label>
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

blogs.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

  const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  })
  
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]