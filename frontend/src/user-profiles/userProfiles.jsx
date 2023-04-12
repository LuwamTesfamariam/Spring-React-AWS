import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import './userProfiles.css';

const Userprofiles = () => {
    const [userProfiles, setuserProfiles] = useState([]);

    const fetchUserprofiles = () => {
        axios.get("http://localhost:8080/api/v1/user-profiles")
            .then(response => {
                console.log(response);
                setuserProfiles(response.data);
            })
    }

    useEffect(() => {
        fetchUserprofiles();
    }, [])

    return (

        userProfiles.map((userProfile, index) => {
            return <div key={index} >
                {userProfile.userProfileId ?
                    <img src={`http://localhost:8080/api/v1/user-profiles/${userProfile.userProdileId}/image/download`} />
                    : null}

                <br />
                <br />
                <h1>{userProfile.username}</h1>
                <p>{userProfile.userProfileId}</p>
                <Dropzone {...userProfile} /> {/* same as userProdileId = {userProfile.userProfileId} */}
                <br />
            </div>
        })

    )
};

export default Userprofiles;