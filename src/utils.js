const isLogin = (authenticated)=>{
    if (authenticated) {
        return true
    }
    return false
}

export {isLogin}