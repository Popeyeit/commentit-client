import React from 'react';
import { useHistory } from 'react-router-dom';
import CommentSectionHeading from '../comment-section-heading/CommentSectionHeading';
import styled from './commentSection.module.css';

const CommentSection = () => {
  const history = useHistory();
  const redirect = () => {
    history.push('/comments');
  };
  return (
    <section className={styled.comments}>
      <div className="container">
        <CommentSectionHeading redirect={redirect} />
      </div>
    </section>
  );
};

export default CommentSection;
