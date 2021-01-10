import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryStatus
}) {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            id={song.id}
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
