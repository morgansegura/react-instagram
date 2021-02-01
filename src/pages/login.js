import React from 'react'
import { Link } from 'react-router-dom'
import { useLoginPageStyles } from '../styles'
import SEO from '../components/shared/Seo'
import {
    Button,
    Card,
    CardHeader,
    TextField,
    Typography,
} from '@material-ui/core'

import FacebookIconBlue from '../images/facebook-icon-blue.svg'
import FacebookIconWhite from '../images/facebook-icon-white.png'

function LoginPage() {
    const classes = useLoginPageStyles()

    return (
        <>
            <SEO title="Login" />
            <section className={classes.section}>
                <article className={classes.article}>
                    <Card className={classes.card}>
                        <CardHeader className={classes.cardHeader} />
                        <form>
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Username"
                                margin="dense"
                                className={classes.textField}
                                autoComplete="username"
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Password"
                                type="password"
                                margin="dense"
                                className={classes.textField}
                                autoComplete="current-password"
                            />
                            <Button
                                variant="contained"
                                fullWidth
                                color="primary"
                                className={classes.button}
                                type="submit"
                            >
                                Log In
                            </Button>
                        </form>
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
                        <LoginWithFacebook color="secondary" iconColor="blue" />
                        <Button fullWidth color="secondary">
                            <Typography variant="caption">
                                Forgot Password?
                            </Typography>
                        </Button>
                    </Card>
                    <Card className={classes.signUpCard}>
                        <Typography align="right" variant="body2">
                            Don't have an account?
                        </Typography>
                        <Link to="/accounts/emailsignup">
                            <Button
                                color="primary"
                                className={classes.signUpButton}
                            >
                                Sign up
                            </Button>
                        </Link>
                    </Card>
                </article>
            </section>
        </>
    )
}

function LoginWithFacebook({ color, iconColor }) {
    const classes = useLoginPageStyles()

    const facebookIcon =
        iconColor === 'blue' ? FacebookIconBlue : FacebookIconWhite

    return (
        <Button fullWidth color={color}>
            <img
                src={facebookIcon}
                alt="Facebook icon"
                className={classes.facebookIcon}
            />
            Log In with Facebook
        </Button>
    )
}

export default LoginPage
