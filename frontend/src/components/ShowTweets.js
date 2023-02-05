import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from 'react';
import { Button, CardActions, Grid, ImageList, ImageListItem, Tabs } from '@mui/material';
import TweetCard from './TweetCard';
import TweetCarouselModal from './TweetCarouselModal';

const ShowTweets = ({ tweets }) => {

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        if(tweets.length) setValue(`${tweets.length}`);
    }, [tweets])

    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                            {tweets?.map((array, index) => (
                                <Tab key={index} label={`Tab ${index}`} value={`${index + 1}`} />
                            ))}
                        </Tabs>
                    </Box>
                    {tweets?.map((array, index) => (
                        <TabPanel key={index} value={`${index + 1}`}>
                            <Grid container spacing={2}>
                                {array.map(row => (
                                    <Grid item xs={3}>
                                        <div key={index}>
                                            <TweetCard tweet={row} />
                                            <TweetCarouselModal tweets={array} active={index}>
                                                <CardActions>
                                                    <Button size="small">Show</Button>
                                                </CardActions>
                                            </TweetCarouselModal>
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                        </TabPanel>
                    ))}
                </TabContext>
            </Box>
        </>
    )
}

export default ShowTweets
