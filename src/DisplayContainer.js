import React from 'react'
import Table from './Table'
import Chart from './BarChart'
const DisplayContainer=(props)=>{
    const {csvData}=props
    return (
        <div className='container mt-5'>
            <section>
                <div className='row'>
                    <div className='col-lg-6 col-sm-6'>
                        <Table csvData={csvData} />
                    </div>
                    <div className='col-lg-6 col-sm-6'>
                        <Chart csvData={csvData} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DisplayContainer