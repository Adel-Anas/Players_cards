import React from "react";
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl}) => {
    return(
        <div className = "card">
            <div className="img">
                <img src={ imageUrl } />
            </div>

            <div className = "body">
                <div className = "title">
                    {name}
                </div>

                <div className="team">
                    <p><span>Team :</span> {team}</p>
                </div>

                <div className = "team">
                <p><span>Nationality :</span> {nationality}</p>
                </div>

                <div className="team">
                <p><span>JerseyNumber :</span> {jerseyNumber}</p>
                </div>

                <div className="team">
                <p><span>Age :</span> {age}</p>
                </div>
            </div>

        </div>
    )
}

export default Player;