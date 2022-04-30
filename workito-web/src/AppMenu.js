import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import {
  BarsOutlined,
  CalendarOutlined,
  FormOutlined,
  ProfileOutlined,
  RocketOutlined,
  ScheduleOutlined,
  SettingOutlined,
  SolutionOutlined,
  TableOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';

const {SubMenu} = Menu;

class AppMenu extends React.Component {

//  const pages = [
//    {
//      key: "1",
//      title: "",
//      icon: "";
//
//    }
//  ]
//
//  const createMenu = () => {
//    let menu = {
//
//
//    }
//  }


  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <SubMenu key="sub1" icon={<SolutionOutlined/>} title="My">
          <Menu.Item key="1" icon={<BarsOutlined/>}>
            Works<Link to="/works"/>
          </Menu.Item>
          <Menu.Item key="2" icon={<FormOutlined/>}>
            Notes<Link to="/notes"/>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="3" icon={<ProfileOutlined/>}>
          Project<Link to="/project"/>
        </Menu.Item>
        <Menu.Item key="4" icon={<RocketOutlined/>}>
          Scrum
        </Menu.Item>
        <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
          <Menu.Item key="6" icon={<UserOutlined/>}>Member</Menu.Item>
          <Menu.Item key="7" icon={<ScheduleOutlined/>}>Schedule</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<SettingOutlined/>} title="Setting">
          <Menu.Item key="8" icon={<CalendarOutlined/>}>Holiday</Menu.Item>
          <Menu.Item key="99" icon={<TableOutlined/>}>Tables</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }

}

export default AppMenu;