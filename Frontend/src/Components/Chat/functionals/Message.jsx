import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { format } from 'timeago.js'
import { useSelector } from 'react-redux';
import {useEffect} from 'react';


const Message = ({ name, message, profile, date, type }) => {
    const { myProfileData } = useSelector(state => state)
    // console.log(myProfileData?.data[0].profile, 'mi perfil los datos')
    // const me = useRef(null);
    useEffect(()=>{

        if (profile === null || profile === undefined){
           
           // profile=myProfileData?.data[0].profile
           
        }
        //  me.current = myProfileData?.data[0];
        // socket.current.on("getUsers", users=>{console.log(users, 'usuarios conectados')})       
    }, [myProfileData])
    switch (type) {
        case "own":
            return (
                <ListItem alignItems="flex-start"
                 sx={{ flexDirection: 'row-reverse', textAlign: 'right', marginBottom: 1 }}
                >
                    <ListItemAvatar sx={{ marginRight: 0, marginLeft: 2 }}>
                        <Avatar alt={name} 
                        src={profile?.includes('uploads')?`${process.env.REACT_APP_PUERTO}`+ profile : profile} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={message}
                        secondary={
                            <>

                                <Typography
                                    sx={{ display: 'inline', marginRight: 2, fontWeight: 'bold' }}
                                    component="span"
                                    variant="subtitle2"
                                    color="text.primary"
                                >
                                    {name}
                                </Typography>

                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="subtitle2"
                                    color="text.primary"
                                >
                                    {format(date)}
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
            )
        case "friend":
            return (
                <ListItem alignItems="flex-start" sx={{ bgcolor: "#00666622", borderRadius: 2, marginBottom: 1 }}>
                    <ListItemAvatar>
                        <Avatar alt={name} src={profile?.includes('uploads')?`${process.env.REACT_APP_PUERTO}`+ profile : profile} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={message}
                        secondary={
                            <>

                                <Typography
                                    sx={{ display: 'inline', marginRight: 2, fontWeight: 'bold' }}
                                    component="span"
                                    variant="subtitle2"
                                    color="text.primary"
                                >
                                    {name}
                                </Typography>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="subtitle2"
                                    color="text.primary"
                                >
                                    {format(date, 'en_US')}
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
            )
            default : return (<></>)
    }

};

export default Message;
