import React from "react";

const AuthContext = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleShow = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  return <div></div>;
};

export default AuthContext;
