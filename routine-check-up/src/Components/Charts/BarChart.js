import React, { PureComponent } from 'react';
import {
  BarChart, 
  Bar, 
  Tooltip, 
  XAxis, 
  YAxis
} from 'recharts';

const data = [
  {
    name: 'reading', complete: 40, incomplete: 30
  },
  {
    name: 'cleaning', complete: 5, incomplete: 0
  },
  {
    name: 'exercise', complete: 30, incomplete: 18
  },
  {
    name: 'hobbies', complete: 25, incomplete: 20
  },
  {
    name: 'organization', complete: 10, incomplete: 4
  },
  {
    name: 'self-care', complete: 23, incomplete: 3
  },
];


export default class CategoryBarChart extends PureComponent {
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
    componentDidMount(){
        const mobile = document.body.clientWidth <= 1260;
        if(mobile){
            this.setState({width: 280, height: 210});
        }
    }
  render() {
    return (
      <BarChart
        width={300}
        height={270}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
        barSize={15}
      >
        <XAxis 
          dataKey="name" 
          type="category" 
          tick={{fontSize: 12}} 
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
    );

  }
}

//radius={[0, 5, 5, 0]}
