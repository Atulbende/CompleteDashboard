import Dashboard from "../../Application/Dashboard/Dashboard";
import Keyword from '../../Application/Keyword/Keyword'

export const  Menu=[ {
    title:'Dashboard',
    icon:'fa fa-tachometer',
    link:'/dashboard',
    component:<Dashboard/>,
    isClickable:true,
    access:[1,2]
},
{
    title:'Keyword',
    icon:'fa fa-address-card',
    link:'/keyword',
    component:<Keyword/>,
    isClickable:true,
    access:[3,4]
},
]