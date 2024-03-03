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

const getTeam = () => {
    return fetch ("http://localhost:5001/getteam")
    .then((response) => response.json())
    .then((responseData) => {
        return (responseData);
    })
    .catch((error)=> {
        console.error("Error calling API:", error);
    });
};

//SignIn y LogIn



const callToApiSign = (signInData) => {
    return fetch ("http://localhost:5001/register", {
        method: "POST",
        body: JSON.stringify(signInData),
        headers: {"Content-type": "application/json"},
    })
    .then((response) => response.json())
    .then((response) => {
        return (response);
    
    })
    .catch((error)=> {
        console.error("Error calling API:", error);
  
    });
};

const callToApiLog = (logData) => {
    return fetch ("http://localhost:5001/login", {
        method: "POST",
        body: JSON.stringify(logData),
        headers: {"Content-type": "application/json"},
    })
    .then((response) => response.json())
    .then((response) => {
        console.log(response.token);
        console.log(response.success);
        return (
            {success: response.success, 
            token: response.token});        
    })
    .catch((error)=> {
        console.error("Error calling API:", error);  
    });
};

const getProfile = (api_token) => {
    return fetch ("http://localhost:5001/profile", 
    {
     method: 'GET',
     headers: {
         'Content-Type': 'application/json',
         'Authorization': api_token
     }})
     .then(response => response.json())
     .then(response => {
        console.log('Server response:', response); 
       return response.profile.username;   
     })
 }

const logOut = () => {
    return fetch ("http://localhost:5001/logout",
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''
        }})
        .then(response => response.json())
        .then(response => {
           console.log('Server response:', response); 
           
          return false ; 
    })
}

const object = {callToApi: callToApi, getProjects: getProjects, getTeam: getTeam, callToApiSign: callToApiSign, callToApiLog: callToApiLog, getProfile: getProfile, logOut:logOut} 

export default object;
