export interface ResetBoardAction {
  type: "RESET_BOARD";
  // payload: {
  //   column: number;
  //   color: Color;
  // };
}

export function resetBoard(): ResetBoardAction {
  return {
    type: "RESET_BOARD",
    // payload: { column, color }
  };
}
