import {useState, useEffect} from 'react';

export const DIALECTIC_ROUTE = "/dialectic";
const API_URL = "http://localhost:8080";

const defaultHeaders =  {
    "Content-Type": "application/json",
};

export const postFetch = async (route, payload={}, opHeaders={}) => {
    const url = `${API_URL}${route}`;
    const request = {
        method: 'POST',
        mode: "cors",
        credentials: "same-origin",
        headers: {...defaultHeaders, opHeaders},
        body: JSON.stringify(payload),

    }
    return await fetch(url, request);
}

export const useFetch = (route, method='GET') => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      const url = `${API_URL}${route}`;
      const HEADERS = {
        method,
        mode: "cors",
        credentials: "same-origin",
        headers: {}
      }
      setLoading(true);
      const res = fetch(url, method === 'GET' ? {} : HEADERS)
      .then((res) => {
        return res.json()
      }).then((json) => {
        console.log(json)
        setData(json)
        setLoading(false);
      })
    }, []);
    return [data, loading]
}