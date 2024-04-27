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
                        <h5 className="mb-4">Payment Logs</h5>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                                <thead className="hms-bg-normal">
                                    <tr>
                                        <th>S.No</th>
                                        <th>Payment Date</th>
                                        <th>Booking Details</th>
                                        <th>Invoice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>20-4-2024</td>
                                        <td>
                                            <p className="m-0 fw-bold hms-color">2 Rooms</p>
                                            <p className="m-0 fw-bold hms-color">20-04-2024 To 25-04-2024</p>
                                            <p className="m-0 fw-bold hms-color">2 Guest</p>
                                        </td>
                                        <td>
                                            <p className="m-0 fw-bold hms-color">
                                                <Link href='#'>HMS-001</Link>
                                            </p>
                                            <p className="m-0 fw-bold hms-color">RS. 15,000 /-</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}