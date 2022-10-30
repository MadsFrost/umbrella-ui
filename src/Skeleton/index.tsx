import React from 'react';
import * as Loader from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Skeleton: React.FC<Loader.SkeletonProps> = (props) => {
  return (
    <Loader.default {...props} />
  )
}