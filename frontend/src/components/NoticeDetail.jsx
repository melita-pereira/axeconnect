import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {createEvent} from 'ics';
import '../styles/NoticeDetail.css';

const NoticeDetail = () => {
    const {id} = useParams();
    const [notice, setNotice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showCalendarOptions, setShowCalendarOptions] = useState(false);

    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/notices/${id}`);
                setNotice(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching notice details:', error);
                setLoading(false);
            }
        };
        fetchNotice();
    }, [id]);

    const generateICSFile = () => {
        const event = {
            title: notice.title,
            description: notice.description,
            start: [year, month, day, hour, minute],
            duration: {hours: 1},
        };

        createEvent(event, (error, value) => {
            if (error){
                console.error('Error creating ICS event:', error);
                return;
            }
            const blob = new Blob([value], {type: 'text/calendar;charset=utf-8'});
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${notice.title.replace(/\s+/g, '_')}.ics`;
            link.click();
        });
    };

    const handleAppleCalendar = () => {
        generateICSFile();
    };

    const handleOutlookCalendar = () => {
        generateICSFile();
    };

    const handleAddToCalendarClick = () => {
        setShowCalendarOptions(!showCalendarOptions);
    }

    return (
        <div className='notice-detail'>
            {loading ? (
                <p>Loading...</p>
            ) : notice ? (
                <div>
                    <h2>{notice.title}</h2>
                    <p>{notice.description}</p>
                    <button onClick={handleAddToCalendarClick}>Add to Calendar</button>
                    {showCalendarOptions && (
                        <div className='calendar-options'>
                            <button onClick={handleAppleCalendar}>Apple Calendar</button>
                            <button onClick={handleOutlookCalendar}>Outlook Calendar</button>
                        </div>
                    )}
                </div>
            ) : (
                <p>Notice not found.</p>
            )}
        </div>
    );
};

export default NoticeDetail;