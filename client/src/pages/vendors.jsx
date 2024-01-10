import React, { useEffect, useState } from 'react'
import Vendor from '../components/Vendor';

const vendors = () => {

    const [vendor,setVendor] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error,setError]= useState(false);

    useEffect(()=>{
        const fetchVendors = async()=>{
            try {
                setLoading(true);
                setError(false);
                const res = await fetch('/api/vendor/get');
                const data = await res.json();
                if(data.success === false){
                    setError(true);
                    setLoading(false);
                }
                setVendor(data);
                setError(false);
                setLoading(false);
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }
        fetchVendors();
    },[])

    console.log(vendor);

  return (
    <div className='p-4 flex flex-wrap gap-4 justify-center'>
       {
        vendor.map((vendor)=>(
            <Vendor vendor={vendor} />
        ))
       }
    </div>
  )
}

export default vendors