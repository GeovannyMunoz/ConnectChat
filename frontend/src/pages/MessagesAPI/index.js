import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { i18n } from "../../translate/i18n";
import { Button, CircularProgress, Grid, TextField, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import toastError from "../../errors/toastError";
import { toast } from "react-toastify";
import api from "../../services/api";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    flex: 1,
    padding: theme.spacing(2),
    paddingBottom: 100
  },
  mainHeader: {
    marginTop: theme.spacing(1),
  },
  elementMargin: {
    marginTop: theme.spacing(2),
  },
  formContainer: {
    maxWidth: 500,
  },
  textRight: {
    textAlign: "right"
  }
}));

const MessagesAPI = () => {
  const classes = useStyles();

  const [formMessageTextData,] = useState({ token: '',number: '', body: '' })
  const [formMessageMediaData,] = useState({ token: '', number: '', medias: '' })
  const [file, setFile] = useState({})

  const getEndpoint = () => {
    return process.env.REACT_APP_BACKEND_URL + '/api/messages/send'
  }

  const handleSendTextMessage = async (values) => {
    const { number, body } = values;
    const data = { number, body };
    var options = {
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_URL}/api/messages/send`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${values.token}`
      },
      data
    };
    
    axios.request(options).then(function (response) {
      toast.success('Mensagem enviada com sucesso');
    }).catch(function (error) {
      toastError(error);
    });    
  }

  const handleSendMediaMessage = async (values) => { 
    try {
      const firstFile =  file[0];
      const data = new FormData();
      data.append('number', values.number);
      data.append('body', firstFile.name);
      data.append('medias', firstFile);
      var options = {
        method: 'POST',
        url: `${process.env.REACT_APP_BACKEND_URL}/api/messages/send`,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${values.token}`
        },
        data
      };
      
      axios.request(options).then(function (response) {
        toast.success('Mensagem enviada com sucesso');
      }).catch(function (error) {
        toastError(error);
      });      
    } catch (err) {
      toastError(err);
    }
  }

  const renderFormMessageText = () => {
    return (
      <Formik
        initialValues={formMessageTextData}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          setTimeout(async () => {
            await handleSendTextMessage(values);
            actions.setSubmitting(false);
            actions.resetForm()
          }, 400);
        }}
        className={classes.elementMargin}
      >
        {({ isSubmitting }) => (
          <Form className={classes.formContainer}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Field
                  as={TextField}
                  label={i18n.t("messagesAPI.textMessage.token")}
                  name="token"
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  className={classes.textField}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  as={TextField}
                  label={i18n.t("messagesAPI.textMessage.number")}
                  name="number"
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  className={classes.textField}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label={i18n.t("messagesAPI.textMessage.body")}
                  name="body"
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  className={classes.textField}
                  required
                />
              </Grid>
              <Grid item xs={12} className={classes.textRight}>
                <Button
									type="submit"
									color="primary"
									variant="contained"
									className={classes.btnWrapper}
								>
									{isSubmitting ? (
										<CircularProgress
											size={24}
											className={classes.buttonProgress}
										/>
									) : 'Enviar'}
								</Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    )
  }

  const renderFormMessageMedia = () => {
    return (
      <Formik
        initialValues={formMessageMediaData}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          setTimeout(async () => {
           
            await handleSendMediaMessage(values);
            actions.setSubmitting(false);
            actions.resetForm()
            document.getElementById('medias').files = null
            document.getElementById('medias').value = null
          }, 400);
        }}
        className={classes.elementMargin}
      >
        {({ isSubmitting }) => (
          <Form className={classes.formContainer}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Field
                  as={TextField}
                  label={i18n.t("messagesAPI.mediaMessage.token")}
                  name="token"
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  className={classes.textField}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  as={TextField}
                  label={i18n.t("messagesAPI.mediaMessage.number")}
                  name="number"
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  className={classes.textField}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <input type="file" name="medias" id="medias" required onChange={(e) => setFile(e.target.files)} />
              </Grid>
              <Grid item xs={12} className={classes.textRight}>
                <Button
									type="submit"
									color="primary"
									variant="contained"
									className={classes.btnWrapper}
								>
									{isSubmitting ? (
										<CircularProgress
											size={24}
											className={classes.buttonProgress}
										/>
									) : 'Enviar'}
								</Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    )
  }

  return (
    <Paper
      className={classes.mainPaper}
      variant="outlined"
    >
      <Typography variant="h5">
        <b>{i18n.t("messagesAPI.title")}</b>
      </Typography>
      <Typography className={classes.elementMargin} component="div">
        <b>{i18n.t("messagesAPI.subtitle")}</b>
        </Typography>
      <Typography variant="h6" color="primary" className={classes.elementMargin}>
        {i18n.t("messagesAPI.methods.title")}
      </Typography>
      <Typography component="div">
        <ol>
          <li>{i18n.t("messagesAPI.methods.text")}</li>
          <li>{i18n.t("messagesAPI.methods.media")}</li>
        </ol>
      </Typography>
      <Typography variant="h6" color="primary" className={classes.elementMargin}>
        {i18n.t("messagesAPI.instructions.title")}
      </Typography>
      <Typography className={classes.elementMargin} component="div">
        <b>{i18n.t("messagesAPI.instructions.subtitle")}</b><br />
        <ul>
          <li>{i18n.t("messagesAPI.instructions.instruction1")} <br/> {i18n.t("messagesAPI.instructions.instruction1_1")}</li>
          <li>
            {i18n.t("messagesAPI.instructions.instruction2")}
              <ul>
                <li>{i18n.t("messagesAPI.instructions.instruction2_1")}</li>
                <li>{i18n.t("messagesAPI.instructions.instruction2_2")}</li>
              </ul>
          </li>
        </ul>
      </Typography>
      <Typography variant="h6" color="primary" className={classes.elementMargin}>
        1. {i18n.t("messagesAPI.methods.text")}
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.elementMargin} component="div">
            <p>{i18n.t("messagesAPI.methods.descriptionText")}</p>
            <b>Endpoint: </b> {getEndpoint()} <br />
            <b>Método: </b> POST <br />
            <b>Headers: </b> X_TOKEN (token) e Content-Type (application/json) <br />
            <b>Body: </b> {"{ \"number\": \"XXXXXXXXXXXXX\", \"body\": \"Messsage\" }"}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.elementMargin}>
            <b>{i18n.t("messagesAPI.test")}</b>
          </Typography>
          {renderFormMessageText()}
        </Grid>
      </Grid>
      <Typography variant="h6" color="primary" className={classes.elementMargin}>
        2. {i18n.t("messagesAPI.methods.media")}
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.elementMargin} component="div">
            <p>{i18n.t("messagesAPI.methods.descriptionMedia")}</p>
            <b>Endpoint: </b> {getEndpoint()} <br />
            <b>Método: </b> POST <br />
            <b>Headers: </b> X_TOKEN (token) e Content-Type (multipart/form-data) <br />
            <b>FormData: </b> <br />
            <ul>
              <li>
                <b>number: </b> XXXXXXXXXXXXX
              </li>
              <li>
                <b>media: </b> {i18n.t("messagesAPI.methods.file")}
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.elementMargin}>
            <b>{i18n.t("messagesAPI.test")}</b>
          </Typography>
          {renderFormMessageMedia()}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MessagesAPI;