import React, { useState } from 'react';

const User = () => {
    const [showUser, setShowUser] = useState(false)
    const storeChange = () => {
       setShowUser(!showUser)
       
    };
    console.log(showUser)
    return (
        <div>
            <div className="info-check">
                <input
                    type="checkbox"
                    onChange={storeChange}
                    className="checkboxUser"
                    checked={showUser}
                />
                <label className="checkbox-label">Show Info</label>

            </div>

        </div>
    );
}

export default User;