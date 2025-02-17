import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetailsIframe({ recipeType, strYoutube }) {
  function getVideoTag() {
    const index = 32;
    const videoStr = strYoutube.slice(index);
    return videoStr;
  }

  if (recipeType === 'comida') {
    return (
      <div className="video-detail">
        <iframe
          src={ `https://www.youtube.com/embed/${getVideoTag()}` }
          title="YouTube video player"
          frameBorder="0"
          data-testid="video"
          allow="accelerometer;
  autoplay; clipboard-write;
  encrypted-media; gyroscope;
  picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return null;
}

RecipeDetailsIframe.propTypes = {
  recipeType: PropTypes.string.isRequired,
  strYoutube: PropTypes.string.isRequired,
};

export default RecipeDetailsIframe;
