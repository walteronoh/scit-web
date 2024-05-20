interface AppSessionTypes {
    userType: string,
    userName: string
}

const getUserSession = (): AppSessionTypes => {
    const session = window.localStorage;
    return {
        userType: session.getItem("userType") ?? "0",
        userName: session.getItem("userName") ?? ""
    }
}

const setUserSession = (data: Record<string, any>) => {

}

export { getUserSession, setUserSession }