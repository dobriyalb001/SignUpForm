export const RegisterURL=async(formdata)=>{
   try{ const register= await fetch ('https://test-prod-api.dubuddy.in/auth/signupStudent',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formdata),
    })

    console.log(register);
        if (!register.ok) {
          throw new Error('Network response was not ok');
        }
        return register.json();
    }
    catch(err)
    {
        console.log('error',err.message)
    }

}



