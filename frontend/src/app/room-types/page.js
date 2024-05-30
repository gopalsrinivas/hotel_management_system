'use client';

import { useState, useEffect } from 'react';
import RoomType from "../components/RoomType";
import { useRouter, useSearchParams } from 'next/navigation';

async function getData(page) {
    const res = await fetch(`http://127.0.0.1:8000/api/room-types/?page=${page}`, { cache: 'no-store' });
    const data = await res.json();
    return data;
}

export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get('page')) || 1;
    const [roomTypes, setRoomTypes] = useState({ results: [], count: 0, next: null, previous: null });
    const [currentPage, setCurrentPage] = useState(page);

    useEffect(() => {
        async function fetchData() {
            const data = await getData(currentPage);
            setRoomTypes(data);
        }
        fetchData();
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        router.push(`/room-types/?page=${page}`, undefined, { shallow: true });
    };

    const totalPages = Math.ceil(roomTypes.count / 2);  // Assuming 2 items per page based on your API response

    return (
        <section className="container my-5">
            <div className="row text-center">
                <h3 className="my-4">Room Types ({roomTypes.count})</h3>
                <div className="row">
                    {
                        roomTypes.results && roomTypes.results.length > 0 ? (
                            roomTypes.results.map((item, index) => (
                                <RoomType item={item} key={index} />
                            ))
                        ) : (
                            <p>No room types available.</p>
                        )
                    }
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className={`page-item ${!roomTypes.previous && 'disabled'}`}>
                            <a className="page-link" onClick={() => handlePageChange(currentPage - 1)} href="#">
                                Previous
                            </a>
                        </li>
                        {
                            Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
                                <li className={`page-item ${currentPage === pageNumber && 'active'}`} key={pageNumber}>
                                    <a className="page-link" onClick={() => handlePageChange(pageNumber)} href="#">
                                        {pageNumber}
                                    </a>
                                </li>
                            ))
                        }
                        <li className={`page-item ${!roomTypes.next && 'disabled'}`}>
                            <a className="page-link" onClick={() => handlePageChange(currentPage + 1)} href="#">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
