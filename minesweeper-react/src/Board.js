import React from 'react'
import './Board.css'
import { useState, useContext } from 'react'
import { BoardSize } from './App';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
<Button variant="secondary">Secondary</Button>



function Board() {

    const { board, setBoard } = useContext(BoardSize);

    function changeBackground(e) {
        e.target.style.background = 'grey';
        e.target.style.border='white'
      }
      function revertBackground(e) {
        e.target.style.background = 'white';
      }

  return (
    <Container className='w-75'>
        {board.map((row, index) => {
            return <Row key={index} className='cellRow'>
                {
                    row.map((num, i) => {
                        return (
                            <Col 
                            className='col-lg'
                            style={{maxWidth:'50px', border:'1px solid gray'}}
                            key={i}
                            onClick={changeBackground}
                            >
                               <div className='cell'>x</div>
                            </Col>
                        )
                    })
                }

            </Row>
        })}
        
    </Container>
  )
}

export default Board