import LayoutHeader from "./header/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const FullLayout = () => {
    return (
        <LayoutWrapper>
            <LayoutHeader />
            <Outlet />
        </LayoutWrapper>
    );
};
export default FullLayout;

const LayoutWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
`;
