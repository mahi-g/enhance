import React, { PureComponent } from 'react';
import {
  BarChart, 
  Bar, 
  Tooltip, 
  XAxis, 
  YAxis
} from 'recharts';
import styled from 'styled-components';

const data = [
  {
    name: 'reading', complete: 40, incomplete: 30
  },
  {
    name: 'cleaning', complete: 10, incomplete: 20
  },
  {
    name: 'exercise', complete: 30, incomplete: 18
  },
  {
    name: 'hobbies', complete: 25, incomplete: 20
  },
  {
    name: 'work', complete: 10, incomplete: 22
  },
  {
    name: 'self-care', complete: 23, incomplete: 30
  },
];

const Container = styled.div`
    margin: 12px 0;
    background: #C8E3D9FF;
    border-radius: 10px;
    width: 225px;
    height: 225px; 
`;

class CategoryBarChart extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            width: 270,
            height: 250
        }
        this.getMaxRange = this.getMaxRange.bind(this);
    }

    getMaxRange(){
      let max = 0;
      let sum = 0;
      data.forEach(entry => {
        sum = entry['incomplete']+entry['complete'];
        if(max < sum ) max = sum;
      });
      return max;
    }

    // mobile: 280, 210
    // web: 250
    render() {
      return (
        <Container>
          <BarChart
            width={220}
            height={220}
            data={data}
            margin={
              {
                top: 35, right: 35, left: -25, bottom: 10,
              }
            }
            barSize={13}
          >
            <XAxis 
              dataKey="name" 
              type="category" 
              tick={{fontSize: 10}} 
              angle={0} 
              textAnchor="center"
              interval = {1}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis  
              tick={false}
              domain={[0, this.getMaxRange]}
            />
            <Tooltip /> 
            <Bar 
              dataKey="complete" 
              stackId="a" 
              fill="#333333" 
              radius={[0, 0, 10, 10]}
            />
            <Bar 
              dataKey="incomplete" 
              stackId="a" 
              fill="#8BA1DB" 
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </Container>
      );

  }
}

//radius={[0, 5, 5, 0]}

export default CategoryBarChart;