import baseURL from "../API/baseURL";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDU5OTc4MDAsInN1YiI6IjYiLCJlbWFpbCI6ImVtaWx5LmRhdmlzQGV4YW1wbGUuY29tIiwibmFtZSI6IkVtaWx5IiwiaW1hZ2UiOiJ1c2VyLmpwZyIsInJvbGUiOlsiUk9MRV9HTE9CQUxfQURNSU4iXX0.U-_k20RsgeJdty84cDHv2SM1GdXzcg4LiQvgeFD3rf8';

const UseGetDataToken = async (url, params) => {
    // Check if the token exists
    if (!token) {
        throw new Error('No token provided');
    }

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return await baseURL.get(url, config);
};

export default UseGetDataToken;
