import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = (props) => (
  <ContentLoader
    speed={3}
    width={1204}
    height={500}
    viewBox="0 0 1204 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-4" y="96" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);

export default CardLoader;
