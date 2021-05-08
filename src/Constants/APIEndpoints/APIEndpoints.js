export default {
    base: "https://verdancy.capstone.ischool.uw.edu",
    testbase: "https://localhost:3000",
    handlers: {
        users: "/v1/users",
        myuser: "/v1/users/me",
        sessions: "/v1/sessions",
        sessionsMine: "/v1/sessions/mine",
        resetPasscode: "/v1/resetcodes",
        passwords: "/v1/passwords/"
    }
}