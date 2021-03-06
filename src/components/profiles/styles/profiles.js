import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: #F4968C;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #F4968C;
  text-overflow: ellipsis;
  font-size: 20px;
  &:hover {
    font-weight: bold;
    color: #F4968C;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  cursor: pointer;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;
  &:hover > ${Picture} {
    border: 10px solid #FFFBF2;
  }
  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;