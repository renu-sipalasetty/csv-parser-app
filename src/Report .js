import React from 'react'

const Report=(props)=>{
    const {csvData}=props
    const findHost=()=>{
        const res=csvData.filter((ele)=>{
            return ele['Guest']=== 'No'
        })
        return res[0]['Name (Original Name)']
    }
    const findMinutes=()=>{
        let duration=csvData[0]['Total Duration (Minutes)']
        const hours= Math.floor(duration/60)
        const minutes=Math.floor(duration%60)
        return ` ${hours}hour , ${minutes} minutes `
    }
    return (
        <div className='mb-4'>
            <h1 className='text-capitalized text-center text-danger'>Report</h1>
            <h4>Host Name - {findHost()}</h4>
            <h4>Total Participants - {csvData.length}</h4>
            <h4>Duration - {csvData[0]['Total Duration (Minutes)']} minutes ({findMinutes()}) </h4>
        </div>
    )
}

export default Report