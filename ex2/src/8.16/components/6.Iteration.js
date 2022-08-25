
const List = () => {
  const Wheather = ['봄','여름','가을','겨울'];
  const WheatherList = Wheather.map(Wheather => <li>{Wheather}</li>);
  return<ul>{WheatherList}</ul>;
};

export default List;