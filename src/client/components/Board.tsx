import React from "react";

type OwnProps = {};

const cellRowId = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const cellColId = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const Board: React.VFC<OwnProps> = ({}) => {
  return (
    <div className="w-[100vh] h-[100vh] p-5 m-auto grid grid-cols-10 grid-rows-10 gap-1 border-2 border-white">
      {cellRowId.map((rowId) =>
        cellColId.map((colId) => (
          <BoardCell key={rowId + colId} rowId={rowId} colId={colId} />
        )),
      )}
    </div>
  );
};

interface BoardCellProps {
  rowId: string;
  colId: string;
}

const BoardCell: React.VFC<BoardCellProps> = ({ rowId, colId }) => {
  return <div className="border border-white text-white">{rowId + colId}</div>;
};
