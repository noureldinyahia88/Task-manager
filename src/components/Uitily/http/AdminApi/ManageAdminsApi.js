// get Admins
export async function fetchAdmins() {
    try {
      const response = await fetch('http://3.126.203.127:8084/employees', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDYxOTEzMzQsInN1YiI6IjYiLCJlbWFpbCI6ImVtaWx5LmRhdmlzQGV4YW1wbGUuY29tIiwibmFtZSI6IkVtaWx5IiwiaW1hZ2UiOiJ1c2VyLmpwZyIsInJvbGUiOlsiUk9MRV9HTE9CQUxfQURNSU4iXX0.uhYPyZO3IIwuSxV402g-rdMBZAQeLErHrmBFDlYpX3k'}`,
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

// post admins
// export async function createNewProject(projectData) {
//   try {
//     const response = await fetch(`http://3.126.203.127:8084/projects`, {
//       method: 'POST',
//       body: JSON.stringify(projectData),
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDYxMTU0MzYsInN1YiI6IjYiLCJlbWFpbCI6ImVtaWx5LmRhdmlzQGV4YW1wbGUuY29tIiwibmFtZSI6IkVtaWx5IiwiaW1hZ2UiOiJ1c2VyLmpwZyIsInJvbGUiOlsiUk9MRV9HTE9CQUxfQURNSU4iXX0.6rLm2vqvePM52amb_CgLfBEf6gC5UU3Sk5hghIXGRps'}`, 
//       },
//     });
    

//     if (!response.status === 200) {
//       const error = new Error('An error occurred while creating the project');
//       error.code = response.status;
//       error.info = await response.json();
//       console.error('Error:', error);
//       throw error;
//     }

//     const { newproject } = await response.json();


//     return newproject;
//   } catch (error) {
//     console.error('Unexpected error:', error);
//     throw error;
//   }
// }


// delete admins
export async function deleteAdmin({ id }) {
  const response = await fetch(`http://3.126.203.127:8084/admins/${id}`, {
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

// update project
export async function updateAdmin({ id, event }) {
  const response = await fetch(`http://3.126.203.127:8084/projects/${id}`, {
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