
import {DashboardOutlined,PersonOutlineOutlined,
    EmojiEventsOutlined,ListAltOutlined,MenuBookOutlined,
    SupervisorAccountOutlined,ScheduleOutlined,CheckBoxOutlined} from '@material-ui/icons';



export const SidebarItems=[
    {
        title:'Dashboard',
        path: '/adminDash',
        icon: <DashboardOutlined/>,
        cName: 'nav-item'
    },
    {
        title:'Profile',
        path: '/adminDash/profile',
        icon: <PersonOutlineOutlined/>,
        cName: 'nav-item'
    },
    {
        title:'Manage Events',
        path: '/adminDash/events',
        icon: <EmojiEventsOutlined/>,
        cName: 'nav-item'
    },
    {
        title:'Training',
        path: '/adminDash/training',
        icon: <ListAltOutlined/>,
        cName: 'nav-item'
    },
    {
        title:'Cources',
        path: '/adminDash/cources',
        icon: <MenuBookOutlined/>,
        cName: 'nav-item'
    },
    {
        title:'Lecturers',
        path: '/adminDash/lecturers',
        icon: <SupervisorAccountOutlined/>,
        cName: 'nav-item'
    },
    {
        title:'Schedule',
        path: '/adminDash/schedule',
        icon: <ScheduleOutlined/>,
        cName: 'nav-item'
    },
    {
        title:'Attendance',
        path: '/adminDash/attendance',
        icon: <CheckBoxOutlined/>,
        cName: 'nav-item'
    },
]