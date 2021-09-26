import React from 'react'
import { Contato } from './contato'
import { 
    Avatar, 
    Grid, 
    List, 
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';

interface ContatosListProps{
    list: Contato[];
    onDelete: (contato: Contato) => void;
}

export const ContatosList: React.FC<ContatosListProps> = ({
    list,
    onDelete
} : ContatosListProps) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <List >
                    {
                        list.map( (contato: Contato) => {
                            return (
                                <ListItem key={contato.id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AccountCircleIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={contato.nome} 
                                                  secondary={`Idade: ${contato.idade}`} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" onClick={ () => onDelete(contato) }>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Grid>
        </Grid>
    )
}