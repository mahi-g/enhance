import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'reading', complete: 40, incomplete: 30, amt: 24,
  },
  {
    name: 'cleaning', complete: 5, incomplete: 0, amt: 22,
  },
  {
    name: 'exercise', complete: 30, incomplete: 18, amt: 22,
  },
  {
    name: 'hobbies', complete: 25, incomplete: 20, amt: 20,
  },
  {
    name: 'organization', complete: 10, incomplete: 4, amt: 21,
  },
  {
    name: 'self-care', complete: 23, incomplete: 3, amt: 25,
  },
];

export default class CategoryBarChart extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            width: 250,
            height: 220
        }
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
        width={this.state.width}
        height={this.state.height}
        data={data}
        margin={{
          top: 30, right: 0, left: 15, bottom: 10,
        }}
        layout="vertical"
        barSize={8}
      >
        <XAxis type="number" tick={{fontSize: 10}} padding={{ top: 10 }} /> 
        <YAxis type="category" tick={{fontSize: 10}} dataKey="name" scale="point"/>
        <Tooltip />
        <Legend iconSize={10} wrapperStyle={{ marginLeft: "20px" }} />
        <Bar dataKey="complete" fill="#0088FE" stackId="stack"/>
        <Bar dataKey="incomplete" fill="#eee" stackId="stack"/>

      </BarChart>
    );
  }
}

//radius={[0, 5, 5, 0]}
