import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { CartContext } from '../../contexts/CartContextProvider';
import { useContext } from 'react';

export default function FormDialog({ setnoProductMessage, cartClear }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const { fb_addOrder, fb_getOrders, cartFirebaseProducts } = useContext(CartContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleBuy = () => {
        let id = 0;
        const orders = fb_getOrders();
        orders.length === 0 ? id = 1 : id = orders.length + 1;
        id = id.toString();
        const order = { name: name, lastname: lastname, email: email, cart: cartFirebaseProducts }
        const orderArray = fb_addOrder(order, id);
        cartClear();
        setnoProductMessage("Estimado/a " + name + " " + lastname + ", su compra N° " + orderArray.id + " se ha realizado con éxito. En breve recibirá un mail a la dirección " + email + " con los detalles.");
        setOpen(false);
    };


    const validateRecipientEmail = (value) => {
        let currentEmails = value.split(',').filter((e) => e && e.trim());
        let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;
        for (let i = 0; i < currentEmails.length; i++) {
            if (!regex.test(currentEmails[i].replace(/\s/g, ''))) {
                setrecipientEmailErrorMessage(
                    `Enter valid Email(s) seperated by comma (,)`
                );
                setError('recipientEmail', {
                    type: 'manual',
                });
            }
        }

        if (currentEmails.length > 10) {
            setrecipientEmailErrorMessage(`Emails should not be more than 10`);
            setError('recipientEmail', {
                type: 'manual',
            });
        }
    };


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Comprar
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>¡Ya estas muy cerca!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Solo necesitamos algunos datos para poder terminar tu compra.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre"
                        type="name"
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lastname"
                        label="Apellido"
                        type="name"
                        fullWidth
                        variant="outlined"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Confirmar Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={emailConfirm}
                        onChange={(e) => setEmailConfirm(e.target.value)}
                    />
                </DialogContent>
                <DialogActions sx={{ margin: "0 16px 20px 0" }}>
                    <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
                    <Button variant="outlined" onClick={handleBuy}>Comprar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}