import styled from "styled-components";
import defaultImg from "../images/flower-7.jpg";

const StyledHero = styled.header`
  min-height: 45vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
