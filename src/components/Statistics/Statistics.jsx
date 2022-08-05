import PropTypes from 'prop-types';
import {
  StatisticItem,
  StatisticItemValue,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticItem>
        Good: <StatisticItemValue>{good}</StatisticItemValue>
      </StatisticItem>
      <StatisticItem>
        Neutral: <StatisticItemValue>{neutral}</StatisticItemValue>
      </StatisticItem>
      <StatisticItem>
        Bad: <StatisticItemValue>{bad}</StatisticItemValue>
      </StatisticItem>
      <StatisticItem>
        Total: <StatisticItemValue>{total}</StatisticItemValue>
      </StatisticItem>
      <StatisticItem>
        Positive feedback:{' '}
        <StatisticItemValue>{positivePercentage}%</StatisticItemValue>
      </StatisticItem>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
