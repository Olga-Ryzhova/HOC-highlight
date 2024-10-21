const withNewContent = WrappedComponent => props => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      <WrappedComponent {...props} />
    </div>
  );
}

export default withNewContent;

