import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class Chartbar extends Components {

    state = {
        chartData: {
            
        }
    }

    render() {
        return (
            <div className="chartbar">
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{ maintainAspectRatio: false }}
                />
            </div>

        )
    }
}

export default Chartbar;