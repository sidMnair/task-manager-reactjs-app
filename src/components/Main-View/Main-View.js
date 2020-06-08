import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import userIcon from '../../assets/user-icon.jpg';
import DragDropComponent from '../../containers/DD-Container/DD-Container';
import AddTask from '../../containers/Add-Task';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import './Main-View.css';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import AppsOutlined from '@material-ui/icons/AppsOutlined'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { HomeOutlined, CalendarTodayOutlined, SearchOutlined, QueryBuilderOutlined, PermIdentityOutlined, ArrowBack, SettingsOutlined, NotificationsNoneOutlined } from '@material-ui/icons'
import './Main-View.css';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'white',
        color: theme.color,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        color: 'black',
        backgroundColor: '#fff'
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,

        }),
        backgroundColor: '#0068ff',
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        backgroundColor: '#0068ff',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1)
    },
    dropDown: {
        display: 'flex',
        marginTop: '12px',
        justifyContent: 'space-around'
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    icon: {
        color: '#fff'
    },
    badge: {
        paddingRight: '12px'
    }
}));

function MainView(props) {

    const [showModal, setShowModal] = useState(false);
    const handleonOpenDialog = (event) => {
        setShowModal(!showModal);
    }

    const handleonCloseDialog = () => {
        setShowModal(!showModal);
    }
    const classes = useStyles();
    const theme = useTheme('colorTransparen');
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const defaultProps = {
        color: 'secondary',
        children: < NotificationsNoneOutlined />,
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="header-nav">
                        <div className="icon-wrapper back-arrow-icon">
                            <div className="left-arrow-icon"><ArrowBack /> </div>
                            <div className="text-icon">All Projects</div>
                        </div>
                        <div className="project-title">
                            <strong><span>Supermassive Black Hole</span></strong>
                            <div className="icon-wrapper project-title-icon">
                                {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                            </div>
                        </div>
                        <div className="user-spec-icons">
                            <div className={classes.badge}>
                                <SearchOutlined />
                            </div>
                            <div className={classes.badge}>
                                <Badge badgeContent={7} {...defaultProps} />
                            </div>
                            <div>
                                <Avatar alt="Remy Sharp" src={userIcon} />
                            </div>
                        </div>

                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.icon}>
                    <ListItem button style={{ paddingLeft: '22px' }}>
                        <ListItemIcon><HomeOutlined className={classes.icon} style={{ transform: 'scale(0.9)' }} /> </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <ListItem button style={{ backgroundColor: '#0655c7', paddingLeft: '22px' }}>
                        <ListItemIcon><AppsOutlined className={classes.icon} style={{ transform: 'scale(1.2)' }} /> </ListItemIcon>
                        <ListItemText primary={'App'} />
                    </ListItem>
                    <ListItem button style={{ paddingLeft: '22px' }}>
                        <ListItemIcon><CalendarTodayOutlined className={classes.icon} style={{ transform: 'scale(0.9)' }} /> </ListItemIcon>
                        <ListItemText primary={'Calender'} />
                    </ListItem>
                    <ListItem button style={{ paddingLeft: '22px' }}>
                        <ListItemIcon><QueryBuilderOutlined className={classes.icon} style={{ transform: 'scale(0.9)' }} /> </ListItemIcon>
                        <ListItemText primary={'Clock'} />
                    </ListItem>
                    <ListItem button style={{ paddingLeft: '22px' }}>
                        <ListItemIcon><PermIdentityOutlined className={classes.icon} style={{ transform: 'scale(0.9)' }} /> </ListItemIcon>
                        <ListItemText primary={'User'} />
                    </ListItem>
                    <ListItem button style={{ paddingLeft: '22px' }}>
                        <ListItemIcon><SettingsOutlined className={classes.icon} style={{ transform: 'scale(0.9)' }} /> </ListItemIcon>
                        <ListItemText primary={'Setting'} />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.dropDown}>
                    <DragDropComponent></DragDropComponent>
                    <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleonOpenDialog} >
                        <AddIcon />
                    </Fab>
                </div>
                <AddTask closeModal={handleonCloseDialog} showModal={showModal}></AddTask>
            </main>


        </div>);
}

export default MainView;