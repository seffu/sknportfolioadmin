import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-dark container-p-x" id="layout-navbar">

        <a href="index.html" class="navbar-brand app-brand demo d-lg-none py-0 mr-4">
            <span class="app-brand-logo demo">
                <img src="assets/img/logo-dark.jpg" height="30" width="45" alt="Brand Logo" class="img-fluid"/>
            </span>
        </a>

        <div class="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto">
            <a class="nav-item nav-link px-0 mr-lg-4" href="javascript:">
                <i class="ion ion-md-menu text-large align-middle"></i>
            </a>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#layout-navbar-collapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="layout-navbar-collapse">
            <hr class="d-lg-none w-100 my-2"/>

            <div class="navbar-nav align-items-lg-center ml-auto">

                <div class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>
                <div class="demo-navbar-user nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                        <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                            <img src="assets/img/avatars/1.png" alt class="d-block ui-w-30 rounded-circle"/>
                            <span class="px-1 mr-lg-2 ml-2 ml-lg-0">Seffu Kioi</span>
                        </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <Link href="profile">
                        <a href="javascript:" class="dropdown-item"><i class="feather icon-user text-muted"></i> &nbsp; My profile</a>
                        </Link>
                        <div class="dropdown-divider"></div>
                        <Link href="signin">
                        <a class="dropdown-item"> <i class="feather icon-power text-danger"></i> &nbsp; Log Out</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Header;