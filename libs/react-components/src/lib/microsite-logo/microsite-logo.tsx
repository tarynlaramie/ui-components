import React, { FunctionComponent } from 'react';

import './microsite-logo.scss';

/* eslint-disable-next-line */
export interface MicrositeLogoProps {
  serviceName: string,
  serviceHome: string
}

export const GoaMicrositeLogo: FunctionComponent<MicrositeLogoProps> = (props) => {
  return (
    <a href={props.serviceHome} aria-label={props.serviceHome} className="microsite-link">
      <span className="image-desktop-tablet"></span>
      <span className="image-mobile"></span>
      <span className="name">
        {props.serviceName}
      </span>
    </a>
  );
};

export default GoaMicrositeLogo;
