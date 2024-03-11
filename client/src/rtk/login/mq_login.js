import {apiSlice} from '../apiSlice';
import {user} from '../../services/api/endPoints';
export const mq_login= apiSlice.injectEndpoints({
    endpoints:(build)=>({
        userLogin:build.mutation({
            query:({data})=>({
                url:user.user_login,
                method:'POST',
                data:data
            })
        }),
        UserSingup:build.mutation({
            query:({data})=>({
                url:user.user_singup,
                method:'POST',
                data:data
            })
        }),
        UserLogout:build.mutation({
            query:()=>({
                url:user.user_logout,
                method:'POST',
                data:''
            })
        })
    })
}); 
export const {
    useUserLoginMutation,
    useUserSingupMutation,
    useUserLogoutMutation
}=mq_login