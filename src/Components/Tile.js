const Tile = (props) => {
  const _handleClick = (e) => {
    const flagged = e.altKey ? true : false;
    props.updateGame(props.tile, flagged);
  }

  const tile = props.tile;
    let klass, text, count;
    if (tile.explored) {
      if (tile.bombed) {
        klass = 'bombed';
        text = '\u2622';
      } else {
        klass = 'explored';
        count = tile.adjacentBombCount();
        text = (count > 0 ? `${count} ` : "");
      }
    } else if (tile.flagged) {
      klass = 'flagged';
      text = '\u2691';
    } else {
      klass = 'unexplored';
    }
    klass = `tile ${klass}`;

  return (
    <div className={klass} onClick={_handleClick}>{text}</div>
  );
}

export default Tile;
