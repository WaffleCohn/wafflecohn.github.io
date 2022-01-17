import React from 'react';

export function NewTabLink(props) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a target="_blank" rel="noopener noreferrer" {...props} />
  );
}
