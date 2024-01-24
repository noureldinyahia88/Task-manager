// get PMs
export async function fetchPMs() {
    try {
      const response = await fetch('http://3.126.203.127:8084/managers', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDYxODA1NzcsInN1YiI6IjYiLCJlbWFpbCI6ImVtaWx5LmRhdmlzQGV4YW1wbGUuY29tIiwibmFtZSI6IkVtaWx5IiwiaW1hZ2UiOiJ1c2VyLmpwZyIsInJvbGUiOlsiUk9MRV9HTE9CQUxfQURNSU4iXX0.5OV8dTxxcNjoXQjoXvQU2Jwf83gqGryQTwTG_Xqe0gk'}`,
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
    try {

      //**edit1 */
    const formData = new FormData();
    formData.append('firstName', projectData.FirstName);
    formData.append('lastName', projectData.lastName);
    formData.append('email', projectData.email);
    formData.append('password', projectData.password);
    formData.append('confirmPass', projectData.confirmPass);
    formData.append('phoneNo', projectData.phoneNumber);

    //**edit1 */

      const response = await fetch(`http://3.126.203.127:8084/managers`, {
        method: 'POST',
        body: formData,
        // body: JSON.stringify(projectData),
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDYxODA1NzcsInN1YiI6IjYiLCJlbWFpbCI6ImVtaWx5LmRhdmlzQGV4YW1wbGUuY29tIiwibmFtZSI6IkVtaWx5IiwiaW1hZ2UiOiJ1c2VyLmpwZyIsInJvbGUiOlsiUk9MRV9HTE9CQUxfQURNSU4iXX0.5OV8dTxxcNjoXQjoXvQU2Jwf83gqGryQTwTG_Xqe0gk'}`, 
        },
      });
      
  
      if (!response.status === 200) {
        const error = new Error('An error occurred while creating the project');
        error.code = response.status;
        error.info = await response.json();
        console.error('Error:', error);
        throw error;
      }
  
      const { newproject } = await response.json();
  
  
      return newproject;
    } catch (error) {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
  


  // delete PMS

  export async function deletePMs({ id }) {
    const response = await fetch(`http://3.126.203.127:8084/managers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDYxOTEzMzQsInN1YiI6IjYiLCJlbWFpbCI6ImVtaWx5LmRhdmlzQGV4YW1wbGUuY29tIiwibmFtZSI6IkVtaWx5IiwiaW1hZ2UiOiJ1c2VyLmpwZyIsInJvbGUiOlsiUk9MRV9HTE9CQUxfQURNSU4iXX0.uhYPyZO3IIwuSxV402g-rdMBZAQeLErHrmBFDlYpX3k'}`, 
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
        'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDYxOTEzMzQsInN1YiI6IjYiLCJlbWFpbCI6ImVtaWx5LmRhdmlzQGV4YW1wbGUuY29tIiwibmFtZSI6IkVtaWx5IiwiaW1hZ2UiOiJ1c2VyLmpwZyIsInJvbGUiOlsiUk9MRV9HTE9CQUxfQURNSU4iXX0.uhYPyZO3IIwuSxV402g-rdMBZAQeLErHrmBFDlYpX3k'}`,
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