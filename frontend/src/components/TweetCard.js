import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import UserProfileModal from './modals/UserProfileModal';
import { Button } from '@mui/material';
import TweetCarouselModal from './modals/TweetCarouselModal';

const TweetCard = ({tweet, array, key}) => {
    return (
        <Card sx={{ marginTop: 2 }}>
            <CardHeader
                avatar={
                    <UserProfileModal id={tweet.author_id}>
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {tweet.author_id}
                        </Avatar>
                    </UserProfileModal>
                }
            />
            {/* {
                tweet.entities.urls.images && (
                    <CardMedia
                        component="img"
                        height="194"
                        image={tweet.entities?.urls[0]?.images[0].url}
                        alt="Paella dish"
                    />
                )
            } */}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {tweet.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TweetCard;
