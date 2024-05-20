interface AppSessionTypes {
    userType: string,
    userName: string,
    fullNames: string
}

const getUserSession = (): AppSessionTypes => {
    const session = window.localStorage;
    return {
        userType: session.getItem("userType") ?? "0",
        userName: session.getItem("userName") ?? "",
        fullNames: session.getItem("fullNames") ?? "",
    }
}

const setUserSession = (data: Record<string, any>) => {
    Object.entries(data).forEach(([key, value]) => {
        // Your logic here
        window.localStorage.setItem(key, value);
    });
}

export { getUserSession, setUserSession }