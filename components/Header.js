import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <nav className="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-dark container-p-x" id="layout-navbar">

        <a href="index.html" className="navbar-brand app-brand demo d-lg-none py-0 mr-4">
            <span className="app-brand-logo demo">
                <Image src="/assets/img/logo-dark.jpg" height={30} width={45} alt="Brand Logo" className="img-fluid"/>
            </span>
        </a>

        <div className="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto">
            <a className="nav-item nav-link px-0 mr-lg-4" href="javascript:">
                <i className="ion ion-md-menu text-large align-middle"></i>
            </a>
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#layout-navbar-collapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="layout-navbar-collapse">
            <hr className="d-lg-none w-100 my-2"/>

            <div className="navbar-nav align-items-lg-center ml-auto">

                <div className="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>
                <div className="demo-navbar-user nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                        <span className="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                            <Image src="http://res.cloudinary.com/seffukioi/image/upload/v1649150513/portfolio/l8yx5aws3jmgvzmkpb11.jpg" layout='fill' alt className="d-block ui-w-30 rounded-circle"/>
                            <span className="px-1 mr-lg-2 ml-2 ml-lg-0">Seffu Kioi</span>
                        </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link href="profile">
                            <a href="javascript:" className="dropdown-item"><i className="feather icon-user text-muted"></i> &nbsp; My profile</a>
                        </Link>
                            <div className="dropdown-divider"></div>
                        <Link href="signin">
                            <a className="dropdown-item"> <i className="feather icon-power text-danger"></i> &nbsp; Log Out</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Header;