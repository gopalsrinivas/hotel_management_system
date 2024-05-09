import Link from "next/link"

export default function page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-md-5 col-12">Address</div>
                <div className="col-md-7 col-12">
                    <div className="card">
                        <h5 className="card-header hms-bg-normal text-center">Contact Us</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="name" id="name" className="form-control" placeholder="Enter Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label">Email</label>
                                <input type="email" name="email" id="email" className="form-control" placeholder="Enter Email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                <input type="number" name="mobile" id="mobile" className="form-control" placeholder="Enter Mobile" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" id="message" className="form-control" placeholder="Enter Message"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Captcha</label>
                                <input name="captcha" id="captcha" className="form-control" />
                            </div>
                            <Link href="#" className="btn btn-secondary">Reset</Link>
                            <Link href="#" className="btn hms-bg-dark ms-2">Submit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}