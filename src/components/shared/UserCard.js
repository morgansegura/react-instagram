import React from 'react'
import { Link } from 'react-outer-dom'
import { useUserCardStyles } from '../../styles'
import { Avatar, Typography } from '@material-ui/core'

function UserCard({ user }) {
    const classes = useUserCardStyles()
    const { username, profile_image } = user

    return (
        <div className={classes.wrappers}>
            <Link to={`/${username}`}>
                <Avatar
                    src={profile_image}
                    alt="User avatar"
                    className={classes.avatar}
                />
            </Link>
            <div className={classes.nameWrapper}>
                <Link to={`/${username}`}>
                    <Typography
                        variant="subtitle2"
                        className={classes.typography}
                    >
                        {username}
                    </Typography>
                </Link>
                <Typography
                    color="textSecondary"
                    variant="body2"
                    className={classes.typography}
                >
                    name
                </Typography>
            </div>
        </div>
    )
}

export default UserCard
