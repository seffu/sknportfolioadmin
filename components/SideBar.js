import React from 'react';
import Link from 'next/link';

const SideBar = () => {
    return (
        <>
            <div id="layout-sidenav" className="layout-sidenav sidenav sidenav-vertical bg-dark logo-dark">
                <div className="app-brand demo">
                    <span className="app-brand-logo demo">
                        <img src="assets/img/logo.jpg" height="30" width="45" alt="Brand Logo" className="img-fluid"/>
                    </span>
                    <a href="index.html" className="app-brand-text demo sidenav-text font-weight-normal ml-2">SKN portfolio</a>
                    <a href="javascript:" className="layout-sidenav-toggle sidenav-link text-large ml-auto">
                        <i className="ion ion-md-menu align-middle"></i>
                    </a>
                </div>
                <div className="sidenav-divider mt-0"></div>

                <ul className="sidenav-inner py-1">
                    <li className="sidenav-item open active">
                        <Link href='/'>
                            <a className="sidenav-link">
                                <i className="sidenav-icon feather icon-home"></i>
                                <div>Dashboard</div>
                            </a>
                        </Link>
                    </li>
                    <li className="sidenav-divider mb-1"></li>
                    <li className="sidenav-item">
                        <Link href='/experience'>
                            <a className="sidenav-link">
                                <i className="sidenav-icon feather icon-octagon"></i>
                                <div>Experience</div>
                            </a>
                        </Link>
                    </li>
                    <li className="sidenav-divider mb-1"></li>
                    <li className="sidenav-item">
                        <Link href='/education'>
                            <a className="sidenav-link">
                                <i className="sidenav-icon feather icon-award"></i>
                                <div>Education</div>
                            </a>
                        </Link>
                    </li>
                    <li className="sidenav-divider mb-1"></li>
                    <li className="sidenav-item">
                        <Link href='/certifications'>
                            <a className="sidenav-link">
                                <i className="sidenav-icon feather icon-shield"></i>
                                <div>Certifications</div>
                            </a>
                        </Link>
                    </li>
                    <li className="sidenav-divider mb-1"></li>
                    <li className="sidenav-item">
                        <Link href='/technologies'>
                            <a className="sidenav-link">
                                <i className="sidenav-icon feather icon-activity"></i>
                                <div>Technologies</div>
                            </a>
                        </Link>
                    </li>
                    <li className="sidenav-divider mb-1"></li>
                    <li className="sidenav-item">
                        <Link href='/interests'>
                            <a className="sidenav-link">
                                <i className="sidenav-icon feather icon-thumbs-up"></i>
                                <div>Interests</div>
                            </a>
                        </Link>
                    </li>
                    <li className="sidenav-divider mb-1"></li>
                    <li className="sidenav-item">
                        <Link href='/projects'>
                            <a className="sidenav-link">
                                <i className="sidenav-icon feather icon-briefcase"></i>
                                <div>Projects</div>
                            </a>
                        </Link>
                    </li>
                    <li className="sidenav-divider mb-1"></li>
                    <li className="sidenav-item">
                        <Link href='/blogs'>
                            <a className="sidenav-link">
                                <i className="sidenav-icon feather icon-message-square"></i>
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