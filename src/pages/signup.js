import React from 'react'
import { Link } from 'react-router-dom'
import { useSignUpPageStyles, useLoginPageStyles } from '../styles'
import SEO from '../components/shared/Seo'
import { Button, Card, TextField, Typography } from '@material-ui/core'

import FacebookIconBlue from '../images/facebook-icon-blue.svg'
import FacebookIconWhite from '../images/facebook-icon-white.png'

function SignUpPage() {
    const classes = useSignUpPageStyles()

    return (
        <>
            <SEO title="Sign up" />
            <section className={classes.section}>
                <article className={classes.article}>
                    <Card className={classes.card}>
                        <div className={classes.cardHeader} />
                        <Typography className={classes.cardHeaderSubHeader}>
                            Sign up to see photos and videos from your friends.
                        </Typography>
                        <LoginWithFacebook
                            color="primary"
                            iconColor="white"
                            variant="contained"
                        />
                        <div className={classes.orContainer}>
                            <div className={classes.orLine} />
                            <div>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    Or
                                </Typography>
                            </div>
                            <div className={classes.orLine} />
                        </div>
                        <form>
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Email"
                                type="email"
                                margin="dense"
                                className={classes.textField}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Full Name"
                                margin="dense"
                                className={classes.textField}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Username"
                                type="text"
                                className={classes.textField}
                                autoComplete="username"
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Password"
                                margin="dense"
                                className={classes.textField}
                                autoComplete="new-password"
                            />
                            <Button
                                variant="contained"
                                fullWidth
                                color="primary"
                                className={classes.button}
                                type="submit"
                            >
                                Sign up
                            </Button>
                        </form>
                    </Card>
                    <Card className={classes.loginCard}>
                        <Typography align="right" variant="body2">
                            Have an account?
                        </Typography>
                        <Link to="/accounts/login">
                            <Button
                                color="primary"
                                className={classes.loginButton}
                            >
                                Login In
                            </Button>
                        </Link>
                    </Card>
                </article>
            </section>
        </>
    )
}

function LoginWithFacebook({ color, iconColor, variant }) {
    const classes = useLoginPageStyles()

    const facebookIcon =
        iconColor === 'blue' ? FacebookIconBlue : FacebookIconWhite

    return (
        <Button fullWidth color={color} variant={variant}>
            <img
                src={facebookIcon}
                alt="Facebook icon"
                className={classes.facebookIcon}
            />
            Log In with Facebook
        </Button>
    )
}

export default SignUpPage
