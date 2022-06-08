import React, { FC } from "react";
import { connect } from "react-redux";
import "./Scoreboard.css";

import { RootState } from "../reducers";

interface Props {
  count?: number;
}

const Scoreboard: FC<Props> = ({ count }) => {
  return (
    <div>
      <table className="table-container">
        <tr>
          <th>Red</th>
          <th>Yellow</th>
        </tr>
        <tr>
          <td>0 wins</td>
          <td>0 wins</td>
        </tr>
      </table>
    </div>
  );
};

const mapState = (state: RootState) => ({});

export default connect(mapState, null)(Scoreboard);
