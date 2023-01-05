import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  margin: 0,
  width: "auto",
  minHeight: "100vh",
  background: "#206ecf",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
};

const paragraphStyles = {
  marginBottom: 48,
};

const linkButtonStyles = {
  background: "white",
  padding: "1%",
  textDecoration: "none",
  fontSize: "15px",
  color: "black",
  borderRadius: "10px",
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for...
      </p>
      <Link to='/' style={linkButtonStyles}>
        Go home
      </Link>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
