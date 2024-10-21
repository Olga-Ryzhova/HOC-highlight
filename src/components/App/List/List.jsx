import EnhancedVideo from "../Video/Video";
import EnhancedArticle from "../Article/Article";

export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <EnhancedVideo {...item} />
        );

      case 'article':
        return (
          <EnhancedArticle {...item} />
        );
      default:
        throw new Error();
    }
  });
};