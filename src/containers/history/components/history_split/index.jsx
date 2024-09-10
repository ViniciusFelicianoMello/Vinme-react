/* eslint-disable react/prop-types */
import './history_split.sass'

const HistorySplit = ({ events }) => {
  return (
    <>
    
      <div className="history_split">
        {events
          .filter(event => event.side === 'left')
          .map(event => (
            <div key={event.id} className="history_split_item history_split_item_left">
              <h4 className="history_split_item_title">{event.date}</h4>
              <p className="history_split_item_text">{event.text}</p>
              <i className={event.icon}></i>
            </div>
          ))}
      </div>

      <div className="history_split">
        {events
          .filter(event => event.side === 'right')
          .map(event => (
            <div key={event.id} className="history_split_item history_split_item_right">
              <h4 className="history_split_item_title">{event.date}</h4>
              <p className="history_split_item_text">{event.text}</p>
              <i className={event.icon}></i>
            </div>
          ))}
      </div>

    </>
  )
}

export default HistorySplit
