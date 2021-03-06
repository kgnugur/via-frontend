import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 1.2rem;

  svg {
    color: #515151;
    margin-bottom: 1rem;
    transition: all 0.4s;
  }
  svg:hover {
    cursor: pointer;
    color: #737373;
  }

  .title {
    font-size: 1em;
    text-align: center;
    margin-bottom: 0.7rem;
  }

  .list {
    width: 15rem;
    height: 30rem;
    overflow: hidden;
    overflow-y: scroll;

    .description {
      font-size: 0.7em;
      color: #444;
      margin-right: 5px;
    }

    li {
      width: 100%;
      height: 2.5em;
      padding: 0.2rem 0.4rem;
      cursor: pointer;
      transition: all 0.4s;

      display: flex;
      align-items: center;
      justify-content: center;

      &:not(:last-of-type) {
        border-bottom: 1px solid #e0e0e0;
      }

      &:hover {
        background-color: #f2f2f2;
      }
    }
  }
`;

const renderList = (listItems, clickedListItem) =>
  listItems.map((listItem, i) => {
    const seconds = listItem.frameNo / 12;
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor((seconds % 3600) % 60);
    return (
      <li key={i} onClick={() => clickedListItem(listItem.frameNo)}>
        <div className="description">
          {listItem.related_function_name
            ? listItem.related_function_name.substring(0, 13)
            : null}
        </div>
        <div>{`${h}:${m}:${s}`}</div>
      </li>
    );
  });

const renderControls = (isPlaying, clickedPlay, clickedPause) => {
  if (isPlaying) {
    return <FontAwesomeIcon icon="pause" onClick={() => clickedPause()} />;
  }
  return <FontAwesomeIcon icon="play" onClick={() => clickedPlay()} />;
};

const List = ({
  title,
  listItems,
  clickedListItem,
  isPlaying,
  clickedPlay,
  clickedPause,
  children
}) => {
  if (listItems.length === 0) {
    return null;
  }
  return (
    <Container>
      <h3 className="title">{title}</h3>
      {renderControls(isPlaying, clickedPlay, clickedPause)}
      {children}
      <ul className="list">{renderList(listItems, clickedListItem)}</ul>
    </Container>
  );
};

export default List;
