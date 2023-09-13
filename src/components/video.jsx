import PropTypes from 'prop-types'
import DateTime from './dateTime'
import withDateTimePretty from './HOCs/dateTimePretty'

const DateTimePretty = withDateTimePretty(DateTime);

export default function Video(props) {
  return (
    <div className='video'>
      <iframe
        src={props.url}
        frameBorder="0"
        allow='autoplay; encrypted-media'
        allowFullScreen>
      </iframe>
      <DateTimePretty date={props.date}/>
    </div>
  );
}

Video.propTypes = {
  date: PropTypes.any,
  url: PropTypes.any,
}