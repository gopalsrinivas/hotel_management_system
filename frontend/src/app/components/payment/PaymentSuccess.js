import Link from "next/link";

export default function PaymentSuccess() {
    return (
        <>
            <h3 className="text-success my-4"><i className='fa fa-check-circle'></i>Thank you</h3>
            <h5>Invoice: <Link href="#">HMS-001</Link></h5>
            <p className="my-4">
                <Link href='/' className="btn btn-dark">Home</Link>
                <Link href='/' className="btn hms-bg-dark ms-3">Dashboard</Link>
            </p>
        </>
    );
}