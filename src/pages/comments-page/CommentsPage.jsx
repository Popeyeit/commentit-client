import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Pagination from '@material-ui/lab/Pagination';
import CommentList from '../../components/comment-list/CommentList';
import CommentForm from '../../components/comment-form/CommentForm';
import Modal from '../../components/modal/Modal';
import Filter from '../../components/filter/Filter';
import Loader from '../../components/loader/Loader';
import api from '../../api/api';
import styled from './commentsPage.module.css';

const CommentsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState(false);

  const toggleLoader = () => {
    setLoader(prev => !prev);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const memoFetchData = useCallback(async () => {
    try {
      toggleLoader();
      const data = await api.getComments({ page, popular: filter, setError });

      if (!data) {
        return;
      }
      const { totalPages, docs } = data;
      if (totalPages && docs) {
        setTotalPages(totalPages);
        setComments(docs);
      }
    } finally {
      toggleLoader();
    }
  }, [page, filter]);

  const handleChangeFilter = () => {
    setFilter(prev => {
      const popular = !prev ? 'popular' : 'all';
      setHistory(page, popular);
      return !prev;
    });
  };

  const handleAddComment = async body => {
    await api.addComment(body, setError);
    memoFetchData();
    handleCloseModal();
  };

  const setHistory = (value, popular = 'all') => {
    history.push({
      ...location,
      search: `page=${value}&popular=${popular}`,
    });
  };
  const handleChangeStars = async (id, body) => {
    await api.changeComment(id, body, setError);
  };

  const handleChangePagination = (e, value) => {
    setPage(value);
    setHistory(value);
  };

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    const isNumber = Number(parsed.page);
    const popular = parsed.popular;
    if (isNumber) {
      setHistory(isNumber, popular);
      setPage(isNumber);
      const filterBool = popular === 'popular' ? true : false;
      setFilter(filterBool);
    } else {
      setHistory(1);
      setPage(1);
    }
  }, []);

  useEffect(() => {
    if (page) {
      memoFetchData();
      return;
    }
  }, [memoFetchData, page, filter]);

  if (error) {
    return <div className={styled.error}>{error}</div>;
  }

  return (
    <>
      <section className={styled.comments}>
        <div className="container">
          <h2 className={styled.title}> Комментарии </h2>
          <div className={styled.filter__wrapper}>
            <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
          </div>
          {loader && <Loader />}
          {!loader && (
            <CommentList
              comments={comments}
              handleChangeStars={handleChangeStars}
            />
          )}

          <button
            type="button"
            className={styled.add__btn}
            onClick={handleOpenModal}
          >
            +
          </button>
          {totalPages > 1 && !loader && (
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
