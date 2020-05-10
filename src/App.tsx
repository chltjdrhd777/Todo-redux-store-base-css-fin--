import React, { Fragment } from "react";
import styled from "styled-components";
import { faPen, faEraser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

////////when this todo is planed///
let today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
//////////////////////////////////

///Note!
//If I want to make containers which

//1. all contents are inline
//2. but want them to be stocked in block way

//If so, I should make "div" container <------- which secure enough space
//then, make container which has inline nature
function App() {
  return (
    <Fragment>
      <Head>What you have to do right now</Head>

      <ListContainer>
        <ToDoUpdates>
          <WhenToDo>{`${year}/${month}/${date}`}</WhenToDo>
          <Todobars>
            <TodoText>asdfasdfasdfadsfasdfadf</TodoText>

            <TodoEditTools>
              <ButtonEdit>
                <FontAwesomeIcon icon={faPen} />
              </ButtonEdit>
              <ButtonDelete>
                <FontAwesomeIcon icon={faEraser} />
              </ButtonDelete>
            </TodoEditTools>
          </Todobars>
        </ToDoUpdates>

        <ToDoUpdates>
          <WhenToDo>{`${year}/${month}/${date}`}</WhenToDo>
          <Todobars>
            <TodoText>hello</TodoText>

            <TodoEditTools>
              <ButtonEdit>
                <FontAwesomeIcon icon={faPen} />
              </ButtonEdit>
              <ButtonDelete>
                <FontAwesomeIcon icon={faEraser} />
              </ButtonDelete>
            </TodoEditTools>
          </Todobars>
        </ToDoUpdates>
      </ListContainer>

      <TotalCounter>
        <AddressPart>Undone</AddressPart>
        <HowManyUndone>2</HowManyUndone>
      </TotalCounter>
    </Fragment>
  );
}

//to pile contents in the column, display:flex + flex-direction:column
const Head = styled.header`
  color: white;
  font-size: 35px;
  font-weight: 700;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
///////////////////////////////////
const ListContainer = styled.section`
  padding-top: 10px;
  background-color: white;
  width: 95%;
  height: 400px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  top: 310px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: auto;
`;

const ToDoUpdates = styled.div``;

const WhenToDo = styled.span`
  margin-left: 5px;
  margin-right: 1px;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  color: #40739e;
`;

const Todobars = styled.div`
  font-size: 20px;
  background-color: white;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1);
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 10px;
  margin-left: 3px;
  box-sizing: border-box;
  border: 1px solid;
  display: inline-block;
`;

//span = It means I intend to set the container as inline box
//blcok = I want to occupy the whole length (can change width, height + allowing line change)
//inline = I want to occupy only my space (cannot change width, height + disapproving line change)
//inline-block = inline + blcok(no line change but can change width, height)
const TodoText = styled.span`
  margin-left: 10px;
  margin-right: 15px;
`;

///////////////////////////////////////
const TodoEditTools = styled.div`
  width: 60px;
  display: inline-block;
`;

const ButtonEdit = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;

  transition: all 0.2s ease-in;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
`;

const ButtonDelete = styled(ButtonEdit)`
  margin-left: 3px;
`;

///////////////////////////////////////////////

/////score//////
const TotalCounter = styled.section`
  position: absolute;
  top: 521px;
  width: 100%;
  height: 88px;
  background-color: none;
  display: flex;
  justify-content: flex-end;
`;

const AddressPart = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 300px;
  height: 70px;
  border-radius: 10%;
  background-color: #f6e58d;
  font-size: 50px;
  font-weight: 700;
`;

const HowManyUndone = styled(AddressPart)`
  margin-right: 30px;
  margin-left: 10px;
  width: 100px;
  background-color: white;
  border-radius: 25%;
`;
/////////////////
export default App;
