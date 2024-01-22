import UseGetDataToken from "./hooks/useGetData";

// get projects data
export async function fetchEvent() {
    try {
        const url = 'managers/3/projects';
        const response = await UseGetDataToken(url);

        if (!response.ok) {
            const error = new Error('An error occurred while fetching the data');
            error.code = response.status;
            error.info = await response.json(); 
            throw error;
        }

        const { data } = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        // console.error(error);
        throw error; 
    }
}



export async function fetchToken(email, password) {

    const response = await fetch('http://3.126.203.127:8084/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email, 
        password: password
      }),
    });
  
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the token');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    const { token } = await response.json();
    // setToken(token);
    return token;
  }
