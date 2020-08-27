import React from 'react';
import './FlightCard.css';

const FlightCard = (props) => {
    const { flighDetails = {} } = props;
    const {
        flight_number = 0,
        mission_name = 'NA',
        links = {},
        launch_year = 'NA',
        mission_id = [],
        launch_success = 'NA',
        rocket = {}
    } = flighDetails;
    const { mission_patch_small = '' } = links;
    const { first_stage = {} } = rocket;
    const { cores: [{ land_success = 'NA' }] = [{}] } = first_stage;

    return (
        <div className="flight-container">
            <div className="flight-wrapper">
                <div className='image-wrapper'>
                    <img height='150px' src={mission_patch_small} alt='logo' />
                </div>
                <div>
                    <div className="mission-title area">
                        {mission_name + '  #' + flight_number}
                    </div>
                    <div className="mission-title area">
                        Mission id's
                    </div>
                    <div>
                        <ul>
                            {mission_id.map((id) =>
                                <li className='mission-content' style={{ textAlign: 'left' }}>
                                    {id}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="card-row area">
                        <div className="mission-title">Launch Year:</div>
                        <div className='mission-content'>  {launch_year}</div>
                    </div>
                    <div className="card-row area">
                        <div className="mission-title">Successful Launch</div>
                        <div className='mission-content'>{`  ${launch_success}`}</div>
                    </div>
                    <div className="card-row area">
                        <div className="mission-title">Successful Landing</div>
                        <div className='mission-content'>{`  ${land_success}`}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FlightCard;