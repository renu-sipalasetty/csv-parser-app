import React, { useState } from 'react'
import Papa from 'papaparse'
const Upload=(props)=>{
    const {parsedData}=props
    const [csvFile,setCsvFile]=useState({})
    const [error,setError]=useState(false)
    const handleFile=(e)=>{
        const res=e.target.files[0]

        if(res === undefined){
            setCsvFile({})
        }
        else{
            setCsvFile(res)
            setError(false)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(csvFile.name===undefined){
            setError(true)
        }
        else{
            Papa.parse(csvFile,{
                header:true,
                dynamicTyping:true,
                complete:(res)=>{
                    console.log('parsed data',res.data)
                    parsedData(res.data)
                    setError(false)
                }
            })
        }
        setCsvFile({})
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='form-group ml-2 mt-5'>
                    <input 
                        type='file'
                        className='form-control-file'
                        accept='.csv,.xlsx,.xls'
                        onChange={handleFile}
                    />
                    <input
                        type='submit'
                        className='btn btn-primary text-capitalize bg-primary'
                    />
                    {error && <h4 className='text-danger text-capitalize'>Upload your file</h4>}
            </form>
        </div>
    )
}

export default Upload