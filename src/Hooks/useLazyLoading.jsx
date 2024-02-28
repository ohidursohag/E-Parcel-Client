import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const useLazyLoading = (src) => {
  const [sourceLoaded, setSourceLoaded] = useState(null);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};

useLazyLoading.propTypes = {
  src: PropTypes.string.isRequired,
};
export default useLazyLoading;
