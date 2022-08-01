import styled from "styled-components";
import PropTypes from 'prop-types';

export const Section = ({title, children})=>{
    return(
<section>
<Title>{title}</Title>
{children}
</section>
    )
}


const Title = styled.h2`
font-size: 16px;
color: blue;
`

Section.propTypes={
    title:PropTypes.string.isRequired
}