import React, { useEffect, useState } from 'react';
import './DashBoard.css';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import axios from 'axios';

const DashBoard = () => {

    const [months, setMonth] = useState([]);

    useEffect(() => {
        axios.get('data.json')
            .then(data => setMonth(data.data))
    }, [])
    return (
        <div className='dashboard'>


            <div className='bar-chart'>
                <BarChart
                    width={500}
                    height={300}
                    data={months}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>

            <div className='areaChart'>
                <AreaChart
                    width={500}
                    height={400}
                    data={months}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    
                </AreaChart>
            </div>

        </div>
    );
};

export default DashBoard;