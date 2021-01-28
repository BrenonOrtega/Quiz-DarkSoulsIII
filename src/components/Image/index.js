import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const ImageBase = styled.img`
  flex: 1;
  width: 100%;
  height: 120px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const Image = ({ src, width, height }) => (
  <div>
    <ImageBase
      src={src}
      width={width}
      height={height}
    />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Image;
