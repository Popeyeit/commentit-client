import React from 'react';
import styled from './commentSection.module.css';
import CommentSectionHeading from '../comment-section-heading/CommentSectionHeading';
const CommentSection = () => {
  return (
    <section className={styled.comments}>
      <div className="container">
        <CommentSectionHeading />
      </div>
    </section>
  );
};

export default CommentSection;
