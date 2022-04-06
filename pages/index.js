import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layouts/Layout'

export default function Home() {
  return (
    <main>
                    <div className="container-fluid flex-grow-1 container-p-y">
                        <h4 className="font-weight-bold py-3 mb-0">Dashboard</h4>
                        <div className="text-muted small mt-0 mb-4 d-block breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                <li className="breadcrumb-item active">Main</li>
                            </ol>
                        </div>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="">
                                                        <h2 className="mb-2"> 256 </h2>
                                                        <p className="text-muted mb-0"><span className="badge badge-primary">Revenue</span> Today</p>
                                                    </div>
                                                    <div className="lnr lnr-leaf display-4 text-primary"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="">
                                                        <h2 className="mb-2">8451</h2>
                                                        <p className="text-muted mb-0"><span className="badge badge-success">20%</span> Stock</p>
                                                    </div>
                                                    <div className="lnr lnr-chart-bars display-4 text-success"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="">
                                                        <h2 className="mb-2"> 31% <small></small></h2>
                                                        <p className="text-muted mb-0">New <span className="badge badge-danger">20%</span> Customer</p>
                                                    </div>
                                                    <div className="lnr lnr-rocket display-4 text-danger"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="">
                                                        <h2 className="mb-2">158</h2>
                                                        <p className="text-muted mb-0"><span className="badge badge-warning">$143.45</span> Profit</p>
                                                    </div>
                                                    <div className="lnr lnr-cart display-4 text-warning"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="card d-flex w-100 mb-4">
                                            <div className="row no-gutters row-bordered row-border-light h-100">
                                                <div className="d-flex col-md-6 align-items-center">
                                                    <div className="card-body">
                                                        <div className="row align-items-center mb-3">
                                                            <div className="col-auto">
                                                                <i className="lnr lnr-users text-primary display-4"></i>
                                                            </div>
                                                            <div className="col">
                                                                <h6 className="mb-0 text-muted">Unique <span className="text-primary">Visitors</span></h6>
                                                                <h4 className="mt-3 mb-0">652<i className="ion ion-md-arrow-round-down ml-3 text-danger"></i></h4>
                                                            </div>
                                                        </div>
                                                        <p className="mb-0 text-muted">36% From Last 6 Months</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex col-md-6 align-items-center">
                                                    <div className="card-body">
                                                        <div className="row align-items-center mb-3">
                                                            <div className="col-auto">
                                                                <i className="lnr lnr-magic-wand text-primary display-4"></i>
                                                            </div>
                                                            <div className="col">
                                                                <h6 className="mb-0 text-muted">Monthly <span className="text-primary">Earnings</span></h6>
                                                                <h4 className="mt-3 mb-0">5963<i className="ion ion-md-arrow-round-up ml-3 text-success"></i></h4>
                                                            </div>
                                                        </div>
                                                        <p className="mb-0 text-muted">36% From Last 6 Months</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="card mb-4">
                                    <div className="card-header with-elements">
                                        <h6 className="card-header-title mb-0">Statistics</h6>
                                        <div className="card-header-elements ml-auto">
                                            <label className="text m-0">
                                                <span className="text-light text-tiny font-weight-semibold align-middle">SHOW STATS</span>
                                                <span className="switcher switcher-primary switcher-sm d-inline-block align-middle mr-0 ml-2"><input type="checkbox" className="switcher-input" checked/><span className="switcher-indicator"><span
                                                            className="switcher-yes"></span><span className="switcher-no"></span></span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div id="statistics-chart-1" style={{ height:"300px" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card d-flex w-100 mb-4">
                                    <div className="row no-gutters row-bordered row-border-light h-100">
                                        <div className="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
                                            <div className="card-body media align-items-center text-dark">
                                                <i className="lnr lnr-diamond display-4 d-block text-primary"></i>
                                                <span className="media-body d-block ml-3"><span className="text-big mr-1 text-primary">$1584.78</span>
                                                    <br/>
                                                    <small className="text-muted">Earned this month</small>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
                                            <div className="card-body media align-items-center text-dark">
                                                <i className="lnr lnr-clock display-4 d-block text-warning"></i>
                                                <span className="media-body d-block ml-3"><span className="text-big"><span className="mr-1 text-warning">152</span>Working Hours</span>
                                                    <br/>
                                                    <small className="text-muted">Spent this month</small>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
                                            <div className="card-body media align-items-center text-dark">
                                                <i className="lnr lnr-hourglass display-4 d-block text-danger"></i>
                                                <span className="media-body d-block ml-3"><span className="text-big"><span className="mr-1 text-danger">54</span> Tasks</span>
                                                    <br/>
                                                    <small className="text-muted">Completed this month</small>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
                                            <div className="card-body media align-items-center text-dark">
                                                <i className="lnr lnr-license display-4 d-block text-success"></i>
                                                <span className="media-body d-block ml-3"><span className="text-big"><span className="mr-1 text-success">6</span> Projects</span>
                                                    <br/>
                                                    <small className="text-muted">Done this month</small>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card mb-4 bg-pattern-3 bg-primary text-white">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="lnr lnr-cart display-4"></div>
                                                    <div className="ml-3">
                                                        <div className="small">Monthly sales</div>
                                                        <div className="text-large">2362</div>
                                                    </div>
                                                </div>
                                                <div id="order-chart-1" className="mt-3 chart-shadow" style={{ height:"70px" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4 bg-pattern-3-dark">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="lnr lnr-gift display-4 text-primary"></div>
                                                    <div className="ml-3">
                                                        <div className="text-muted small">Products</div>
                                                        <div className="text-large">985</div>
                                                    </div>
                                                </div>
                                                <div id="ecom-chart-3" className="mt-3 chart-shadow-primary" style={{ height:"70px" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </main>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}