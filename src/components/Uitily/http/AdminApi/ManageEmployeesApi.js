// get employees
export async function fetchEmployees() {
    try {
      const response = await fetch('http://3.126.203.127:8084/employees', {
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
  

  // delete Project

  export async function deleteEmployee({ id }) {
    const response = await fetch(`http://3.126.203.127:8084/employees/${id}`, {
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