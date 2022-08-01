import styled from 'styled-components';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({good, neutral, bad})=>{
    return(
        <ButtonContainer>
      <Button onClick={good}>Good</Button>
      <Button onClick={neutral}>Neutral</Button>
      <Button onClick={bad}>Bad</Button>
    </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
display: flex;
`
const Button = styled.button`
background-color: #dfd5d5;
color: black;
padding: 5px;
margin-right: 10px;
border: none;
border-radius: 3px;
cursor: pointer;`;

FeedbackOptions.propTypes={
    good:PropTypes.func.isRequired,
    neutral:PropTypes.func.isRequired,
    bad:PropTypes.func.isRequired,
}