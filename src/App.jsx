import { useState } from 'react';
import './App.css';
import VALUES from '../public/data/values.json';

const typeBoxStyle = {
  width: '50px',
  height: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  overflow: 'hidden',
  backgroundColor: '#EEE',
};

const TypeBox = ({ type, bgColor, color }) => {
  return (
    type !== '' && (
      <div style={typeBoxStyle}>
        <div
          style={{
            width: '100%',
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2px 0',
          }}
        >
          <img src={`/assets/icons/${type}.webp`} height="100%" />
        </div>
        <div
          style={{
            width: '100%',
            height: '40%',
            backgroundColor: bgColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <a
            href={`https://bulbapedia.bulbagarden.net/wiki/${type}_(type)`}
            target="_blank"
            style={{
              color: color,
              fontSize: '12px',
            }}
          >
            {type}
          </a>
        </div>
      </div>
    )
  );
};

const ValueBox = ({ value }) => {
  let bgColor = '#A9A8A7';

  switch (value) {
    case 'x0':
      bgColor = '#1E1E1E';

      break;

    case 'x0.5':
      bgColor = '#E69611';

      break;

    case 'x2':
      bgColor = '#62B43A';

      break;
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        backgroundColor: bgColor,
      }}
    >
      {value}
    </div>
  );
};

const App = () => {
  return <Table />;
};

const Table = () => {
  const [highlightedCell, setHighlightedCell] = useState({
    row: -1,
    column: -1,
  });

  //transform VALUES length into an array
  const rows = Array(Object.entries(VALUES).length).fill();

  return (
    <table style={{ border: '1px solid white' }}>
      <tbody>
        {
          // One-liner for _.range
          rows.map((_, i) => (
            <TableRow
              key={i}
              row={i}
              highlightedCell={highlightedCell}
              setHighlightedCell={setHighlightedCell}
            />
          ))
        }
      </tbody>
    </table>
  );
};

const TableRow = ({ row, highlightedCell, setHighlightedCell }) => {
  return (
    <tr>
      {VALUES[row].map((column, i) => (
        <TableCell
          key={i}
          columnPos={i}
          row={row}
          column={i === 0 ? VALUES[0][row] : column}
          highlightedCell={highlightedCell}
          setHighlightedCell={setHighlightedCell}
        />
      ))}
    </tr>
  );
};

const TableCell = ({
  row,
  column,
  columnPos,
  highlightedCell,
  setHighlightedCell,
}) => {
  const [hover, setHover] = useState(false);
  const isHighlighted =
    highlightedCell.row === row || highlightedCell.column === columnPos;

  return (
    <td
      onMouseEnter={() => {
        setHighlightedCell({ row, column: columnPos });
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        backgroundColor: isHighlighted ? '#fff59d' : '#F8F8FF',
        color: isHighlighted ? 'black' : null,
        transform: `scale(${hover ? 1.1 : 1})`,
      }}
    >
      {row === 0 || columnPos === 0 ? (
        <TypeBox
          type={column.type}
          bgColor={column.bgColor}
          color={column.color}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <ValueBox value={column} /> */}
          {/* {column === 'x1' ? '-' : <img src={`/assets/values/${column}.svg`} width="80%" />} */}
          <img src={`/assets/values/${column}.svg`} width="80%" />
        </div>
      )}
    </td>
  );
};

export default App;
