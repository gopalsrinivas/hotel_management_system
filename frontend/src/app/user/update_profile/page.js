import Link from "next/link";
import DashboardSideMenu from "@/app/user/DashboardSideMenu";

export default function page() {
    return (
        <>
            <section className="container my-5">
                <div className="row">
                    <div className="col-md-2 col-12">
                        <DashboardSideMenu />
                    </div>

                    <div className="col-md-9 col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Profile Update</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-12 mb-3">
                                        <img src="/thumbs/1.png" className="img-fluid" alt="" width={100} />
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <label htmlFor="inputfirstname" className="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <label htmlFor="inputLastname" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <label htmlFor="inputUserName" className="form-label">Username</label>
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <label htmlFor="inputUserName" className="form-label">Mobile Number</label>
                                        <input type="number" className="form-control" placeholder="Mobile Number" />
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <label htmlFor="inputUserName" className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-3">
                                            <button className="btn btn-secondary">Reset</button>
                                            <button className="btn hms-bg-dark ms-3">Submit</button>
                                        </div>
                                    </div>
                                    <p>If you want to change your password, <Link href="/user/change_password">Change Password here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}