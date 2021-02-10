import * as React from 'react';
import { Logout } from 'react-admin';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// mas info en https://marmelab.com/react-admin/Theming.html#using-a-custom-menu
const SUMenu = ({ onMenuClick, logout, props }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    return (
        <div>
            {resources.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={
                        (resource.options && resource.options.label) ||
                        resource.name
                    }
                    leftIcon={
                        resource.icon ? <resource.icon /> : <DefaultIcon />
                    }
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}
            {isXSmall && logout}
            <Logout {...props} icon={<ExitToAppIcon/>} />
        </div>
    );
};

export default SUMenu;