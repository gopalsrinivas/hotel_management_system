import Link from "next/link";
import PaymentSuccess from "@/app/components/payment/PaymentSuccess";
import PaymentFailure from "@/app/components/payment/PaymentFailure";

export default function Page({params}) {
    //  console.log(params)
    const slug = params.slug

    return (
        <section className="container my-5 text-center">
            {
                slug=='success' && <PaymentSuccess />
            }

            {
                slug=='failure' && <PaymentFailure />
            }
        </section>
    );
}