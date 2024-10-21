import withNewContent from "../New/New";
import withPopularContent from "../Popular/Popular";

function Article(props) {
  return (
    <div className="item item-article">
      <h3><a href="#">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
};

const EnhancedArticle  = (props) => {
  let WrappedArticle;

  if (props.views >= 1000) {
    WrappedArticle = withPopularContent(Article);
  } else if (props.views < 100) {
    WrappedArticle = withNewContent(Article);
  } else {
    WrappedArticle = Article; 
  }
  
  return <WrappedArticle  {...props} />;
}

export default EnhancedArticle;