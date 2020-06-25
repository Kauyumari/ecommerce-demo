import React, { useState } from 'react';
import { Col, Typography } from 'antd';
import { animated, useSpring } from 'react-spring';
import { breakpoints } from '../../../../utils/hooks/useMediaQuery';

const AnimatedCol = animated(Col);

const HighLight = (props) => {
  const { title, img } = props;
  const [hovered, toggleHovered] = useState(false);
  const spring = useSpring({
    flex: hovered ? 2 : 1,
  });

  return (
    <AnimatedCol
      onMouseOver={() => toggleHovered(true)}
      onMouseLeave={() => toggleHovered(false)}

      style={{ position: 'relative', flex: spring.flex }}
    >
      <img
        width="100%"
        style={{ objectFit: 'cover' }}
        height={breakpoints.xs}
        src={img}
        alt={title}
      />
      <div style={{ position: 'absolute', top: 0, padding: ' 24px' }}>
        <Typography.Title>
          {title}
        </Typography.Title>
      </div>
    </AnimatedCol>
  );
};

export default HighLight;
