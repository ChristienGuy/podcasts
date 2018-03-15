/* 
Tracking states via "enum" rather than boolean flags

Boolean flags lead to potentailly unexpected combinations of states
e.g

isLoggedIn = true
isLoggingIn = false
isCheckingSession = false
isLoadingPodcasts = false
podcastsLoaded = true

This creates 5! number of potential states (1 * 2 * 3 * 4 * 5 = 120)

See: https://christienguy.co.uk/post/react-state-enum/ for full info
*/

// 12 possible combinations of state (3 * 4) is more manageable but still not great
export const AuthenticationState = Object.freeze({
  LOGGING_IN: "LOGGING_IN",
  LOGGED_IN: "LOGGED_IN",
  CHECKING_SESSION: "CHECKING_SESSION",
  NOT_AUTHENTICATED: "NOT_AUTHENTICATED",
})
