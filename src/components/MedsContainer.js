import react from 'react';
import drugs from '../db.json';

const MedsContainer = props => {
    return (
        <div className="Meds-info">
            <p>Drug name: {props.drugFullName}</p>
            <p>Drug subclass:  {props.subClassName}</p>
            <p>Med Adherence Drug: {props.adherenceDrug}</p>
        </div>
    )
}