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
    const [isNameValid, setisNameValid] = useState(true);
    const [isLastNameValid, setisLastNameValid] = useState(true);
    const [isEmailValid, setisEmailValid] = useState(true);
    const [isEmailConfirmed, setisEmailConfirmed] = useState(true);
    const { fb_addOrder, fb_getOrders, cartFirebaseProducts, orders } = useContext(CartContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleBuy = () => {
        const id = orders.length + 1;
        const order = {
            name: name,
            lastname: lastname,
            email: email,
            date: new Date().toLocaleString(),
            cart: cartFirebaseProducts
        }
        const orderArray = fb_addOrder(order, id.toString());
        cartClear();
        setnoProductMessage(
            "Estimado/a " + name + " " + lastname + ", su compra se ha realizado con éxito." +
            "\nEn breve recibirá un email a la dirección " + email + " con la confirmacion de sus productos." +
            "\n\nN° ORDEN: 0000" + id);
        setOpen(false);
    };


    const validateEmail = (value) => {
        let validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (value.match(validRegex)) {
            setisEmailValid(true);
        } else {
            setisEmailValid(false);
        }
    };

    const confirmEmail = (value) => {
        if (value === email) {
            setisEmailConfirmed(true);
        } else {
            setisEmailConfirmed(false);
        }
    }

    const validateName = (value) => {
        if (value !== "") {
            setisNameValid(true);
        } else {
            setisNameValid(false);
        }
    }
    const validateLastName = (value) => {
        if (value != "") {
            setisLastNameValid(true);
        } else {
            setisLastNameValid(false);
        }
    }

    // const validateInputs = () => {
    //     validateEmail(email);
    //     validateLastName(lastname);
    //     validateName(name);
    //     confirmEmail(emailConfirm);
    // }

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
                        error={!isNameValid}
                        helperText={!isNameValid ? "Ingrese un dato." : null}
                        margin="dense"
                        id="name"
                        label="Nombre"
                        type="name"
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={(e) => { setName(e.target.value); validateName(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        error={!isLastNameValid}
                        helperText={!isLastNameValid ? "Ingrese un dato." : null}
                        margin="dense"
                        id="lastname"
                        label="Apellido"
                        type="name"
                        fullWidth
                        variant="outlined"
                        value={lastname}
                        onChange={(e) => { setLastname(e.target.value); validateLastName(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        error={!isEmailValid}
                        helperText={!isEmailValid ? "Ingrese un email valido." : null}
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); validateEmail(e.target.value); confirmEmail(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        error={!isEmailConfirmed}
                        helperText={!isEmailConfirmed ? "Email no coincide." : null}
                        margin="dense"
                        id="name"
                        label="Confirmar Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={emailConfirm}
                        onChange={(e) => { setEmailConfirm(e.target.value); validateEmail(e.target.value); confirmEmail(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions sx={{ margin: "0 16px 20px 0" }}>
                    <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
                    <Button variant="outlined" onClick={handleBuy} disabled={!isEmailConfirmed || !isEmailValid || !isNameValid || !isLastNameValid}>Comprar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}