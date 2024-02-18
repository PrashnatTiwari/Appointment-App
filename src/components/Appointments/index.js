import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointmentList: [],
    isStarred: false,
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()

    const {titleInput, dateInput} = this.state

    const newAppointment = {
      id: uuidv4,
      titleInput,
      dateInput,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onChangeDateInput = event => {
    this.setState({
      dateInput: event.target.value,
    })
  }

  onChangeTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  render() {
    const {titleInput, dateInput, appointmentList} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Add Appointment</h1>
          <div className="flex-container">
            <form onSubmit={this.onAddAppointment}>
              <p>TITLE</p>
              <input
                type="text"
                placeholder="TITLE"
                className="input"
                id="title"
                value={titleInput}
                onChange={this.onChangeTitleInput}
              />
              <p>Date</p>
              <input
                type="date"
                placeholder="TITLE"
                className="input"
                id="date"
                value={dateInput}
                onChange={this.onChangeDateInput}
              />
              <div>
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              className="image"
              alt="appointments"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="flex-container">
            <h2>Appointments</h2>
            <div>
              <button type="button" className="starred-button">
                Starred
              </button>
            </div>
          </div>
          <ul>
            {appointmentList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                toggleIsStarred={this.toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
