import React from 'react'
import css from './Header.module.css';

export const Header: React.FC<{ title: string }> = ({ title }) => (
  <header className={css.header}>
    <span>{title}</span>
  </header>
);
