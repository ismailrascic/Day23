import React, {Component} from 'react';
import { render } from 'react-dom';

const TableHeader = () =>{
    return (
<thead>
<tr>
<th>Firts name</th>
<th>Last name</th>
</tr>
</thead>
)
}
const TableBody = (props) =>{
const rows =props.characterData.map((row, index) => {
return( <tr key={index}>
    <td>{row.firstName}</td>
    <td>{row.lastName}</td>
<button onClick={()=> props.removeCharacter(index)}>Delete</button>
</tr>
);
});
return <tbody>{rows}</tbody>
}

 const Table =(props) => {
 const {characterData, removeCharacter} = props;

 return(
    <table>
    <TableHeader />
    <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
    
    </table>
    )
  
 }


 
 
 
 
 
 
 
 
 
 export default Table;
