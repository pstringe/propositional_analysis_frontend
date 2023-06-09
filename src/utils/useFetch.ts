import {useState, useEffect} from 'react';

export const DIALECTIC_ROUTE = "/dialectic";
export const PROPOSITIONS_ROUTE = '/proposition'

const API_URL = "http://localhost:8080";

export const paramaterizeRoute = () => {

}

export const postFetch = async (route: string, payload={}, opHeaders={}) => {
    const url = `${API_URL}${route}`;
    const requsetHeaders: HeadersInit = new Headers();
    requsetHeaders.set("Content-Type", 'application/json');
  
    const request: RequestInit = {
        method: 'POST',
        mode: "cors",
        credentials: "same-origin",
        headers: requsetHeaders,
        body: JSON.stringify(payload),

    }
    return await fetch(url, request);
}

export const useFetch = <Type>(route: string, method='GET') => {
    const [data, setData] = useState<Type[]>([]);
    const [refreshToggle, setResfreshToggle] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const refresh = () : void => {
      setResfreshToggle(!refreshToggle);
    }

    useEffect(() => {
      const url = `${API_URL}${route}`;
      const HEADERS = {
        method,
        mode: "cors",
        credentials: "same-origin",
        headers: {}
      }
      setLoading(true);
      const res = fetch(url)
      .then((res) => {
        return res.json()
      }).then((json) => {
        console.log(json)
        setData(json)
        setLoading(false);
      })
    }, [refreshToggle]);

    const res: [Type | Type[], boolean, () => void] = [data, loading, refresh]
    return res;
}