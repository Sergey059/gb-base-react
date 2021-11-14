import React from "react";
import styled from "styled-components";
import SidebarUsers from "./SidebarUsers";

const Sidebar = () => {
  return (
    <SidebarBox>
      <SidebarUsers />
    </SidebarBox>
  );
};

export default Sidebar;

const SidebarBox = styled.aside`
  margin-right: 36px;
  padding: 24px;
  height: 100%;
  width: 300px;
  border: 1px solid #f2f9ff;
  border-radius: 24px;
  background-color: #f5faff;
  box-shadow: 1px 1px 15px 0px rgb(0 123 255 / 3%);
`;
