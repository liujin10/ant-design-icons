// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DockerOutlinedSvg from '@ant-design/icons-svg/lib/asn/DockerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DockerOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DockerOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DockerOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DockerOutlined';
}

export default RefIcon;