import './calendar.css'

const CalendarComponent = (props) => {
    return (
        <div className='wrapper'>
            <div className='hours'>
                {props.hours.map((hour, index) => (index !== props.hours.length - 1) && <div className='hour' style={{ backgroundColor: hour.backgroundColor }}>{`${hour.time}:00`}</div>)}
            </div>
            {props.dates.map(date => {
                return (
                    <div className='calendar'>
                        {
                            props.plans.map(plan => (plan.month === date.month && plan.day === date.day) && plan.events.map(e => <div style={{ height: (e.end - e.start) / props.hours.length * 400, top: (e.start - props.hours[0].time + 1) / props.hours.length * 400 + 30 }} className='plan'>{e.message}</div>))
                        }
                        <div className="title-wrapper"><div className='title-before' /><div className='title'>{`${date.day}/${date.month} ${date.title}`}</div></div>
                        {props.hours.map(
                            hour => <div className='calendar-hour-wrapper'><div className='before' /><div className="calendar-hour" /></div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default CalendarComponent;