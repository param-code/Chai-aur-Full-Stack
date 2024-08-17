import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // const {products,err,loading,search} = customReactQuery('/api/products');
    const [products, setProducts] = useState([]);
    const [err,setErr] = useState(false);
    const [loading,setLoading] = useState(false);
    const [search,setSearch] = useState('Product 3');
    useEffect(() => {
        const controller = new AbortController();
        (async ()=>{
            try{
                setLoading(true);
                setErr(false);
                const response = await axios.get('/api/products?search='+search, {signal: controller.signal});
                console.log(response.data);
                setProducts(response.data);
                setLoading(false);
            }catch (err){
                if(axios.isCancel(err)){
                    console.log('Request cancelled',err.message);
                    return;
                }
                setErr(true);
                setLoading(false);
            }
        })()

        return () => {
            controller.abort();
        }
    }, [search]);
    if(err)return <h1>Something went Wrong</h1>;
    if(loading) return <h1>Loading...</h1>;

  return (
    <>
        <h1>Chai aur API</h1>
        <input type={'text'} placeholder={'Enter your product'} value={search} onChange={(e) => setSearch(e.target.value)}/>
        <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App;

const customReactQuery = (urlPath) => {

    // return {products,err,loading,search};
}