import styled from 'styled-components';

export const ContactTitle = styled.h2`
  text-align: center;
  color: tomato;
  padding-left: 10px;
  margin: 0px;
  font-size: 24px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
`;

export const CotactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0px;
  border: 1px dashed blue;
`;

export const ContactName = styled.p`
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: lighter;
  color: green;
`;
export const ContactNumber = styled.p`
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: lighter;
  color: #001380;
`;

export const ContactButton = styled.button`
  padding: 5px 30px;
  border: 1px solid blueviolet;
  border-radius: 3px;
  background-color: aquamarine;
  cursor: pointer;
  &:hover {
    background-color: #8e8eea;
  }
`;

export const ContactItem = styled.li`
  width: 50%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  border: 1px dashed blue;
  padding: 5px;
`;
