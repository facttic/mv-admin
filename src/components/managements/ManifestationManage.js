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
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
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
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const ManifestationManage = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <Edit
      undoable={false}
      title={
        <TextField
          class="MuiTypography-root makeStyles-title-5 MuiTypography-h6 MuiTypography-colorInherit"
          source="title"
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
                Header / Footer / Fechas
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <TextInput
                  source="title"
                  label="manifestation.management.title"
                  validate={[required(), minLength(3)]}
                  fullWidth={true}
                />
                <TextInput
                  source="subtitle"
                  label="manifestation.management.subtitle"
                  validate={[required(), minLength(3)]}
                  fullWidth={true}
                />
                <TextInput
                  source="description"
                  label="manifestation.management.description"
                  validate={[required(), minLength(3)]}
                  fullWidth={true}
                />
                <TextInput
                  source="footer"
                  label="manifestation.management.footer"
                  validate={[required(), minLength(3)]}
                  fullWidth={true}
                />
                <DateInput
                  source="startDate"
                  label="manifestation.management.startDate"
                  validate={[required()]}
                />
                <DateInput
                  source="endDate"
                  label="manifestation.management.endDate"
                  validate={[required(), minLength(3)]}
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
              <div>
                <TextInput
                  source="metadata.title"
                  label="manifestation.management.metadata.title"
                  className={classes.root}
                />
                <TextInput
                  source="metadata.keywords"
                  label="manifestation.management.metadata.keywords"
                  className={classes.root}
                />
                <TextInput
                  source="metadata.description"
                  label="manifestation.management.metadata.description"
                  className={classes.root}
                />
              </div>
            </AccordionDetails>
          </Accordion>
          {/* Estilos */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Estilos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <h4>Colores</h4>
                <ColorInput
                  source="styles.colors.background"
                  label="manifestation.management.styles.colors.background"
                />
                <ColorInput
                  source="styles.colors.accent"
                  label="manifestation.management.styles.colors.accent"
                />
                <TextInput
                  source="styles.text.title.font"
                  label="manifestation.management.styles.text.title.font"
                  className={classes.root}
                />
                <ColorInput
                  source="styles.text.title.color"
                  label="manifestation.management.styles.text.title.color"
                />
                <h5>Subtitulos</h5>
                <TextInput
                  source="styles.text.subtitle.font"
                  label="manifestation.management.styles.text.subtitle.font"
                  className={classes.root}
                />
                <ColorInput
                  source="styles.text.subtitle.color"
                  label="manifestation.management.styles.text.subtitle.color"
                />
                <h5>Body</h5>
                <TextInput
                  source="styles.text.body.font"
                  label="manifestation.management.styles.text.body.font"
                  className={classes.root}
                />
                <ColorInput
                  source="styles.text.body.color"
                  label="manifestation.management.styles.text.body.color"
                  className={classes.root}
                />
                <h4>Thumbnails</h4>
                <SelectInput
                  source="styles.thumbnails.columns"
                  label="manifestation.management.styles.thumbnails.columns"
                  choices={[
                    { id: 7, name: 7 },
                    { id: 8, name: 8 },
                    { id: 9, name: 9 },
                    { id: 10, name: 10 },
                  ]}
                  className={classes.root}
                />
                <h5>Colors</h5>
                <ColorInput
                  source="styles.thumbnails.colors.hover"
                  label="manifestation.management.styles.thumbnails.colors.hover"
                  className={classes.root}
                />
                <ColorInput
                  source="styles.thumbnails.colors.border"
                  label="manifestation.management.styles.thumbnails.colors.border"
                  className={classes.root}
                />
                <h4>Cards</h4>
                <BooleanInput
                  source="styles.cards.darkMode"
                  label="manifestation.management.styles.cards.darkmode"
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
        </div>
      </SimpleForm>
    </Edit>
  );
};
