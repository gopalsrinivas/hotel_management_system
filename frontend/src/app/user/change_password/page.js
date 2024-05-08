import Link from "next/link";
import DashboardSideMenu from "@/app/user/DashboardSideMenu";

export default function page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-md-2 col-12">
                    <DashboardSideMenu />
                </div>

                <div className="col-md-9 col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>Change Password</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                    <label htmlFor="oldpassword" className="form-label">Old Password</label>
                                    <input type="password" className="form-control" placeholder="old password" />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label htmlFor="newpassword" className="form-label">New Password</label>
                                    <input type="password" className="form-control" placeholder="New Password" />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Confirm Password" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                    <button className="btn btn-secondary">Reset</button>
                                    <button className="btn hms-bg-dark ms-3">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}