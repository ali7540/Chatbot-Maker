export const signup=async ({email,password})=>{
    const response=await fetch("/api/auth/signup",{
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({email,password}),
        method:"POST"
    });
    if(!response.ok){
    
    }
    return await response.json();
};

export const login=async ({email,password})=>{
    const response=await fetch("/api/auth/login",{
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({email,password}),
        method:"POST"
    });
    if(!response.ok){

    }
    return await response.json();
};