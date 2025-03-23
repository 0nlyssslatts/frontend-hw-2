import classNames from 'classnames';
import * as React from 'react';
import './TextStyle.css';

export type TextProps = {
  /** Дополнительный класс */
  className?: string;
  /** Стиль отображения */
  view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
  /** Html-тег */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  /** Начертание шрифта */
  weight?: 'normal' | 'medium' | 'bold';
  /** Контент */
  children: React.ReactNode;
  /** Цвет */
  color?: 'primary' | 'secondary' | 'accent';
  /** Максимальное кол-во строк */
  maxLines?: number;
};

const Text: React.FC<TextProps> = ({
  className,
  view,
  tag,
  weight,
  children,
  color,
  maxLines,
}) => {
  const allClasses = classNames(
    'text',
    className,
    view,
    weight && `text-${weight}`,
    color && `text-${color}`
  );

  const Element = tag || 'div';
  const style = maxLines
    ? {
        WebkitLineClamp: maxLines,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical' as 'vertical',
        overflow: 'hidden',
      }
    : {};

  return (
    <Element className={allClasses} style={style}>
      {children}
    </Element>
  );
};

export default Text;
