import Link from 'next/link';
import styled from 'styled-components';
import db from '../../../db.json';
import React from 'react';
import PropTypes from 'prop-types';

const themeColors = db.theme.colors;

const LinkBtn = styled.div`
  padding: 20px 20px;
  margin: 5 auto 15px auto;
  border: 1px solid;
  border-radius: 8px;
  text-align: center;
  transition: 0.3s;
  max-width: 300px;
  width: 100%;
  /* variables */
  border-color: ${(props) =>
    props.type == 'success'
      ? themeColors.success
      : props.type == 'wrong'
      ? themeColors.wrong
      : themeColors.secondary};
  color: ${(props) =>
    props.type == 'success'
      ? themeColors.success
      : props.type == 'wrong'
      ? themeColors.wrong
      : themeColors.secondary};
  &:hover,
  &:focus {
    cursor: pointer;
    /* more here */
    border-color: ${(props) =>
      props.type == 'success'
        ? themeColors.success
        : props.type == 'wrong'
        ? themeColors.wrong
        : themeColors.secondary};
    background-color: ${(props) =>
      props.type == 'success'
        ? themeColors.success
        : props.type == 'wrong'
        ? themeColors.wrong
        : themeColors.secondary};
    color: ${themeColors.contrastText};
  }
`;

const CustomLink = (props) => {
  return (
    <Link href={props.href} className={props.className}>
      <LinkBtn {...props}>{props.text}</LinkBtn>
    </Link>
  );
};

CustomLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'wrong', 'normal', 'submit']),
};

export default CustomLink;