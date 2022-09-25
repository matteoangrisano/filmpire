import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
    movie: {
        padding: '10px',
    },
    links: {
        alignItems: 'center',
        fontWeight: 'bolder',
        textDecoration: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        '&:hover': {
            cursor: 'pointer',
        },
    },
    image: {
        borderRadius: '20px',
        height: '300px',
        marginBottom: '10px',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    title: {
        color: theme.palette.text.primary,
        textOverFlow: 'ellipsis',
        width: '230px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center',
    },
}));

export default styles;
