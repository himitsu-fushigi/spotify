import React from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

// @dev spotify web api function accessor
const spotify = new SpotifyWebApi();

export default function App() {
  const [dataLayer, dispatch] = useDataLayerValue();

  React.useEffect(() => {
    // @dev returns token from uri(search bar)
    const hash = getTokenFromUrl();

    // @dev removing the token from search uri
    // @security
    window.location.hash = "";

    // @dev extract token from object
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      // @dev spotify => global variable
      // allowing var to access functions with valid token
      spotify.setAccessToken(_token);

      // @dev get current logged in user
      spotify
        .getMe()
        .then((user) => {
          dispatch({
            type: "SET_USER",
            user,
          });
        })

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
    }
  }, [dispatch]);

  return <div>{dataLayer.token ? <Player spotify={spotify}/> : <Login />}</div>;
}
