'use client'

import { FC } from "react"
import { ICandidatFullData } from "../../types"
import Image from "next/image"
import { Heading } from "@/shared/components"
import { IoLocationSharp } from "react-icons/io5"
import { useAppSelector } from "@/shared/hooks"
import { RatingStars } from "@/features/rating/components/RatingStars"
import { UserRole } from "@/features/auth/types"

export const CandidateFull: FC<ICandidatFullData> = ({
    avatar,
    about_my,
    firstname,
    surname,
    phone,
    birthday,
    user,
    skills,
    languages,
    hobbies,
    candidatLifeState,
    courses,
    createdAt,
    education,
    experience,
    jobContacts,
    resident
}) => {
    const authUser = useAppSelector(state => state.reducer.user.data)
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-4/6">
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                    <div className="candidate-brief-item">
                        <div className="row align-items-center">
                            <div className="shadow-2xl shadow-slate-700-500/50 dark:shadow-gray-300-100">
                                <Image src={avatar[0]} alt={firstname + surname} height={100} width={100} className="w-[100px] h-[100px] rounded-3xl" />
                            </div>
                            <div className="flext flex-col gap-2">
                                <div className="flex flex-col md:flex-row gap-3 items-end">
                                    <Heading>{surname} {firstname}</Heading>
                                    <small className="flex flex-row items-center"><IoLocationSharp /> {resident}</small>
                                </div>
                                <small>UI/UX Designer. Frontend Developer</small>
                                <div className="flex flex-row gap-2 items-center">
                                    {authUser?.role === UserRole.Agency && <div className="rating me-1">
                                        <RatingStars userId={user.id} reviewerId={authUser.id} />
                                    </div>}
                                </div>
                                <ul className="mb-0">
                                    <li><a className="bg-grey rounded p-2 px-3 small mb-1 d-inline-block" href="job-grid.html">Adobe XD</a></li>
                                    <li><a className="bg-grey rounded p-2 px-3 small mb-1 d-inline-block" href="job-grid.html">Figma</a></li>
                                    <li><a className="bg-grey rounded p-2 px-3 small mb-1 d-inline-block" href="job-grid.html">Photoshop</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-4 mb-2"><a href="#" className="job-btn1 btn1 d-inline-block">Download CV</a></div>
                        </div>
                    </div>
                </div>

                <div className="single-content border-t mt-4 pt-4">
                    <div className="job-description mb-2">
                        <h4>About Me</h4>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim a erat sit vulputate elementum. Risus nec viverra ornare venenatis proin ac varius tristique ut. Vitae egestasLorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim a erat sit vulputate elementum orci. Risus nec viverra ornare venenatis proin ac varius ut. Vitae egestas tellus amet nulla cursus in that. Pellentesque placerat maecenas egestas ullamcorper sed sarinto.</p>
                    </div>
                    <div className="job-description mb-2">
                        <h4>Professional SKills</h4>
                        <div className="job-progress">
                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <span>HTML &amp; CSS</span>
                                    <div className="progress">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="job-description mb-2">
                        <h4>Work Experience</h4>
                        <ul className="list-group ps-3">
                            <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                            <li>5+ years of industry experience in interactive design and / or visual design</li>
                            <li>HTML, CSS, XHTML, XML</li>
                            <li>Hypervisors, SAN’s, load balancers, firewalls, and Web Application Firewall (WAF)</li>
                            <li>Experience with Higher Logic (a collaboration platform)</li>
                            <li>MongoDB, Drupal</li>
                            <li>Mobile App Development (iOS and Android)</li>
                            <li>Episerver CMS</li><li>Microsoft Team Foundation Server</li>
                            <li>Speaker Management System (Planstone)</li>
                        </ul>
                    </div>

                    <div className="job-description border-all p-4 pb-2 rounded mb-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="job-description-list mb-2">
                                    <h4>Education</h4>
                                    <ul className="list-group ps-3">
                                        <li>Cambridge University(2001-2004)</li>
                                        <li>Design at University of Michigan(2004 - 2008)</li>
                                        <li>Institute of Technology(2013 - 2017)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="job-description-list mb-2">
                                    <h4>Awards &amp; Certificates</h4>
                                    <ul className="list-group ps-3">
                                        <li>Certified in Learning and Performance (CPLP)</li>
                                        <li>Best Design Awards 2021</li>
                                        <li>Perfect Attendance Programs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="job-single-title">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-6">
                                <div className="social-links">
                                    <ul>
                                        <li>Share This:</li>
                                        <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 text-end">
                                <div className="desc-btn d-flex align-items-center float-end">
                                    <a href="#" className="job-btn btn1 me-2">Hire Now</a>
                                    <a href="#" className="job-btn1 btn1">Save</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="job-list border-t mt-3 pt-4">
                        <h4>Work History</h4>
                        <div className="job-card border-all p-4 pb-2 rounded bg-white position-relative mb-4">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-6 mb-2">
                                    <div className="company-pro d-flex align-items-center">
                                        <div className="image-box bg-white box-shadow p-3 px-4 rounded d-inline-block"><i className="flaticon-worker fs-2"></i></div>
                                        <div className="company-info ms-3">
                                            <h5 className="mb-0"><a className="name-job theme" href="employer-singles.html">AB Marketer LTD</a></h5>
                                            <small>California 125, US</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 mb-2">
                                    <h4 className="mb-1"><a href="job-single.html">Digital Marketor</a></h4>
                                    <ul className="job-list mb-2">
                                        <li className="job-cats small">Fulltime |</li>
                                        <li className="job-cats small">Senior |</li>
                                        <li className="job-cats small">Senior</li>
                                    </ul>
                                    <ul className="job-list mb-2">
                                        <li className="job-cats small rounded p-2 px-3 fulltime">Fulltime</li>
                                        <li className="job-cats small rounded p-2 px-3 private">Private</li>
                                        <li className="job-cats small rounded p-2 px-3 urgent">Urgent</li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 mb-2">
                                    <div className="job-sidecontent text-lg-end text-md-center">
                                        <a href="job-single.html" className="btn1 job-btn">View Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="job-card border-all p-4 pb-2 rounded bg-white position-relative mb-4">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-6 mb-2">
                                    <div className="company-pro d-flex align-items-center">
                                        <div className="image-box bg-white box-shadow p-3 px-4 rounded d-inline-block"><i className="flaticon-auction fs-2"></i></div>
                                        <div className="company-info ms-3">
                                            <h5 className="mb-0"><a className="name-job theme" href="employer-singles.html">Tourt Design LTD</a></h5>
                                            <small>California 125, US</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 mb-2">
                                    <h4 className="mb-1"><a href="job-single.html">Supervisor</a></h4>
                                    <ul className="job-list mb-2">
                                        <li className="job-cats small">Fulltime |</li>
                                        <li className="job-cats small">Senior |</li>
                                        <li className="job-cats small">Senior</li>
                                    </ul>
                                    <ul className="job-list mb-2">
                                        <li className="job-cats small rounded p-2 px-3 fulltime">Fulltime</li>
                                        <li className="job-cats small rounded p-2 px-3 private">Private</li>
                                        <li className="job-cats small rounded p-2 px-3 urgent">Urgent</li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 mb-2">
                                    <div className="job-sidecontent text-lg-end text-md-center">
                                        <a href="job-single.html" className="btn1 job-btn">View Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="job-card border-all p-4 pb-2 rounded bg-white position-relative mb-4">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-6 mb-2">
                                    <div className="company-pro d-flex align-items-center">
                                        <div className="image-box bg-white box-shadow p-3 px-4 rounded d-inline-block"><i className="flaticon-accounting fs-2"></i></div>
                                        <div className="company-info ms-3">
                                            <h5 className="mb-0"><a className="name-job theme" href="employer-singles.html">Designer Land</a></h5>
                                            <small>California 125, US</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 mb-2">
                                    <h4 className="mb-1"><a href="job-single.html">Full Stack Engineer</a></h4>
                                    <ul className="job-list mb-2">
                                        <li className="job-cats small">Fulltime |</li>
                                        <li className="job-cats small">Senior |</li>
                                        <li className="job-cats small">Senior</li>
                                    </ul>
                                    <ul className="job-list mb-2">
                                        <li className="job-cats small rounded p-2 px-3 fulltime">Fulltime</li>
                                        <li className="job-cats small rounded p-2 px-3 private">Private</li>
                                        <li className="job-cats small rounded p-2 px-3 urgent">Urgent</li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 mb-2">
                                    <div className="job-sidecontent text-lg-end text-md-center">
                                        <a href="job-single.html" className="btn1 job-btn">View Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full h-full lg:w-2/6 p-5 bg-[#e7eae2] dark:bg-[#484841] rounded-3xl">
                <div className="sidebar-list bg-grey p-4 rounded">
                    <div className="job-information bg-white p-4 rounded mb-4">
                        <h4 className="mb-2">Overview</h4>
                        <ul className="job-information-list">
                            <li className="d-block border-b mb-2 pb-2">
                                <i className="fa fa-calendar"></i> Date Posted
                                <span className="float-end"> 28th Jun</span>
                            </li>
                            <li className="d-block border-b mb-2 pb-2">
                                <i className="fa fa-redo"></i> Expiration Date
                                <span className="float-end"> 12th Dec</span>
                            </li>

                            <li className="d-block border-b mb-2 pb-2">
                                <i className="fa fa-map-marker"></i> Location
                                <span className="float-end"> Dallas, Texas</span>
                            </li>

                            <li className="d-block border-b mb-2 pb-2">
                                <i className="fa fa-money-check"></i> Salary
                                <span className="float-end">$35k - $45k</span>
                            </li>

                            <li className="d-block border-b mb-2 pb-2">
                                <i className="fa fa-layer-group"></i> Experience
                                <span className="float-end">2+ Years</span>
                            </li>

                            <li className="d-block">
                                <i className="fa fa-user-graduate"></i> Qualification
                                <span className="float-end">Master Degree</span>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-contact bg-white p-4 rounded">
                        <h4 className="small-heading">Contact Info</h4>
                        <Image src="/map.jpg" alt="contact" height={152} width={305} className="rounded-3xl mb-2 w-[305px] h-[152px]" />
                        <div className="info-address">
                            <ul>
                                <li className="d-block border-b mb-1 pb-1">
                                    <i className="fa fa-map-marker me-1"></i> Campbell Kent, Utah 53127 UnitedStates
                                </li>
                                <li className="d-block border-b mb-1 pb-1">
                                    <i className="fa fa-phone me-1"></i> (+91) - 540-025-124553
                                </li>
                                <li className="d-block border-b mb-1 pb-1">
                                    <i className="fa fa-envelope me-1"></i> contact@Jobee.com
                                </li>
                                <li className="d-block ">
                                    <i className="fa fa-clock me-1"></i> 10:00 - 18:00, Mon - Sat
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="job-btn btn1 mt-2 d-inline-block">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}