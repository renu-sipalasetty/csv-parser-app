import React,{useState} from 'react'
import Upload from './Upload'
import Report from './Report '
import DisplayContainer from './DisplayContainer'
const CsvContainer=(props)=>{
    const [csvData,setCsvData]=useState([])
    const parsedData=(data)=>{
        setCsvData(data)
    }
    return (
        <div >
            <Upload parsedData={parsedData} />
            
            {csvData.length>0 && <hr/>}

            {csvData.length>0 && <Report csvData={csvData}/>}

            {csvData.length>0 && <DisplayContainer csvData={csvData}/>}

        </div>
    )
}

export default CsvContainer