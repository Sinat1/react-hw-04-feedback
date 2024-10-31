import styled from 'styled-components';

export const FeedBack = styled.section``;

export const Feedback__text = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

export const Feedback__list = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const Feedback__listItem = styled.li`
  padding-right: 30px;

  &: nth-child(3) {
    padding-right: 0;
  }
`;

export const Feedback__listItemBtn = styled.button`
  width: 70px;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;

  background-color: lightblue;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  &:hover, &:focus{
  color: white;
    background-color: #a0d6e5;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
