import { useState } from 'react';
import { useSelector } from 'react-redux';
import { jobsByStatus } from '../../redux/jobs/jobs.selector';

import Circle from '../UI/Icons/Circle/Circle';
import ArrowRight from '../UI/Icons/ArrowRight';
import ArrowLeft from '../UI/Icons/ArrowLeft';

import './StatusList.scss';

const StatusList = () => {
    const jobsStatusCount = useSelector(jobsByStatus);
    const [moveLeft, setMoveLeft] = useState(false);
    return (
        <div className="status__wrapper">
            <div className="status__ctrls">
                <button
                    className="status__ctrls--btn"
                    onClick={() => setMoveLeft(!moveLeft)}>
                    {
                        moveLeft ? (
                            <ArrowLeft />
                        ) : (
                            <ArrowRight />
                        )
                    }
                </button>
            </div>
            <ul className={`status__list ${moveLeft ? 'status__list--move-left' : ''}`}>
                {
                    jobsStatusCount && Object.values(jobsStatusCount).map((status, idx) => (
                        <li
                            key={`${status.name}-${idx}`}
                            className="status__item">
                            <Circle color={status.color} />
                            {status.name} <span>{status.count}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}
export default StatusList;
