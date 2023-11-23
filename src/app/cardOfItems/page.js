'use client'
import React, { useState } from "react";
import { Grid, Button, Box, Typography, Link } from "@mui/material";
import Modal from 'react-modal';

const CardOfItems = () => {
    const [count, setCount] = useState(0)
    const [open, setOpen] = useState(false)
    const [remove, setRemove] = useState(null)

    const closing = () => {
        setOpen(false)
    }
    const removing = () => {
        if (setRemove) {
            setCount(0)
            setOpen(false)
        }
    }

    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        if (count === 1) {
            setOpen(true)
            return
        } else if (count === 0) {
            alert('You have nothing to remove from this item')
            return
        }
        setCount(count - 1)
    }

    const items = [
        {
            img: '/men-jacket.webp',
            price: '$100',
        },
        {
            img: '/lady-jacket.jpeg',
            price: '$90',
        },
        {
            img: '/kids-jacket.jpeg',
            price: '$200',
        }
    ]


    return (
        <>
            <Box className='card-of-items'>
                <Modal
                    isOpen={open}
                >
                    <div
                        style={{
                            background: 'blue',
                            color: 'white',
                            width: '30%',
                            height: '40%',
                            margin: 'auto',
                            borderRadius: '20px',
                            padding: '20px 20px',
                        }}
                    >
                        <h4>Are you sure you want to remove this item?</h4>
                        <Button onClick={closing}
                            style={{
                                background: 'yellow',
                                color: 'black',
                            }}
                        >cancel</Button>

                        <Button onClick={removing} style={{
                            background: 'red',
                            color: 'white',
                            marginLeft: '10px'
                        }}>Remove</Button>
                    </div>
                </Modal>
                <Grid className="grid">
                    <Grid className="top-nav">
                        <Link className="home-link" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: 'white' }} width="50" height="50" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                        </Link>
                        <Grid className="cart">
                            <Typography>CART</Typography>
                        </Grid>
                        <Button className="cart-btn">
                            <span>{count ? count + count + count: null}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: 'white' }} width="25" height="25" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                        </Button>
                    </Grid>

                    <Grid className="its-banner">
                        {items.map((item, index) =>
                            <>
                                <div className="imgs-btns" key={index}>
                                    <div className="first-items">
                                        <img id="item-img" src={item.img} />
                                    </div>

                                    <div style={{ display: 'flex' }}>
                                        <div className="cart-btns">
                                            <div style={{ display: 'flex', color: 'white' }}>
                                                <h5 style={{marginLeft:'50px'}}> You have <strong style={{ color: 'orangered'}}>{count}</strong> of the specific item(s) selected</h5>
                                            </div>
                                            <Button
                                                style={{
                                                    background: 'green',
                                                    width: '80px',
                                                    color: 'white',
                                                    borderRadius: '19px',
                                                    marginLeft: '80px'
                                                }} onClick={increase}>ADD</Button>
                                            {/* <br /> */}
                                            <Button
                                                style={{
                                                    background: 'red',
                                                    color: 'white',
                                                    borderRadius: '19px',
                                                    marginLeft:'80px'
                                                }} onClick={decrease}>Remove</Button>

                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </Grid>
                    {/* <Button style={{textAlign:'center', margin:'auto'}}>add to cart</Button> */}
                </Grid>
            </Box>
        </>
    );
}

export default CardOfItems;