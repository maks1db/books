import { withStyles } from 'material-ui/styles';
import React, { PureComponent } from 'react';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

const style = {
    btn: {
        position: 'fixed',
        bottom: '30px',
        right: '30px'
    }
};

class NewItem extends PureComponent {
    handleClick = () => {
        const { type, onClick } = this.props;
        onClick(`/entity/${type}/new`);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.btn}>
                <Button
                    variant="fab"
                    color="secondary"
                    onClick={this.handleClick}
                >
                    <AddIcon />
                </Button>
            </div>
        );
    }
}

export default withStyles(style)(NewItem);
