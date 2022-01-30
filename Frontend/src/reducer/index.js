
import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE, GET_USER, GET_NAME, 
    PUT_UPLOUD_PROFILE, GET_MY_PROFILE, GET_USER_BY_ID, MY_PROFILE, CREATE_POST, GET_ALL_POSTS, 
    GET_FOLLOWS, GET_FOLLOWERS, FOLLOW_USER_BY_ID, GET_MY_POST, GET_MY_FRIENDS_POST,CLEAR_FOLLOW_USER_STATE, GET_MY_ID, CLEAR_MY_FOLLOW_STATE, SORT_BY_AZ, GET_CLEAN_FRIENDS, CLEAN_HOME} from "../actions/actionTypes"
    import { sortByAz } from "../actions"


const initialState = {

    users: [],
    profile: [],
    search:[],
    myprofile:{},
    myProfileData:[],
    allPost: [],
    follows:[],
    followers:[],
    followUser:[],
    myProfilePost:[],
    myFriendsPost: [],
    myId:[],
    sort:[]

}



export function rootReducer(state = initialState, action) {

    switch (action.type) {

        case GET_USER:
            return {
                ...state,
                users: action.payload,
            }
        case CLEAR_USERS_STATE:
            return {
                ...state,
                users:action.payload
            }
        case GET_USER_BY_ID:
            return{
                ...state,
                profile:action.payload
            }
        case CLEAR_PROFILE_STATE:
            return{
                ...state,
                profile:action.payload,
                followUser:action.payload
            }
        case GET_NAME:
            return{
                ...state,
                search:action.payload
            }       
            
        case  GET_MY_PROFILE:
            return{
                ...state,
                myprofile:action.payload
            }

            case  PUT_UPLOUD_PROFILE:
            return{
                ...state,
                myprofile:action.payload
            }
        case MY_PROFILE:
            return{
                ...state,
                myProfileData:action.payload
            }   
            case CREATE_POST:
            return{
                ...state
            }
            case GET_ALL_POSTS:
                return{
                    ...state,
                    allPost: action.payload
                }
            case GET_FOLLOWS:
                return{
                    ...state,
                    follows:action.payload
                }
            case GET_FOLLOWERS:
                return{
                    ...state,
                    followers:action.payload
                }
            case FOLLOW_USER_BY_ID:
                return{
                    ...state,
                    followUser:action.payload,
                } 
                case GET_MY_POST:
                    return{
                        ...state,
                        myProfilePost: action.payload,
                    }      
                case GET_MY_FRIENDS_POST:
                    return{
                        ...state,
                        myFriendsPost: action.payload,
                    }         
                
            case CLEAR_FOLLOW_USER_STATE:
                return{
                    ...state,
                    followUser:action.payload,
                }
            case GET_MY_ID:
                return{
                    ...state,
                    myId:action.payload,
                }
            case CLEAR_MY_FOLLOW_STATE:
                return{
                    ...state,
                    followers:action.payload,
                    follows:action.payload,
                }
            case SORT_BY_AZ:
                return{
                    ...state,
                    sort:state.followUser.sort(sortByAz)
                }                            
                      
                case GET_CLEAN_FRIENDS:
                    return{
                        ...state,
                        myFriendsPost:[],
                    }   
                    
                case CLEAN_HOME: 
                return{
                    ...state,
                    allPost:[],
                    myProfileData:[]
                }    
        default:
            return state
    }
}    
       