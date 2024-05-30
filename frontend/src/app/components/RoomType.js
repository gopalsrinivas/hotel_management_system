import Link from "next/link";

export default function RoomType({ item }) {
    return (
        <div className="col-4 my-3">
            <div className="card">
                <Link href={`/room-types/${item.title}`} passHref>
                    <img src="thumbs/1.png" className="card-img-top" alt={item.title} />
                </Link>
                <div className="card-body hms-bg-dark text-white">
                    <h5 className="card-title">
                        <Link href={`/room-types/${item.title}`} className="text-white">
                            {item.title}
                        </Link>
                    </h5>
                </div>
            </div>
        </div>
    );
}
