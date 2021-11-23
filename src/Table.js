import React from 'react'

const Table=(props)=>{
    const {csvData}=props
    return (
        <div>
            <table className='table table-bordered text-center table-striped table-hover '>
                <thead>
                    <tr className='text-capitalize'>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Duration (in minutes)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        csvData.map((person,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{person['Name (Original Name)']}</td>
                                    <td>{person['User Email']}</td>
                                    <td>{person['Total Duration (Minutes)']}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>            
        </div>
    )
}
export default Table