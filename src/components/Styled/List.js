import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .list {
    width: 15rem;
    height: 30rem;
    overflow: hidden;
    overflow-y: scroll;

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

const renderList = (listItems, clickedListItem) => {
  return listItems.map((listItem, i) => (
    <li key={i} onClick={() => clickedListItem(listItem.frameNo / 12)}>
      <span>{(listItem.frameNo / 12).toFixed()}</span>
    </li>
  ));
};

const List = ({ title, listItems, clickedListItem }) => (
  <Container>
    <h3>{title}</h3>
    <ul className="list">{renderList(listItems, clickedListItem)}</ul>
  </Container>
);

export default List;
