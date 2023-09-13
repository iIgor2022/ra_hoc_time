import moment from 'moment/moment'
import PropTypes from 'prop-types'
import { Component } from 'react';

moment.locale("ru");

const withDateTimePretty = (Component) => {
  const HOCComponent = (props) => {
    const { date } = props;

    const transformPrettyTime = moment(date).fromNow();

    return <Component { ...props } date={ transformPrettyTime }/>;
  };

  HOCComponent.propTypes = {
    date: PropTypes.string.isRequired,
  };

  HOCComponent.displayName = "transformPrettyTimeHOC";

  return HOCComponent;
};

export default withDateTimePretty;