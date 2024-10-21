import withNewContent from "../New/New";
import withPopularContent from "../Popular/Popular";

function Video(props) {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
};

const EnhancedVideo = (props) => {
  let WrappedVideo;

  if (props.views >= 1000) {
    WrappedVideo = withPopularContent(Video);
  } else if (props.views < 100) {
    WrappedVideo = withNewContent(Video);
  } else {
    WrappedVideo = Video; 
  }
  
  return <WrappedVideo {...props} />;
}

export default EnhancedVideo;