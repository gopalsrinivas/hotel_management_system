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
                            <h3 className="mb-3">Forget Password</h3>
                            <div className="row">
                                <div className="col-md-12 col-12 mb-3">
                                    <label htmlFor="Email" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <button className="btn hms-bg-dark">Submit</button>
                                </div>
                                <p>If you are not registered user, <Link href="/user/signup">Signup here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}