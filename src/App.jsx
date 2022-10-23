import { useState } from 'react';
import './App.css';

const typeBoxStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  overflow: 'hidden',
  backgroundColor: '#EEE',

};

const typeTextStyle = (type) => {
  
  switch (type) {
    case 'normal':
       return { width: '100%', backgroundColor: '#C6C6A7', color: '#6D6D73' };
  
    case 'fight':
       return { width: '100%', backgroundColor: '#C6C6A7', color: '#6D6D73' };
  
    case 'flying':
       return { width: '100%', backgroundColor: '#C6C6A7', color: '#6D6D73' };
  
    default:
      break;
  }
  
};



const ROWS = [0, 1, 2, 3];

const VALUES = [
  [
    '',
    <div style={typeBoxStyle}>
        <img src="public/assets/icons/normal.webp" />
      <div style={typeTextStyle('normal')}>
        <a
          href="https://bulbapedia.bulbagarden.net/wiki/Normal_(type)"
          style={{
            color: '#6D6D73',
          }}
        >
          Normal
        </a>
      </div>
    </div>,
    <img src="public/assets/badges/fighting.webp" />,
    <img src="public/assets/badges/flying.webp" />,
  ],
  [<img src="public/assets/badges/normal.webp" />, '1/2', '1/2', '-'],
  [<img src="public/assets/badges/fighting.webp" />, '-', '1/2', '-'],
  [<img src="public/assets/badges/flying.webp" />, '1/2', '-', '-'],
];

function App() {
  return <Table />;
}

function Table() {
  const [highlightedCell, setHighlightedCell] = useState({
    row: -1,
    column: -1,
  });

  return (
    <table style={{ border: '1px solid white' }}>
      {/* <thead
        style={{
          width: '80px',
          height: '80px',
        }}
      >
        <tr>
          {COLUMNS.map((column, i) => (
            <th key={i}>{column}</th>
          ))}
        </tr>
      </thead> */}
      <tbody>
        {
          // One-liner for _.range
          ROWS.map((row, i) => (
            <TableRow
              key={i}
              row={row}
              highlightedCell={highlightedCell}
              setHighlightedCell={setHighlightedCell}
            />
          ))
        }
      </tbody>
    </table>
  );
}

function TableRow({ row, highlightedCell, setHighlightedCell }) {
  return (
    <tr>
      {VALUES[row].map((column, i) => (
        <TableCell
          key={i}
          columnPos={i}
          row={row}
          column={column}
          highlightedCell={highlightedCell}
          setHighlightedCell={setHighlightedCell}
        />
      ))}
    </tr>
  );
}

function TableCell({
  row,
  column,
  columnPos,
  highlightedCell,
  setHighlightedCell,
}) {
  const isHighlighted =
    highlightedCell.row === row || highlightedCell.column === columnPos;

  return (
    // column === 0 && row === 0 ? (
    //   <td
    //     onMouseEnter={() => setHighlightedCell({ row, column })}
    //     style={
    //       isHighlighted ? { backgroundColor: 'white', color: 'black' } : null
    //     }
    //   >
    //     type
    //   </td>
    // ) : column === 0 ? (
    //   <td
    //     onMouseEnter={() => setHighlightedCell({ row, column })}
    //     style={
    //       isHighlighted ? { backgroundColor: 'white', color: 'black' } : null
    //     }
    //   >
    //     {row}
    //   </td>
    // ) : row === 0 ? (
    //   <td
    //     onMouseEnter={() => setHighlightedCell({ row, column })}
    //     style={
    //       isHighlighted ? { backgroundColor: 'white', color: 'black' } : null
    //     }
    //   >
    //     {column}
    //   </td>
    // ) : (
    <td
      onMouseEnter={() => setHighlightedCell({ row, column: columnPos })}
      style={{
        backgroundColor: isHighlighted ? 'white' : null,
        color: isHighlighted ? 'black' : null,
        width: '80px',
        height: '80px',
      }}
    >
      {column}
    </td>
  );
}

export default App;
