import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [{ name: 'complete', value: 10},{name: 'incomplete', value: 12 }];
const COLORS = ['#8BA1DB', '#333'];


class CircleChart extends PureComponent {
    render() {
        return (
            <PieChart width={250} height={200} onMouseEnter={this.onPieEnter}>
            <text x={125} y={100} textAnchor="middle" dominantBaseline="middle">
                {data[1].value}
            </text>
            <text x={125} y={115} textAnchor="middle" dominantBaseline="middle">
                left
            </text>
            <Pie
            data={data} 
            cx={125} 
            cy={100} 
            startAngle={90}
            endAngle={-360}
            innerRadius={57}
            outerRadius={70} 
            >
            {
                data.map((entry, index) => <Cell stroke={COLORS[index % COLORS.length]} fill={COLORS[index % COLORS.length]}/>)
            }
            </Pie>
            <Tooltip />
        </PieChart>
        );
    }
}



export default CircleChart;