import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        'text-align': 'center'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        'text-align': 'center'
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

const RegisterView = ({classes}) => (
    <form action="">
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input id="name-input"/>
            <FormHelperText>Alignment with an input</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input id="email-input"/>
            <FormHelperText>Email (optional)</FormHelperText>
        </FormControl>
        <Grid>
            <Button>Submit</Button>
        </Grid>
    </form>);

RegisterView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterView);
