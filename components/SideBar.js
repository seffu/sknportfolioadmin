import React from 'react';
import Link from 'next/link';

const SideBar = () => {
    return (
        <>
            <div id="layout-sidenav" class="layout-sidenav sidenav sidenav-vertical bg-dark logo-dark">
                <div class="app-brand demo">
                    <span class="app-brand-logo demo">
                        <img src="assets/img/logo.jpg" height="30" width="45" alt="Brand Logo" class="img-fluid"/>
                    </span>
                    <a href="index.html" class="app-brand-text demo sidenav-text font-weight-normal ml-2">SKN portfolio</a>
                    <a href="javascript:" class="layout-sidenav-toggle sidenav-link text-large ml-auto">
                        <i class="ion ion-md-menu align-middle"></i>
                    </a>
                </div>
                <div class="sidenav-divider mt-0"></div>

                <ul class="sidenav-inner py-1">
                    <li class="sidenav-item open active">
                        <Link href='/'>
                            <a class="sidenav-link">
                                <i class="sidenav-icon feather icon-home"></i>
                                <div>Dashboard</div>
                            </a>
                        </Link>
                    </li>
                    <li class="sidenav-divider mb-1"></li>
                    <li class="sidenav-item">
                        <Link href='/experience'>
                            <a class="sidenav-link">
                                <i class="sidenav-icon feather icon-octagon"></i>
                                <div>Experience</div>
                            </a>
                        </Link>
                    </li>
                    <li class="sidenav-divider mb-1"></li>
                    <li class="sidenav-item">
                        <Link href='/education'>
                            <a class="sidenav-link">
                                <i class="sidenav-icon feather icon-award"></i>
                                <div>Education</div>
                            </a>
                        </Link>
                    </li>
                    <li class="sidenav-divider mb-1"></li>
                    <li class="sidenav-item">
                        <Link href='/certifications'>
                            <a class="sidenav-link">
                                <i class="sidenav-icon feather icon-shield"></i>
                                <div>Certifications</div>
                            </a>
                        </Link>
                    </li>
                    <li class="sidenav-divider mb-1"></li>
                    <li class="sidenav-item">
                        <Link href='/technologies'>
                            <a class="sidenav-link">
                                <i class="sidenav-icon feather icon-activity"></i>
                                <div>Technologies</div>
                            </a>
                        </Link>
                    </li>
                    <li class="sidenav-divider mb-1"></li>
                    <li class="sidenav-item">
                        <Link href='/interests'>
                            <a class="sidenav-link">
                                <i class="sidenav-icon feather icon-thumbs-up"></i>
                                <div>Interests</div>
                            </a>
                        </Link>
                    </li>
                    <li class="sidenav-divider mb-1"></li>
                    <li class="sidenav-item">
                        <Link href='/projects'>
                            <a class="sidenav-link">
                                <i class="sidenav-icon feather icon-briefcase"></i>
                                <div>Projects</div>
                            </a>
                        </Link>
                    </li>
                    <li class="sidenav-divider mb-1"></li>
                    <li class="sidenav-item">
                        <Link href='/blogs'>
                            <a class="sidenav-link">
                                <i class="sidenav-icon feather icon-message-square"></i>
                                <div>Blogs</div>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SideBar;