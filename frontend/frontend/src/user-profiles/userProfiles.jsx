import axios from "axios"
import { useCallback, useEffect, useState } from "react"

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
                <h1>{userProfile.username}</h1>
                <p>{userProfile.userProfileId}</p>
            </div>
        })

    )
};

export default Userprofiles;