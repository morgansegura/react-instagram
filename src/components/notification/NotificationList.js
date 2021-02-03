import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNotificationListStyles } from '../../styles'
import { defaultNotifications } from '../../data'
import { Avatar, Grid, Typography } from '@material-ui/core'
import FollowButton from '../shared/FollowButton'
import useOutsideClick from '@rooks/use-outside-click'

function NotificationList({ handleHideList }) {
	const classes = useNotificationListStyles()
	const listContainerRef = useRef()
	useOutsideClick(listContainerRef, handleHideList)

	return (
		<Grid className={classes.listContainer} container>
			{defaultNotifications.map(notification => {
				const isLike = notification.type === 'like'
				const isFollow = notification.type === 'follow'

				return (
					<Grid
						ref={listContainerRef}
						key={notification.id}
						item
						className={classes.listItem}>
						<div className={classes.listItemWrapper}>
							<div className={classes.avatarWrapper}>
								<Avatar
									src={notification.user.profile_image}
									alt='User'
								/>
							</div>
							<div className={classes.nameWrapper}>
								<Link to={`/${notification.user.username}`}>
									<Typography variant='body1'>
										{notification.user.username}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										className={classes.typography}>
										{isLike && `like your photo. 4d`}
										{isFollow &&
											`started following you. 4d`}
									</Typography>
								</Link>
							</div>
						</div>
						<div>
							{isLike && (
								<Link to={`/p/${notification.post.id}`}>
									<Avatar
										src={notification.post.media}
										alt='post cover'
									/>
								</Link>
							)}
							{isFollow && <FollowButton />}
						</div>
					</Grid>
				)
			})}
		</Grid>
	)
}

export default NotificationList
