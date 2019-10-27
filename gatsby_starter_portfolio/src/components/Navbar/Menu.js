import styled from "styled-components";

const Menu = styled.div`
  ul {
    padding: 0;
  }
  .logo {
    float: left;
    color: #000;
    a {
      color: #000;
      font-weight: 700;
      font-family: "Montserrat", sans-serif;
      border-bottom: 2px dashed #aa3967;
    }
  }
  li {
    display: inline;
    list-style-type: none;
    margin-right: 30px;
    letter-spacing: 0.05em;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
    color: #aa3967;
    &:hover {
      border-bottom: 2px solid #aa3967;
    }
  }
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
    .logo {
      float: none;
      display: none;
    }
  }
`;

export default Menu;
