import { useState } from 'react';
import './App.css';

const VALUES = [
  [
    { type: '', bgColor: '', color: '' },
    {
      type: 'Normal',
      bgColor: '#C6C6A7',
      color: '#6D6D4E',
      values: [
        '',
        'x1',
        'x1',
        'x1',
        'x1',
        'x1',
        'x0.5',
        'x1',
        'x0',
        'x0.5',
        'x1',
        'x1',
        'x1',
        'x1',
        'x1',
        'x1',
        'x1',
        'x1',
        'x1',
      ],
    },
    { type: 'Fighting', bgColor: '#D67873', color: '#7D1F1A' },
    { type: 'Flying', bgColor: '#C6B7F5', color: '#6D5E9C' },
    { type: 'Poison', bgColor: '#C183C1', color: '#682A68' },
    { type: 'Ground', bgColor: '#e6946b', color: '#994216' },
    { type: 'Rock', bgColor: '#D1C17D', color: '#786824' },
    { type: 'Bug', bgColor: '#C6D16E', color: '#6D7815' },
    { type: 'Ghost', bgColor: '#A292BC', color: '#493963' },
    { type: 'Steel', bgColor: '#D1D1E0', color: '#787887' },
    { type: 'Fire', bgColor: '#F5AC78', color: '#9C531F' },
    { type: 'Water', bgColor: '#9DB7F5', color: '#445E9C' },
    { type: 'Grass', bgColor: '#A7DB8D', color: '#4E8234' },
    { type: 'Electric', bgColor: '#FAE078', color: '#A1871F' },
    { type: 'Psychic', bgColor: '#FA92B2', color: '#A13959' },
    { type: 'Ice', bgColor: '#BCE6E6', color: '#638D8D' },
    { type: 'Dragon', bgColor: '#A27DFA', color: '#4924A1' },
    { type: 'Dark', bgColor: '#A29288', color: '#49392F' },
    { type: 'Fairy', bgColor: '#F4BDC9', color: '#9B6470' },
  ],
  [
    '',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x1',
    'x0',
    'x0.5',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
  ],
  [
    '',
    'x2',
    'x1',
    'x0.5',
    'x0.5',
    'x1',
    'x2',
    'x0.5',
    'x0',
    'x2',
    'x1',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x2',
    'x1',
    'x2',
    'x0.5',
  ],
  [
    '',
    'x1',
    'x2',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x2',
    'x1',
    'x0.5',
    'x1',
    'x1',
    'x2',
    'x0.5',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
  ],
  [
    '',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x0.5',
    'x0.5',
    'x1',
    'x0.5',
    'x0',
    'x1',
    'x1',
    'x2',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x2',
  ],
  [
    '',
    'x1',
    'x1',
    'x0',
    'x2',
    'x1',
    'x2',
    'x0.5',
    'x1',
    'x2',
    'x2',
    'x1',
    'x0.5',
    'x2',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
  ],
  [
    '',
    'x1',
    'x0.5',
    'x2',
    'x1',
    'x0.5',
    'x1',
    'x2',
    'x1',
    'x0.5',
    'x2',
    'x1',
    'x1',
    'x1',
    'x1',
    'x2',
    'x1',
    'x1',
    'x1',
  ],
  [
    '',
    'x1',
    'x0.5',
    'x0.5',
    'x0.5',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x0.5',
    'x0.5',
    'x1',
    'x2',
    'x1',
    'x2',
    'x1',
    'x1',
    'x2',
    'x0.5',
  ],
  [
    '',
    'x0',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x2',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x2',
    'x1',
    'x1',
    'x0.5',
    'x1',
  ],
  [
    '',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x2',
    'x1',
    'x1',
    'x0.5',
    'x0.5',
    'x0.5',
    'x1',
    'x0.5',
    'x1',
    'x2',
    'x1',
    'x1',
    'x2',
  ],
  [
    '',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x2',
    'x1',
    'x2',
    'x0.5',
    'x0.5',
    'x2',
    'x1',
    'x1',
    'x2',
    'x0.5',
    'x1',
    'x1',
  ],
  [
    '',
    'x1',
    'x1',
    'x1',
    'x1',
    'x2',
    'x2',
    'x1',
    'x1',
    'x1',
    'x2',
    'x0.5',
    'x0.5',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x1',
    'x1',
  ],
  [
    '',
    'x1',
    'x1',
    'x0.5',
    'x0.5',
    'x2',
    'x2',
    'x0.5',
    'x1',
    'x0.5',
    'x0.5',
    'x2',
    'x0.5',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x1',
    'x1',
  ],
  [
    '',
    'x1',
    'x1',
    'x2',
    'x1',
    'x0',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x2',
    'x0.5',
    'x0.5',
    'x1',
    'x1',
    'x0.5',
    'x1',
    'x1',
  ],
  [
    '',
    'x1',
    'x2',
    'x1',
    'x2',
    'x1',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x1',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x1',
    'x1',
    'x0',
    'x1',
  ],
  [
    '',
    'x1',
    'x1',
    'x2',
    'x1',
    'x2',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x0.5',
    'x0.5',
    'x2',
    'x1',
    'x1',
    'x0.5',
    'x2',
    'x1',
    'x1',
  ],
  [
    '',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x2',
    'x1',
    'x0',
  ],
  [
    '',
    'x1',
    'x0.5',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x2',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x2',
    'x1',
    'x1',
    'x0.5',
    'x0.5',
  ],
  [
    '',
    'x1',
    'x2',
    'x1',
    'x0.5',
    'x1',
    'x1',
    'x1',
    'x1',
    'x0.5',
    'x0.5',
    'x1',
    'x1',
    'x1',
    'x1',
    'x1',
    'x2',
    'x2',
    'x1',
  ],
];

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
        setHover(!hover);
      }}
      onMouseLeave={() => {
        setHover(!hover);
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
