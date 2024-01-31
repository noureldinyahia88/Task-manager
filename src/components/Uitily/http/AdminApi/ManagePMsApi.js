// get PMs
export async function fetchPMs() {
    try {
      const response = await fetch('http://3.126.203.127:8084/managers', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
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

  //post pms
  export async function createNewPMs(projectData) {
    // try {
    //   const formData = new FormData();
    //   formData.append('firstName', projectData.firstNameUser);
    //   formData.append('lastName', projectData.lastNameUser);
    //   formData.append('email', projectData.emailUser);
    //   formData.append('password', projectData.passwordUser);
    //   formData.append('phoneNo', projectData.phoneNumberUser);

    //   const response = await fetch(`http://3.126.203.127:8084/managers`, {
    //     method: 'POST',
    //     body: formData,
    //     headers: {
    //       // 'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${localStorage.getItem('token')}`, 
    //     },
    //   });
      
    //   if (!response.status === 200) {
    //     const error = new Error('An error occurred while creating the project');
    //     error.code = response.status;
    //     error.info = await response.json();
    //     console.error('Error:', error);
    //     throw error;
    //   }
    //   const { newproject } = await response.json();
    //   return newproject;
    // } catch (error) {
    //   console.error('Unexpected error:', error);
    //   throw error;
    // }
  }



  // delete PMS

  export async function deletePMs({ id }) {
    const response = await fetch(`http://3.126.203.127:8084/managers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
      },
    });
  
    if (!response.ok) {
      const error = new Error('An error occurred while deleting the event');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    return response.json();
  }

  // update PMs
  export async function updateManager({ id, event }) {
    const response = await fetch(`http://3.126.203.127:8084/managers/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ event }),
      headers: {
        'Content-Type': 'application/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
  
    if (!response.ok) {
      const error = new Error('An error occurred while updating the event');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    return response.json();
  }