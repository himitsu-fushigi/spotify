import React from 'react'
import './Footer.css'

import {PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown} from '@material-ui/icons'
import { Grid, Slider } from '@material-ui/core'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://pyxis.nymag.com/v1/imgs/7bb/ad7/6f403b15c02e52b3f7fa4b0d47546aaf1b-12-usher.rsquare.w1200.jpg" alt="" />
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>

            {/* center */}
            <div className="footer__center">
                <Shuffle className="footer__green"/>
                <SkipPrevious className="footer__icon"/>
                <PlayCircleOutline fontSize="large" className="footer__icon"/>
                <SkipNext className="footer__icon"/>
                <Repeat className="footer__green"/>
            </div>

            {/* Volume controls */}
            <div className="footer__right">
                <Grid container spaceing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>

                    <Grid item>
                        <VolumeDown style={{marginRight: "10px"}}/>
                    </Grid>

                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
