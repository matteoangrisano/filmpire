import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, List, ListItem, ListItemButton, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import genreIcon from '../../assets/genres';

const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { data, error, isFetching } = useGetGenresQuery();
    const dispatch = useDispatch();

    return (
        <>
            <Link to='/' className={classes.imageLink}>
                <img className={classes.image} src={theme.palette.mode === 'light' ? redLogo : blueLogo} alt='Filmpire logo' />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {categories.map(({ label, value }) => (
                    <Link key={value} className={classes.links} to='/'>
                        <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
                            <ListItemIcon>
                                <img src={genreIcon[label.toLowerCase()]} className={classes.genreImages} height={30} />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
            <List>
                <ListSubheader>Genres</ListSubheader>
                {isFetching ? (
                    <Box display='flex' justifyContent={'center'}>
                        <CircularProgress size='4rem' />
                    </Box>
                ) : (
                    data.genres.map(({ name, id }) => (
                        <Link key={name} className={classes.links} to='/'>
                            <ListItemButton onClick={() => {}}>
                                {
                                    <ListItemIcon>
                                        <img src={genreIcon[name.toLowerCase()]} className={classes.genreImages} height={30} />
                                    </ListItemIcon>
                                }
                                <ListItemText primary={name} />
                            </ListItemButton>
                        </Link>
                    ))
                )}
            </List>
        </>
    );
};

export default Sidebar;
