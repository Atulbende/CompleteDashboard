import Dashboard from "../../Application/Dashboard/Dashboard";
import Keyword from '../../Application/Keyword/Keyword'
import Roles from '../../Application/administration/Roles'

export const  Menu=[ 
    {title:'Dashboard',icon:'fa fa-tachometer',link:'/Dashboard',component:<Dashboard/>,access:[1,2]},
    {title:'Administration',icon:'fa fa-address-card', access:[5,6],
        subMenu:[
                {title:'User Role',  link:'/roles',   component:<Roles/>, access:[5,6]},
                {title:'Keyword',    link:'/Keyword', component:<Keyword/>,access:[1,2,3,4]}
        ]},
]
export const  Routers=[ 
    {title:'Dashboard',link:'/dashboard',component:<Dashboard/>,access:[1,2]},
    {title:'Keyword', link:'/Keyword', component:<Keyword/>,access:[3,4]},
    {title:'User Role', link:'/roles',   component:<Roles/>, access:[5,6]}
]