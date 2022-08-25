import MySon from '../components/1.children';

const My = () => { // My 태그에 있는 문장들을 보여주고싶으면, components에 {props.children} 값으로 받아옴.
  return <MySon>리액트 흐흐흐 흥미진진한걸</MySon>;
};

export default My;