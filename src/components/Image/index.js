import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const ImageBase = styled.img`
  flex: 1;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

ImageBase.defaultProps = {
  width: '100%',
  height: 'auto',
  display: 'block',
};

const Image = ({ src, largura = '100%', altura = '180px' }) => (
  <ImageBase
    src={src}
    width={largura}
    height={altura}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
