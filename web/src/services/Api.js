const callToApi = (formData) => {
    return fetch ("http://localhost:5001/addProject", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {"Content-type": "application/json"},
    })
    .then((response) => response.json())
    .then((responseData) => {
        return (responseData);
    
    })
    .catch((error)=> {
        console.error("Error calling API:", error);

        formData = {
            namePj: formData.namePj.value,
            slogan: formData.slogan.value,
            technologies: formData.technologies.value,
            demoUrl: formData.demoUrl.value,
            gitUrl: formData.gitUrl.value,
            descriptionPj: formData.descriptionPj.value,
            nameAut: formData.nameAut.value,
            job: formData.job.value,
            image: formData.image.value,
            photo: formData.photo.value,
        };
    });
};

const getProjects = () => {
    return fetch ("http://localhost:5001/getprojects")
    .then((response) => response.json())
    .then((responseData) => {
        return (responseData);
    })
    .catch((error)=> {
        console.error("Error calling API:", error);
    });
};

const object = {callToApi: callToApi, getProjects: getProjects} 

export default object;
