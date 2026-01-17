
const AuthProvider = ({children}) =>{
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    const login = (userData, token) =>{
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token);
        
    }
}