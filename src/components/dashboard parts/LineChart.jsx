import React from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    const savedData = JSON.parse(localStorage.getItem("chartData"));

    this.state = {
      options: {
        chart: {
          id: "line-chart",
        },
        xaxis: {
          categories: this.generateDaysOfWeek(),
        },
      },
      series: savedData ? savedData : this.generateData(),
    };
  }

  componentDidMount() {
    const currentDate = new Date();
    const savedDate = localStorage.getItem("chartDate");

    if (savedDate && savedDate === currentDate.toDateString()) {
      return;
    }

    this.updateData();
  }

  componentWillUnmount() {
    localStorage.setItem("chartData", JSON.stringify(this.state.series));
    localStorage.setItem("chartDate", new Date().toDateString());
  }

  generateDaysOfWeek() {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDayIndex = new Date().getDay();
    const shiftedDaysOfWeek = [
      ...daysOfWeek.slice(currentDayIndex),
      ...daysOfWeek.slice(0, currentDayIndex),
    ];
    return shiftedDaysOfWeek;
  }

  generateData() {
    const newComersData = [];
    const usersData = [];
    const currentDayIndex = new Date().getDay();

    for (let i = 0; i < 7; i++) {
      const randomValue = Math.ceil(Math.random() * 2500) + 2500;
      if (i === currentDayIndex) {
        newComersData.push(randomValue);
        usersData.push(randomValue);
      } else {
        newComersData.push(Math.ceil(Math.random() * 1250) + 1250);
        usersData.push(Math.ceil(Math.random() * 1250) + 1250);
      }
    }

    return [
      {
        name: "New Comers",
        data: newComersData,
      },
      {
        name: "Users",
        data: usersData,
      },
    ];
  }

  updateData() {
    const newComersData = this.generateData()[0].data;
    const usersData = this.generateData()[1].data;

    this.setState({
      series: [
        {
          name: "New Comers",
          data: newComersData,
        },
        {
          name: "Users",
          data: usersData,
        },
      ],
    });
  }

  render() {
    return (
      <div className="line-chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={300}
        />
      </div>
    );
  }
}

export default LineChart;
