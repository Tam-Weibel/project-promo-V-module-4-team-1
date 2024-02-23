const callToApi = (formData) => {
    return fetch ("http://localhost:5001/addProject", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {"Content-type": "application/json"},
    })
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
        return (responseData);
    
    })
    .catch((error)=> {
        console.error("Error calling API:", error);

        formData = {
            name: formData.name.value,
            slogan: formData.slogan.value,
            technologies: formData.technologies.value,
            demo: formData.demo.value,
            repo: formData. repo.value,
            desc: formData.desc.value,
            autor: formData.autor.value,
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
