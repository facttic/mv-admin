import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  SaveButton,
  Toolbar,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  BooleanInput,
  ImageInput,
  ImageField,
  SelectInput,
  TextField,
  useNotify,
  useRefresh,
  useRedirect,
  NumberInput,
  useGetOne,
  useTranslate
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ColorInput } from "react-admin-color-input";

const minLength = (min) => (value) => {
  if (value && value.length < min) {
    return "Debe tener mas de " + min + " caracteres";
  }
};

const UserEditToolbar = ({ invalid, ...props }) => (
  <Toolbar {...props}>
    <SaveButton redirect={false} submitOnEnter={false} disabled={invalid} />
  </Toolbar>
);

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    margin: theme.spacing(6, 6),
  },
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    columnGap: "16px",
  },
  column: {
    flexBasis: "33.33%",
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  align: {
    margin: "19px 0 8px",
    "& p": {
      display: "none",
    },
  },
  inputDate: {
    marginRight: theme.spacing(4),
  },
  buttonGoToWeb: {
    float: "right", 
    margin: theme.spacing(2, 8, 0),
  },
}));

export const ManifestationManage = (props) => {
  const classes = useStyles();
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const translate = useTranslate();

  const onFailure = (error) => {
    notify(`${error.message}`);
    redirect("/manifestations");
    refresh();
  };

  const manifestation = useGetOne("manifestations", props.id);

  const goToWeb = (e) => {
    const url = `http://${manifestation.data.uri}`;
    var win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <div>
      <Fab
        className={classes.buttonGoToWeb}
        source="uri"
        onClick={goToWeb}
        color="primary"
        title="Ver marcha"
        aria-label="delete"
      >
        <VisibilityIcon />
      </Fab>
      <Edit
        className={classes.container}
        onFailure={onFailure}
        undoable={false}
        title={
          <TextField
            class="MuiTypography-root makeStyles-title-5 MuiTypography-h6 MuiTypography-colorInherit"
            source="name"
            variant="standard"
          />
        }
        {...props}
      >
        <SimpleForm toolbar={<UserEditToolbar />}>
          <div className={classes.root}>
            {/*Header / Footer / Fechas */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Título y bajada / Footer / Fechas
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.root}>
                  <TextInput
                    source="title"
                    label="manifestation.management.title"
                    validate={[required(), minLength(3)]}
                    fullWidth={true}
                    variant="standard"
                  />
                  <TextInput
                    source="subtitle"
                    label="manifestation.management.subtitle"
                    validate={[required(), minLength(3)]}
                    fullWidth={true}
                    variant="standard"
                  />
                  <TextInput
                    source="description"
                    label="manifestation.management.description"
                    validate={[required(), minLength(3)]}
                    fullWidth={true}
                    variant="standard"
                  />
                  <TextInput
                    source="footer"
                    label="manifestation.management.footer"
                    validate={[required(), minLength(3)]}
                    fullWidth={true}
                    variant="standard"
                  />
                  <DateInput
                    className={classes.inputDate}
                    source="startDate"
                    label="manifestation.management.startDate"
                    validate={[required()]}
                    variant="standard"
                  />
                  <DateInput
                    source="endDate"
                    label="manifestation.management.endDate"
                    validate={[required(), minLength(3)]}
                    variant="standard"
                  />
                </div>
              </AccordionDetails>
            </Accordion>

            {/* Sponsors */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Sponsors</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ArrayInput
                  source="sponsors"
                  label="manifestation.management.sponsors.title"
                >
                  <SimpleFormIterator>
                    <TextInput
                      source="name"
                      label="manifestation.management.sponsors.name"
                      validate={[required()]}
                      fullWidth={true}
                    />
                    <TextInput
                      source="logoUri"
                      label="manifestation.management.sponsors.logoUri"
                      validate={[required()]}
                      fullWidth={true}
                    />
                    <TextInput
                      source="pageUri"
                      label="manifestation.management.sponsors.pageUri"
                      validate={[required()]}
                      fullWidth={true}
                    />
                  </SimpleFormIterator>
                </ArrayInput>
              </AccordionDetails>
            </Accordion>
            {/* Hashtags */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Hashtags</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ArrayInput
                  source="hashtags"
                  label="manifestation.management.hashtags.title"
                >
                  <SimpleFormIterator>
                    <TextInput
                      source="name"
                      label="manifestation.management.hashtags.name"
                      validate={[required()]}
                      className={classes.root}
                    />
                    <SelectInput
                      source="source"
                      label="manifestation.management.hashtags.source"
                      choices={[
                        { id: "twitter", name: "twitter" },
                        { id: "instagram", name: "instagram" },
                      ]}
                      className={classes.root}
                      validate={[required()]}
                    />
                  </SimpleFormIterator>
                </ArrayInput>
              </AccordionDetails>
            </Accordion>
            {/* Diseño */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Diseño</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <h4>Colores</h4>
                  <div className={classes.details}>
                    <ColorInput
                      source="styles.colors.background"
                      label="manifestation.management.styles.colors.background"
                    />
                    <ColorInput
                      source="styles.colors.accent"
                      label="manifestation.management.styles.colors.accent"
                    />
                    <TextInput
                      className={classes.align}
                      source="styles.text.title.font"
                      label="manifestation.management.styles.text.title.font"
                      variant="standard"
                      placeholder={translate("manifestation.management.styles.text.placeholder")}
                    />
                    <ColorInput
                      source="styles.text.title.color"
                      label="manifestation.management.styles.text.title.color"
                    />
                  </div>
                  <h4>Subtitulos</h4>
                  <div className={classes.details}>
                    <TextInput
                      className={classes.align}
                      source="styles.text.subtitle.font"
                      label="manifestation.management.styles.text.subtitle.font"
                      variant="standard"
                      placeholder={translate("manifestation.management.styles.text.placeholder")}
                    />
                    <ColorInput
                      source="styles.text.subtitle.color"
                      label="manifestation.management.styles.text.subtitle.color"
                    />
                  </div>
                  <h4>Body</h4>
                  <div className={classes.details}>
                    <TextInput
                      className={classes.align}
                      source="styles.text.body.font"
                      label="manifestation.management.styles.text.body.font"
                      variant="standard"
                      placeholder={translate("manifestation.management.styles.text.placeholder")}
                    />
                    <ColorInput
                      source="styles.text.body.color"
                      label="manifestation.management.styles.text.body.color"
                    />
                  </div>
                  <h4>Miniaturas</h4>
                  <div className={classes.details}>
                    <SelectInput
                      className={classes.align}
                      source="styles.thumbnails.columns"
                      label="manifestation.management.styles.thumbnails.columns"
                      choices={[
                        { id: 7, name: 7 },
                        { id: 8, name: 8 },
                        { id: 9, name: 9 },
                        { id: 10, name: 10 },
                      ]}
                      variant="standard"
                    />
                    <ColorInput
                      source="styles.thumbnails.colors.hover"
                      label="manifestation.management.styles.thumbnails.colors.hover"
                    />
                    <ColorInput
                      source="styles.thumbnails.colors.border"
                      label="manifestation.management.styles.thumbnails.colors.border"
                    />
                  </div>
                  <h4>Cards</h4>
                  <div className={classes.details}>
                    <BooleanInput
                      source="styles.cards.darkMode"
                      label="manifestation.management.styles.cards.darkmode"
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            {/* Metadata */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Metadata</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.root}>
                  <TextInput
                    source="metadata.title"
                    label="manifestation.management.metadata.title"
                    fullWidth={true}
                    variant="standard"
                  />
                  <TextInput
                    source="metadata.keywords"
                    label="manifestation.management.metadata.keywords"
                    fullWidth={true}
                    variant="standard"
                  />
                  <TextInput
                    source="metadata.description"
                    label="manifestation.management.metadata.description"
                    fullWidth={true}
                    variant="standard"
                  />
                </div>
              </AccordionDetails>
            </Accordion>
            {/* Imagenes */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Imagenes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <ImageInput
                    source="images.header"
                    label="manifestation.management.images.header"
                    multiple={false}
                    accept="image/*"
                    placeholder={<p>Drop your file here</p>}
                  >
                    <ImageField source="src" />
                  </ImageInput>
                  <ImageInput
                    source="images.background"
                    label="manifestation.management.images.background"
                    multiple={false}
                    accept="image/*"
                    placeholder={<p>Drop your file here</p>}
                  >
                    <ImageField source="src" />
                  </ImageInput>
                  <ImageInput
                    source="images.favicon"
                    label="manifestation.management.images.favicon"
                    multiple={false}
                    accept="image/*"
                    placeholder={<p>Drop your file here</p>}
                  >
                    <ImageField source="src" />
                  </ImageInput>
                  <h5>og</h5>
                  <ImageInput
                    source="images.og.twitter"
                    label="manifestation.management.images.og.twitter"
                    multiple={false}
                    accept="image/*"
                    placeholder={<p>Drop your file here</p>}
                  >
                    <ImageField source="src" />
                  </ImageInput>
                  <ImageInput
                    source="images.og.facebook"
                    label="manifestation.management.images.og.facebook"
                    multiple={false}
                    accept="image/*"
                    placeholder={<p>Drop your file here</p>}
                  >
                    <ImageField source="src" />
                  </ImageInput>
                </div>
              </AccordionDetails>
            </Accordion>
            {/* Configuración de Twitter */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Configuración de Twitter
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.root}>
                  <BooleanInput
                    source="config.twitter.active"
                    label="manifestation.management.config.twitter.active"
                    fullWidth={true}
                  />
                  <TextInput
                    source="config.twitter.scheduleSchema"
                    label="manifestation.management.config.twitter.scheduleSchema"
                    fullWidth={true}
                    variant="standard"
                  />
                  <NumberInput
                    source="config.twitter.maxTweets"
                    label="manifestation.management.config.twitter.maxTweets"
                    fullWidth={true}
                    variant="standard"
                  />
                  <NumberInput
                    source="config.twitter.maxTweets"
                    label="manifestation.management.config.twitter.maxTweetsPerQuery"
                    fullWidth={true}
                    variant="standard"
                  />
                  <div>Configuración de keys de API</div>
                  <TextInput
                    source="config.twitter.api.consumerKey"
                    label="manifestation.management.config.twitter.api.consumerKey"
                    fullWidth={true}
                    variant="standard"
                  />
                  <TextInput
                    source="config.twitter.api.consumerSecret"
                    label="manifestation.management.config.twitter.api.consumerSecret"
                    fullWidth={true}
                    variant="standard"
                  />
                  <TextInput
                    source="config.twitter.api.accessTokenKey"
                    label="manifestation.management.config.twitter.api.accessTokenKey"
                    fullWidth={true}
                    variant="standard"
                  />
                  <TextInput
                    source="config.twitter.api.accessTokenSecret"
                    label="manifestation.management.config.twitter.api.accessTokenSecret"
                    fullWidth={true}
                    variant="standard"
                  />
                </div>
              </AccordionDetails>
            </Accordion>
            {/* Configuración de Instagram */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Configuración de Instagram
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.root}>
                  <BooleanInput
                    source="config.instagram.active"
                    label="manifestation.management.config.instagram.active"
                    fullWidth={true}
                  />
                  <TextInput
                    source="config.instagram.scheduleSchema"
                    label="manifestation.management.config.instagram.scheduleSchema"
                    fullWidth={true}
                    variant="standard"
                  />
                  <NumberInput
                    source="config.instagram.maxPosts"
                    label="manifestation.management.config.instagram.maxPosts"
                    fullWidth={true}
                    variant="standard"
                  />
                  <div>Configuración de credenciales</div>
                  <TextInput
                    source="config.instagram.impersonate.username"
                    label="manifestation.management.config.instagram.impersonate.username"
                    fullWidth={true}
                    variant="standard"
                  />
                  <TextInput
                    source="config.instagram.impersonate.password"
                    label="manifestation.management.config.instagram.impersonate.password"
                    fullWidth={true}
                    variant="standard"
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </SimpleForm>
      </Edit>
    </div>
  );
};
