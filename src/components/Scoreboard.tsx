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

const Scoreboard: FC<Props> = ({ text = "play again", winner }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Red</th>
          <th>Yellow</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
        </tr>
      </table>
    </div>
  );
};

const mapState = (state: RootState) => ({
  winner: getWinner(state),
});

export default connect(mapState, null)(Scoreboard);
