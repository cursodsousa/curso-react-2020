import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasToolbar, TarefasTable } from './components';
import axios from 'axios'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listar, salvar } from '../../store/tarefas'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const API_URL = 'https://minhastarefas-api.herokuapp.com/tarefas'
const headers = {'x-tenant-id' : 'fulano@email.com'}

const TarefaList = (props) => {
  const classes = useStyles();

  const alterarStatus = (id) => {
    axios.patch(`${API_URL}/${id}`, null, {
      headers: headers
    }).then( response => {
        console.log(response.status)
    }).catch( erro => {
      console.log(erro)
    })
  }

  useEffect(() => {
    props.listar();
  }, [] )

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={props.salvar} />
      <div className={classes.content}>
        <TarefasTable alterarStatus={alterarStatus} tarefas={props.tarefas} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tarefas: state.tarefas.tarefas   
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ salvar, listar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (TarefaList);
