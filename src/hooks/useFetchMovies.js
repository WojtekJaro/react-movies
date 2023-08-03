import { useToast } from "@chakra-ui/react";
import axios from "axios"
import { useEffect, useState } from "react";


const useFetchMovies = (query) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const toast = useToast()

    useEffect(()=>{
       getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getData = async () => {

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.REACT_APP_API_KEY}`);
            console.log(response)
            setData(response.data.results)
        } catch (error) {
            console.log(error)
            setError("Wystąpił błąd")
            toast({
                title: 'Nie udało się pobrać danych',
                description: "Skontaktuj się z administratorem strony",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        } finally {
            setLoading(false)
        }

  
    }

    return {data, loading, error}


}

export default useFetchMovies