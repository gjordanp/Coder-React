import { StopCircleSharp } from '@mui/icons-material'
import { LinearProgress, Typography } from '@mui/material'
import React from 'react'
import styles from './onhovercard.module.css'
import { red } from '@mui/material/colors'
import Fade from '@mui/material/Fade';


function OnHoverCard({ product, hover, canHover }) {
    if (!canHover) return null;
    return (
        <Fade in={hover} timeout={500}>
            <div className={styles.hoverCard}>
                {Object.entries(product.characteristics).map(([key, value], index) => {//console.log(key);
                    return (
                        <div key={index}>
                            <span style={{ color: "#fafafa", fontSize: "0.8rem", fontWeight: 800 }}>
                                {key}
                            </span>
                            <LinearProgress variant="determinate" value={value * 100} sx={{ height: 6, borderRadius: 6, backgroundColor: "gray", color: { red } }} />
                        </div>
                    )
                })}
            </div>
        </Fade>
    )
}

export default OnHoverCard