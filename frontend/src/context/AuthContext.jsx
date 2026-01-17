import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // Load initial state from localStorage immediately
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");

  const safeParse = (val) => {
    if (!val || val === "undefined" || val === "null") return null;
    try {
      return JSON.parse(val);
    } catch {
      return null;
    }
  };

  const [user, setUser] = useState(safeParse(storedUser));
  const [userToken, setUserToken] = useState(storedToken || null);
  const [loading, setLoading] = useState(false); // not true by default

  // login function
  const login = (userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setUser(userData);
    setUserToken(token);
  };

  // Logout function
  const logout = async () => {
    setLoading(true);
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
      setUserToken(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider value={{ user, userToken, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );    
};

export default AuthProvider;
