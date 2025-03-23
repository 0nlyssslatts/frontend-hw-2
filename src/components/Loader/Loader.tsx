import React from 'react';
import classNames from 'classnames';
import loaderImg from './loader.svg';
import './LoaderStyle.css';

export type LoaderProps = {
  /** Размер */
  size?: 's' | 'm' | 'l';
  /** Дополнительный класс */
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({ size, className }) => {
  const allClasses = classNames('loader', className, {
    'loader-small': size === 's',
    'loader-medium': size === 'm',
    'loader-large': size === 'l' || !size,
  });

  return (
    <div className={allClasses}>
      <img src={loaderImg} alt="loader" />
    </div>
  );
};
export default Loader;
