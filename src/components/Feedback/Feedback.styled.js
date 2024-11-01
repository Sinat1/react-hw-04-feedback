import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FeedbackListItem = styled.li`
  padding-right: 30px;

  &: nth-child(3) {
    padding-right: 0;
  }
`;

export const FeedbackListItemBtn = styled.button`
  width: 70px;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;

  background-color: lightblue;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: #a0d6e5;
  }

  &:active {
    color: white;
    background-color: #8ec2cf;
  }
`;
