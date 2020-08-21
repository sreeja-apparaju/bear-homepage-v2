import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';
import ShowStories from "./ShowStories"

// fixme might need to set key
function Tiles(props) {
    const mappedStories = props.stories.map(story => (
        <Tile key={story.id} name = {story.name} text={story.challenge} />
    ))
    //console.log(mappedStories)
    return (
        <div className="allTiles">
            <ShowStories array = {mappedStories} />
        </div>
    )
}

Tiles.propTypes = {
    stories: PropTypes.array.isRequired,
}

export default Tiles
