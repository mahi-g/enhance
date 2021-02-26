import React, { PureComponent } from 'react';
import { 
    PieChart,
    Pie, 
    Cell, 
    Tooltip 
} from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
    margin: 12px 0;
    background: #C8E3D9FF;
    border-radius: 10px;
    width: 225px;
    height: 225px; 
`;

const data = [{ name: 'complete', value: 10},{name: 'incomplete', value: 12 }];
const COLORS = ['#8BA1DB', '#333'];


class CircleChart extends PureComponent {
    render() {
        return (
            <Container>
                <PieChart width={250} height={250} onMouseEnter={this.onPieEnter}>
                    <text 
                        x={110} 
                        y={112} 
                        textAnchor="middle" 
                        dominantBaseline="middle">
                        {data[1].value}
                    </text>
                    <text 
                        x={110} 
                        y={130} 
                        textAnchor="middle" 
                        dominantBaseline="middle"
                    >
                        left
                    </text>
                    <Pie
                        data={data} 
                        cx={105} 
                        cy={112.5} 
                        startAngle={90}
                        endAngle={-360}
                        innerRadius={64}
                        outerRadius={75} 
                    >
                        { data.map((entry, index) => <Cell stroke={COLORS[index % COLORS.length]} fill={COLORS[index % COLORS.length]}/>) }
                    </Pie>
                    <Tooltip />
                </PieChart>
            </Container>
        );
    }
}



export default CircleChart;