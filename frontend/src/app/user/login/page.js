import Link from "next/link";

export default function page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-8 offset-1">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <img src="/thumbs/1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8 col-12">
                            <h3 className="mb-3">Login</h3>
                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                    <label htmlFor="inputUserName" className="form-label">Mobile Number</label>
                                    <input type="number" className="form-control" placeholder="Mobile Number" />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label htmlFor="inputUserName" className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="******" />
                                </div>
                               
                                <div className="col-md-6 col-12 mb-3">
                                    <button className="btn btn-secondary">Reset</button>
                                    <button className="btn hms-bg-dark ms-3">Submit</button>
                                </div>
                                <p><Link href="/user/forgetpassword" className="text-danger">Forget Password</Link></p>
                                <p>If you are not registered user, <Link href="/user/signup">Signup here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}