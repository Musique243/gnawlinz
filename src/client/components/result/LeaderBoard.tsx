import React, { useState, useEffect } from 'react';//

import { Table, Th, TableRow, Td } from './Styled';

import { Leader } from '../../utility/interface';
// import { UserContext } from '../../App'; // <-- holds User object


import axios from 'axios';


const LeaderBoard: React.FC = () => {

  const [leaders, setLeaders] = useState([]);
  const getLeaders = () => {
    axios.get('/character/characters/getall')
      .then((results) => {
        console.log(results.data);
        setLeaders(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getLeaders();
  }, []);


  console.log('LEADERS', leaders);
  return (
    <Table>
      <thead>
        <tr>
          <Th>Score</Th>
          <Th>Avatar</Th>
          <Th>Character</Th>
          <Th>Health</Th>
          <Th>Mood</Th>
          <Th>Strength</Th>
        </tr>
      </thead>
      <tbody>
        {leaders.map((leader: Leader, i: number) => (
          <TableRow key={i}>
            <Td>{leader.score}</Td>
            <Td style={{ width: '50px' }}><img src={leader.image_url} style={{ width: '100%', height: '100%' }} /></Td>
            <Td>{leader.name}</Td>
            <Td>{leader.health}</Td>
            <Td>{leader.mood}</Td>
            <Td>{leader.strength}</Td>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default LeaderBoard;
