import React, { FC } from "react";
import { connect } from "react-redux";
import "./Button.css";
import { WinningCoordinates } from "../reducers/game/selectors/testCombination";

import { RootState } from "../reducers";
import { getWinner } from "../reducers/selectors";

interface Props {
  onClick?: () => void;
  winner?: WinningCoordinates | null;
  text?: string;
}

const Button: FC<Props> = ({ text = "play again", winner }) => {
  return (
    <div className="button-container">
      <button
        className={`play-reset-btn ${winner ? "over-state" : "ongoing-state"}`}
      >
        {winner ? text : "start over"}
      </button>
    </div>
  );
};

const mapState = (state: RootState) => ({
  winner: getWinner(state),
});

export default connect(mapState, null)(Button);
