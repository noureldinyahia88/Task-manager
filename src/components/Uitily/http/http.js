import UseGetDataToken from "./hooks/useGetData";

//get projects data
// export async function fetchEvent() {
//     try {
//         const url = 'managers/3/projects';
//         const response = await UseGetDataToken(url);

//         if (!response.status === 200) {
//             const error = new Error('An error occurred while fetching the data');

//             throw error;
//         }


//         return response.json();;
//     } catch (error) {
//         // console.error(error);
//         throw error; 
//     }
// }

export async function fetchEvent() {
  try {
    const response = await fetch('http://3.126.203.127:8084/projects', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDU5OTc4MDAsInN1YiI6IjYiLCJlbWFpbCI6ImVtaWx5LmRhdmlzQGV4YW1wbGUuY29tIiwibmFtZSI6IkVtaWx5IiwiaW1hZ2UiOiJ1c2VyLmpwZyIsInJvbGUiOlsiUk9MRV9HTE9CQUxfQURNSU4iXX0.U-_k20RsgeJdty84cDHv2SM1GdXzcg4LiQvgeFD3rf8'}`,
      },
    });

    if (!response.ok) {
      // Handle non-successful responses here
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Handle other errors here
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
