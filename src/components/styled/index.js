import styled, { css } from 'styled-components';

export const Layout = styled.div`
  height: ${props => props.height ? props.height : ""};
  width: ${props => props.width ? props.width : ""};
  background: ${props => props.background ? props.background : "white"};
  display: ${props => props.display ? props.display : ""};
  align-items: ${props => props.alignItems ? props.alignItems : ""};
  justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
  margin: ${props => props.margin ? props.margin : ""};
  padding: ${props => props.padding ? props.padding : ""};
  bottom: ${props => props.bottom ? props.bottom : ""};
  position: ${props => props.position ? props.position : ""};
  flex-direction: ${props => (props.flexDirection >= 960) ? 'row' : 'column'};
`;

export const Btn = styled.button`
  background: ${props => props.background ? props.background : ""};
  border: ${props => props.border ? props.border : ""};
  height: ${props => props.height ? props.height : ""};
  width: ${props => props.width ? props.width : ""};
  font-size: ${props => props.fontSize ? props.fontSize : "1.5rem"};;
  text-transform: ${props => props.textTransform ? props.textTransform : "uppercase"};
  padding: ${props => props.padding ? props.padding : ""};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
  margin: ${props => props.margin ? props.margin : ""};
  color: ${props => props.color ? props.color : ""};
`;

export const Heading = styled.h1`
  color: ${props => props.color ? props.color : ""};
  font-size: ${props => props.fontSize ? props.fontSize : ""};
  text-align: ${props => props.textAlign ? props.textAlign : ""};
  font-weight: ${props => props.fontWeight ? props.fontWeight : ""};
  padding: ${props => props.padding ? props.padding : ""};
  margin: ${props => props.margin ? props.margin : ""};
  line-height: ${props => props.lineHeight ? props.lineHeight : ""};
  width: ${props => props.width ? props.width : ""};
`;

export const Img = styled.img`
  padding: ${props => props.padding ? props.padding : ""};
  display: ${props => props.display ? props.display : ""};
  align-items: ${props => props.alignItems ? props.alignItems : ""};
  justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
  vertical-align: ${props => props.verticalAlign ? props.verticalAlign : ""};
  margin: ${props => props.margin ? props.margin : ""};
  width: ${props => props.width ? props.width : ""};
  height: ${props => props.height ? props.height : ""};
  position: ${props => props.position ? props.position : ""};
  bottom: ${props => props.bottom ? props.bottom : ""};
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform .2s ease-out;
`;