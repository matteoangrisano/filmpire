import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
    moviesContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
}));

export default styles;
