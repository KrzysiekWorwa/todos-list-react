import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
color: white;
text-decoration: none;
    &.${activeClassName} {
    font-weight: bold;
    }
    &:hover {
        border-bottom: 1px solid;
    }
`;

export const List = styled.li`
background: teal;
display: flex;
justify-content: center;
list-style: none;
margin: 0;
padding: 0;
`;

export const Item = styled.li`
margin: 20px;
`;