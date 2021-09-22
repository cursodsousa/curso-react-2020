import React from 'react'
import { Contato } from './contato'
import { 
    Avatar, 
    Grid, 
    List, 
    ListItem,
    ListItemAvatar,
    ListItemText
} from '@material-ui/core'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

interface ContatosListProps{
    list: Contato[];
}

export const ContatosList: React.FC<ContatosListProps> = ({
    list
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
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Grid>
        </Grid>
    )
}