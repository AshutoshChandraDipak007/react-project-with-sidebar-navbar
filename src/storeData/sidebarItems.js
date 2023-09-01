import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PersonIcon from '@mui/icons-material/Person';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const iconStyle={
    color:'white',fontSize:'25px',marginBottom:'-10px',marginRight:'10px'
}

export const sideBarData=[
    {
        id:1,
        title:"Request ",
        subNavFlag:false,
        icon:<AccountBalanceIcon style={iconStyle}/>,
        subNav: [
            {
                title:"New Request",
                icon:<AccountBalanceIcon style={iconStyle}/>,
                to:"/newrequest"
            }, {
                title:"My Request",
                icon:<AccountBalanceIcon style={iconStyle}/>,
                to:"/myrequest"
            }, {
                title:"Key Owner Search",
                icon:<AccountBalanceIcon style={iconStyle}/>,
                to:"/keyownsearch"
            }
        ]
    },
    {
        id:2,
        title:"My Assignment",
        icon:<AppRegistrationIcon style={iconStyle}/>,
        subNavFlag:false,
        
    },
    {
        id:3,
        title:"Profile",
        icon:<PersonIcon style={iconStyle}/>,
        subNavFlag:false,
        
    },
    {
        id:4,
        title:"Group Tasks",
        icon:<ManageSearchIcon style={iconStyle}/>,
        subNavFlag:false,
        
    },
    ,
    {
        id:4,
        title:"Report",
        icon:<PersonSearchIcon style={iconStyle}/>,
        subNavFlag:false,
        
    },
    {
        id:5,
        title:"Module Administration",
        icon:<AssessmentIcon style={iconStyle}/>,    
        subNavFlag:false,  
        subNav: [
            {
                title:"User Management",
                icon:<AccountBalanceIcon style={iconStyle}/>,
                to:"/user"
            }, {
                title:"Support",
                icon:<AccountBalanceIcon style={iconStyle}/>,
                to:"/support"
            }
        ]  
    }
   
]