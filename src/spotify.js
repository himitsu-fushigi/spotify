export const authEndPoint = "https://accounts.spotify.com/authorize"
const redirectUri = 'http://localhost:3000'
const clientId = 'c4b39dedbc8a4ed3b720c0955e9f13ee'

const scopes= [
    "user-top-read",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing"
]

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial
    }, {})
}
 
export const loginUri = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`