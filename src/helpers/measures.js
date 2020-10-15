function measures(meal) {
    let measures = [];
    for (let j = 1; j <= 20; j++) {
      if (
        meal[`strMeasure${j}`] !== null &&
        meal[`strMeasure${j}`] !== "" &&
        meal[`strMeasure${j}`] !== " "
      ) {
        measures.push(meal[`strMeasure${j}`]);
      } else {
        break;
      }
    }
    console.log(measures)
    return measures;
}

export default measures;