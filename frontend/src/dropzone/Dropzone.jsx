
import axios from "axios";
import { useCallback } from "react";
import useDropzone from "react-dropzone";

const Dropzone = ({ userProdileId }) => {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        console.log(file);
        const formData = new FormData;
        formData.append("file", file);


        axios.post(`http://localhost:8080/api/v1/user-profiles/${userProdileId}/image/upload`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-date"
                }
            }
        ).then(() => {
            console.log("file uploaded successfully")
        }).catch(error => {
            console.log(error);
        })
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the image here ...</p> :
                    <p>Drag 'n' drop profile image, or click to select profile image</p>
            }
        </div>
    )
}

export default Dropzone;