import Link from "next/link";

export default function page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-8 offset-2">
                    <h3 className="my-4"> Checkout</h3>
                    <table className="table table-bordered  table-striped">
                        <tbody>
                            <tr>
                                <th>Total Guests</th>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th>Total Rooms</th>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th>Check-In Date</th>
                                <td>20-04-2024</td>
                            </tr>
                            <tr>
                                <th>Check-Out Date</th>
                                <td>30-04-2024</td>
                            </tr>
                            <tr>
                                <th>Charges</th>
                                <td>1500 X 10 = 15000 /-</td>
                            </tr>
                            <tr>
                                <th>Tax</th>
                                <td>10 %</td>
                            </tr>
                            <tr>
                                <th>Total Amount</th>
                                <td>15000 + 1500 =16500</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="text-danger text-center">
                                    * One Govt.ID required when check-in
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="text-center">
                                    <Link href=''>Terms & Conditions</Link>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="text-center">
                                    <button className="btn btn-secondary">Cancel</button>
                                    <Link href="/payment/success" className="btn hms-bg-dark ms-2">Pay Now (Success)</Link>
                                    <Link href="/payment/failure" className="btn btn-danger ms-2">Pay Now (Failure)</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}