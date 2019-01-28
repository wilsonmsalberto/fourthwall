// React
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Image from 'components/image/Image';

// Styles
import styled from '@emotion/styled';

const CardImage = ({
  alt,
  className,
  url,
}) => (
  <Image
    alt={ alt }
    className={ className }
    url={ url }
    size="w500"
  />
);

CardImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  url: PropTypes.string,
};

CardImage.defaultProps = {
  alt: '',
  className: '',
  url: '',
};

const StyledCardImage = styled(CardImage)`
  width: 100%;
  height: auto;
`;

export default StyledCardImage;
