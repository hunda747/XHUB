
import {NewReleasesOutlined,CheckCircleOutlineOutlined
    ,HourglassEmptyOutlined,SchoolOutlined} from '@material-ui/icons';


    
export const TrainingHeaderItem=[
    {
        title:'New Registers',
        path: '/adminDash/training/new',
        icon: <NewReleasesOutlined/>,
        cName: 'training-nav'
    },
    {
        title:'Approved',
        path: '/adminDash/training/approved',
        icon: <CheckCircleOutlineOutlined/>,
        cName: 'training-nav'
    },
    {
        title:'In Training',
        path: '/adminDash/training/in-training',
        icon: <HourglassEmptyOutlined/>,
        cName: 'training-nav'
    },
    {
        title:'Graduates',
        path: '/adminDash/training/graduates',
        icon: <SchoolOutlined/>,
        cName: 'training-nav'
    },
]