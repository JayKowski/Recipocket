function measures(meal) {
  const measures = [];
  for (let j = 1; j <= 20; j += 1) {
    if (
      meal[`strMeasure${j}`] !== null
        && meal[`strMeasure${j}`] !== ''
        && meal[`strMeasure${j}`] !== ' '
    ) {
      measures.push(meal[`strMeasure${j}`]);
    } else {
      break;
    }
  }
  return measures;
}

export default measures;
