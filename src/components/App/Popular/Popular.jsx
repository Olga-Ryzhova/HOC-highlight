const withPopularContent = WrappedComponent => props => {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      <WrappedComponent {...props} />
    </div>
  );

}
export default withPopularContent;
