//loads array elements into corresponding object properties
function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

//passing in array of arrays which is employees to employee
function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event) {
   // let [date, hour] = event
    let eventObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: "YYYY-MM-DD HHMM"
    }
    this.timeInEvents.push(eventObj)
    return this
}

function createTimeOutEvent(event) {
    let [date, hour] = event.split(" ")
    let eventObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }
    this.timeOutEvents.push(eventObj)
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.map(employee => allWagesFor.call(employee)).reduce((currentValue, total))
    //return employeeRecords.map((currentValue, total) => currentValue + total)
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}