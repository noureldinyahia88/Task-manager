export async function fetchEvent() {
    const respone = await fetch('http://3.126.203.127:8084/auth/login')

    if(!Response.ok){
        const error = new Error('An Error occurred while fetching the data');
        error.code = respone.status;
        error.info = await respone.json();
        throw error;
    }

    const { data } = await respone.json();

    return data;
}