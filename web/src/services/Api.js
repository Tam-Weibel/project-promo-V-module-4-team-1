const callToApi = (formData) => {
    return fetch ("https://project-promo-v-module-4-team-1.onrender.com/addProject", {
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
    return fetch ("https://project-promo-v-module-4-team-1.onrender.com/getprojects")
    .then((response) => response.json())
    .then((responseData) => {
        return (responseData);
    })
    .catch((error)=> {
        console.error("Error calling API:", error);
    });
};

const getTeam = () => {
    return fetch ("https://project-promo-v-module-4-team-1.onrender.com/getteam")
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
    return fetch ("https://project-promo-v-module-4-team-1.onrender.com/register", {
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
    return fetch ("https://project-promo-v-module-4-team-1.onrender.com/login", {
        method: "POST",
        body: JSON.stringify(logData),
        headers: {"Content-type": "application/json"},
    })
    .then((response) => response.json())
    .then((response) => {
        return (
            {success: response.success, 
            token: response.token});        
    })
    .catch((error)=> {
        console.error("Error calling API:", error);  
    });
};

const getProfile = (api_token) => {
    return fetch ("https://project-promo-v-module-4-team-1.onrender.com/profile", 
    {
     method: 'GET',
     headers: {
         'Content-Type': 'application/json',
         'Authorization': api_token
     }})
     .then(response => response.json())
     .then(response => {
       return response.profile.username;   
     })
 }

const logOut = () => {
    return fetch ("https://project-promo-v-module-4-team-1.onrender.com/logout",
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''
        }})
        .then(response => response.json())
        .then(response => { 
          return false ; 
    })
}

const object = {callToApi: callToApi, getProjects: getProjects, getTeam: getTeam, callToApiSign: callToApiSign, callToApiLog: callToApiLog, getProfile: getProfile, logOut:logOut} 

export default object;
