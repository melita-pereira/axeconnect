//React - to use .jsx features
//useEffect - runs effects like fetching data after component mounts
//useState - managing state within component
import React, {useEffect, useState} from 'react';
import { getNotices } from '../services/noticeService';

const Notices = () => {
    //notices - holds list of notices
    //setNotices - update notices state
    //initialize with empty array = no notices initally loaded
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    //empty array(at the very end) ensures this runs only once on mount
    //fetchNotices - async function, calls getNotices, waits for data and stores in notices variable, updates setNotices with data
    useEffect(() => {
        async function fetchNotices() {
            try {
                const noticesData = await getNotices();
                setNotices(noticesData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching notices:', error);
                setLoading(false);
            }
        };
        fetchNotices();
    }, []);

    //rendering notices
    return (
        <div className="notices-container">
            <h2>Notices and Events!</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                notices.map((notice) => (
                    <div key={notice.id} className='notice-card'>
                        <h3>{notice.title}</h3>
                        <p>{notice.description}</p>
                        <a className='details' href={`/notices/${notice.id}`}>View <Details></Details></a>
                    </div>
                ))
            )}
        </div>
    );
};

export default Notices;