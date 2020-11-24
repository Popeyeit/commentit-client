import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import CommentList from '../../components/comment-list/CommentList';
import Pagination from '@material-ui/lab/Pagination';
import api from '../../api/api';
import CommentForm from '../../components/comment-form/CommentForm';
import styled from './commentsPage.module.css';
import Modal from '../../components/modal/Modal';
const CommentsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [comments, setComments] = useState([]);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const changeComments = (id, stars) => {
    setComments(prev =>
      prev.map(el => (el._id === id ? { ...el, likes: stars } : el)),
    );
  };

  const memoFetchData = useCallback(async () => {
    const data = await api.getComments({ page });
    setTotalPages(data.totalPages);
    setComments(data.docs);
  }, [page]);

  const handleAddComment = async body => {
    await api.addComment(body);
    memoFetchData();
    handleCloseModal();
  };

  const setHistory = value => {
    history.push({
      pathname: '/comments',
      search: `page=${value}`,
    });
  };
  const handleChangeStars = async (id, body) => {
    await api.changeComment(id, body);
  };

  const handleChangePagination = (e, value) => {
    setPage(value);
    setHistory(value);
  };

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    const isNumber = Number(parsed.page);
    if (isNumber) {
      setHistory(isNumber);
      setPage(isNumber);
    } else {
      setHistory(1);
      setPage(1);
    }
  }, []);

  useEffect(() => {
    if (page) {
      memoFetchData();
    }
  }, [memoFetchData, page]);

  return (
    <>
      <section className={styled.comments}>
        <div className="container">
          <h2 className={styled.title}> Комментарии </h2>
          <CommentList
            changeComments={changeComments}
            comments={comments}
            handleChangeStars={handleChangeStars}
          />
          <button
            type="button"
            className={styled.add__btn}
            onClick={handleOpenModal}
          >
            +
          </button>
          {totalPages > 0 && (
            <Pagination
              count={totalPages}
              color="primary"
              size="large"
              page={page}
              className={styled.pagination__style}
              siblingCount={1}
              onChange={handleChangePagination}
            />
          )}
          <Modal open={open} handleCloseModal={handleCloseModal}>
            <CommentForm
              handleAddComment={handleAddComment}
              handleCloseModal={handleCloseModal}
            />
          </Modal>
        </div>
      </section>
    </>
  );
};

export default CommentsPage;
