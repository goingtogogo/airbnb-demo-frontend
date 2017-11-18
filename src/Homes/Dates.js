import React from "react";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import "./react_dates_overrides.css";
import { DayPickerRangeController } from "react-dates";

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: "startDate"
    };
  }

  selectDates = (start, end) => {
    console.log(this.state.focusedInput);
    console.log("start", start, "end", end);

    if (this.state.focusedInput === "endDate" && start) {
      this.setState({ focusedInput: "startDate" });
    } else {
      this.setState({ focusedInput: "endDate" });
    }

    console.log("State changed to: ", this.state.focusedInput);

    // if (this.state.startDate && this.state.endDate) {
    //   const a = this.state.startDate;
    //   const b = this.state.endDate;
    //   if (this.state.startDate > this.state.endDate) {
    //     let buffer = this.state.startDate;
    //     this.setState({ startDate: this.state.endDate });
    //     this.setState({ endDate: buffer });
    //   }
    // }

    // if (start) {
    this.setState({ startDate: start });
    // }

    // if (end) {
    this.setState({ endDate: end });
    // }

    // this.setState({ startDate: start, endDate: end });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onFocusChange = focusedInput => {
    console.log(focusedInput);
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    return (
      <DayPickerRangeController
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
        numberOfMonths={2}
        minimumNights={1}
        isDayBlocked={day => day.isBefore(moment(), "day")}
        hideKeyboardShortcutsPanel
      />
    );
  }
}

export default DatePicker;
// // import "./react_dates_overrides.css";
// import {
//   DateRangePicker,
//   SingleDatePicker,
//   DayPickerRangeController
// } from "react-dates";
// import moment from "moment";

// import { DayPicker } from "react-dates";

// const Calendar = styled.div`
//   calendarday_container {
//     border: none;
//   }
// `;
// const START_DATE = moment();

// export default class extends React.Component {
//   state = {
//     startDate: START_DATE,
//     endDate: null,
//     focusedInput: START_DATE
//   };
//   datesChanged(start, end) {
//     console.log(start, end);
//   }

//   render() {
//     return (
//       <Calendar>
//         <DayPickerRangeController
//           autofocus
//           numberOfMonths={2}
//           startDate={moment()}
//           isDayBlocked={day => day.isBefore(moment(), "day")}
//         />
//       </Calendar>
//     );
//   }
// }
