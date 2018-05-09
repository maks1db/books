import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    content: {
        padding: '0 16px'
    }
};

function mapStateToProps(state) {
    return {
        title: state.app.title
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

@connect(mapStateToProps, mapDispatchToProps)
class ButtonAppBar extends React.PureComponent {
    render() {
        const { classes, children, title } = this.props;
        return [
            <div className={classes.root} key="layout">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="title"
                            color="inherit"
                            className={classes.flex}
                        >
                            {title}
                        </Typography>
                        <Button color="inherit">Войти</Button>
                    </Toolbar>
                </AppBar>
            </div>,
            <div key="content" className={classes.content}>
                {children}
            </div>
        ];
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
