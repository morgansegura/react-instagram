import React from 'react'
import { useFeedSideSuggestionsStyles } from '../../styles'
import { Paper, Typography } from '@material-ui/core'
import { getDefaultUser } from '../../data'
import UserCard from '../shared/UserCard'
import FollowButton from '../shared/FollowButton'

function FeedSideSuggestions({ user }) {
    const classes = useFeedSideSuggestionsStyles()

    return (
        <article className={classes.article}>
            <Paper className={classes.paper}>
                <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    component="h2"
                    gutterBottom
                    className={classes.typography}
                >
                    Suggestion For You
                </Typography>
                {Array.from({ length: 5 }, () => getDefaultUser()).map(
                    (user) => (
                        <div key={user.id} className={classes.card}>
                            <UserCard user={user} />
                            <FollowButton side />
                        </div>
                    )
                )}
            </Paper>
        </article>
    )
}

export default FeedSideSuggestions
