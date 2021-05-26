export function checkVictory(boardItems, symbol) {
  if (
    boardItems[0] === symbol &&
    boardItems[1] === symbol &&
    boardItems[2] === symbol
  ) {
    return true;
  }

  if (
    boardItems[3] === symbol &&
    boardItems[4] === symbol &&
    boardItems[5] === symbol
  ) {
    return true;
  }

  if (
    boardItems[6] === symbol &&
    boardItems[7] === symbol &&
    boardItems[8] === symbol
  ) {
    return true;
  }

  if (
    boardItems[0] === symbol &&
    boardItems[3] === symbol &&
    boardItems[6] === symbol
  ) {
    return true;
  }

  if (
    boardItems[1] === symbol &&
    boardItems[4] === symbol &&
    boardItems[7] === symbol
  ) {
    return true;
  }

  if (
    boardItems[2] === symbol &&
    boardItems[5] === symbol &&
    boardItems[8] === symbol
  ) {
    return true;
  }

  if (
    boardItems[0] === symbol &&
    boardItems[4] === symbol &&
    boardItems[8] === symbol
  ) {
    return true;
  }

  if (
    boardItems[6] === symbol &&
    boardItems[4] === symbol &&
    boardItems[2] === symbol
  ) {
    return true;
  }

  return false;
}
