// get employees
export async function fetchEmployees() {
    try {
      const response = await fetch('http://3.126.203.127:8084/employees', {
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
  

  // delete Project

  export async function deleteEmployee({ id }) {
    const response = await fetch(`http://3.126.203.127:8084/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDYxODA1NzcsInN1YiI6IjYiLCJlbWFpbCI6ImVtaWx5LmRhdmlzQGV4YW1wbGUuY29tIiwibmFtZSI6IkVtaWx5IiwiaW1hZ2UiOiJ1c2VyLmpwZyIsInJvbGUiOlsiUk9MRV9HTE9CQUxfQURNSU4iXX0.5OV8dTxxcNjoXQjoXvQU2Jwf83gqGryQTwTG_Xqe0gk'}`, 
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