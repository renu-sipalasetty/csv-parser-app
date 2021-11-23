import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
const Chart=(props)=>{
    const {csvData}=props
    return (
        <div>
            <BarChart
                width={500}
                height={350}
                data={csvData}
                margin={{
                    top: 0,
                    right: 30,
                    left: 20,
                    bottom:0,
                }}
                barSize={20}
            >
                <XAxis
                        dataKey='Name (Original Name)'
                        scale='point'
                        padding={{ left: 10, right: 5 }}
                />
                <YAxis/>
                <Tooltip/>
                <Legend />
                <CartesianGrid strokeDasharray='1 1' />
                <Bar dataKey='Total Duration (Minutes)' fill='#6699CC' background={{ fill: '#fff' }} style={{marginTop:'-50px'}} />
            </BarChart>
        </div>
    )
}
export default Chart