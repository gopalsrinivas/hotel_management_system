import BarChart from "../BarChart";
import { Chart } from "chart.js/auto";
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
                        <h5 className="mb-4">Dashboard</h5>
                        <div className="row">
                            <div className="col-6 text-center">
                                <div className="card">
                                    <h4 className="card-header">Total Booking</h4>
                                    <div className="card-body">
                                        <Link href="#">123</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 text-center">
                                <div className="card">
                                    <h4 className="card-header">Total Payment</h4>
                                    <div className="card-body">
                                        <Link href="#">Rs. 25000 /-</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chart start */}
                        <div className="row my-5">
                            <div className="col-12" id="paymentChart">
                                <BarChart />
                            </div>
                        </div>
                        {/* Chart end */}
                    </div>
                </div>
            </section>
        </>
    );
}