import { useState } from 'react';
import { apiPaths, endpointMethods } from '../Env/apiPaths';

const useFetch = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)

    const fetchdata = async (body, endpoint, queryParams) => {
        setError(null);
        setLoading(true);
        let finalEndpoint = apiPaths[endpoint];
        if (queryParams){
            finalEndpoint = apiPaths[endpoint].concat(queryParams)
        }
        //console.log(finalEndpoint)
        //console.log(body ? ( pdfs ? body : JSON.stringify(body)):null)
        try {
        const response = await fetch(finalEndpoint, {
            method: endpointMethods[endpoint],
            headers: {
            'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : null,
        });

        if (response.ok) {
            //const data = ;
            setData(await response.json());
            //console.log(data)
        } else {
            console.log(response)
            setError(response);
        }
        } catch (error) {
            console.error('Error:', error);
            setError('Error al realizar la solicitud');
        } finally {
            setLoading(false);
        }
  };

  return { data, loading, error, fetchdata };
};

export default useFetch;
