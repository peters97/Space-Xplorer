import React from 'react';
import truncateString from "../../util/TruncateString";


// @ts-ignore
const LaunchCard = ({launch}) => {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/4 flex mb-4 px-2">
            <div className="flex-1 rounded bg-white shadow-lg">
                <div className="p-10">
                    <h3 className="mb-2 text-xl font-bold text-blue-600">{launch.mission_name}</h3>
                    <p className="text-gray-700 font-mono">{truncateString(launch.details, 20)}</p>
                </div>

            </div>
        </div>

    );
}

export default LaunchCard;