import styled from 'styled-components';
import * as x from 'grid-styled';

export const Flex = styled(x.Flex)`
  height: ${({ height }) => (height && height) || 'auto'};
  width: ${({ width }) => (width && width) || 'auto'};
  background: ${({ bg }) => (bg && bg) || 'transparent'};
  margin: ${({ margin }) => (margin && margin) || '0'};
  padding: ${({ padding }) => (padding && padding) || '0'};
  position: ${({ position }) => (position && position) || 'relative'};
`;

export const Box = styled(x.Box)`
  height: ${({ height }) => (height && height) || 'auto'};
  background: ${({ bg }) => (bg && bg) || 'transparent'};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  position: ${({ position }) => (position && position) || 'relative'};
`;

export const Grid = styled(x.Grid)`
  height: ${({ height }) => (height && height) || 'auto'};
  background: ${({ bg }) => (bg && bg) || 'transparent'};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  position: ${({ position }) => (position && position) || 'relative'};
`;
