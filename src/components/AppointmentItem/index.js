import './index.css'

const AppointmentItem = props => {
  const {appointmentdetails, toogleIsStarred} = props
  const {id, title, date, isStarred} = appointmentdetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toogleIsStarred(id)
  }
  return (
    <div className="appointment-card-container">
      <div className="flex-container">
        <h1 className="heading">{title}</h1>
        <button type="button" onClick={onClickStar}>
          <img src={starImgUrl} className="empty-star-image" alt="starImage" />
        </button>
      </div>
      <p>Date: {date}</p>
    </div>
  )
}

export default AppointmentItem
