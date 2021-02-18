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
  NumberInput,
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

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
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
  console.log("man user props", props);
  return (
    <Edit undoable={false} title="Gestionando Marcha" {...props}>
      <SimpleForm toolbar={<UserEditToolbar />}>
        <TextInput
          source="title"
          label="manifestation.management.title"
          validate={[required(), minLength(3)]}
        />
        <TextInput
          source="subtitle"
          label="manifestation.management.subtitle"
          validate={[required(), minLength(3)]}
        />
        <TextInput
          source="description"
          label="manifestation.management.description"
          validate={[required(), minLength(3)]}
        />
        <TextInput
          source="footer"
          label="manifestation.management.footer"
          validate={[required(), minLength(3)]}
        />
        <ArrayInput
          source="sponsors"
          label="manifestation.management.sponsors.title"
        >
          <SimpleFormIterator>
            <TextInput
              source="name"
              label="manifestation.management.sponsors.name"
            />
            <TextInput
              source="logoUri"
              label="manifestation.management.sponsors.logoUri"
            />
            <TextInput
              source="pageUri"
              label="manifestation.management.sponsors.pageUri"
            />
          </SimpleFormIterator>
        </ArrayInput>
        {/*
        <ReferenceManyField
            reference={"manifestations/"+props.id+"/hashtags"}
            target="id"
            label="Hashtags"
          >
            <List title="Hashtags"
              exporter={false}
              bulkActionButtons={false}
              {...props}>
            <Datagrid>
              <TextField source="name" />
              <TextField source="source" />
              <EditButton />
            </Datagrid>
            </List>
          </ReferenceManyField>
        */}
        <Accordion>
          {/* Metadata */}
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
              />
              <TextInput
                source="metadata.keywords"
                label="manifestation.management.metadata.keywords"
              />
              <TextInput
                source="metadata.description"
                label="manifestation.management.metadata.description"
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
              <h4>Textos</h4>
              <h5>Titulos</h5>
              <TextInput
                source="styles.text.title.font"
                label="manifestation.management.styles.text.title.font"
              />
              <ColorInput
                source="styles.text.title.color"
                label="manifestation.management.styles.text.title.color"
              />
              <h5>Subtitulos</h5>
              <TextInput
                source="styles.text.subtitle.font"
                label="manifestation.management.styles.text.subtitle.font"
              />
              <ColorInput
                source="styles.text.subtitle.color"
                label="manifestation.management.styles.text.subtitle.color"
              />
              <h5>Body</h5>
              <TextInput
                source="styles.text.body.font"
                label="manifestation.management.styles.text.body.font"
              />
              <ColorInput
                source="styles.text.body.color"
                label="manifestation.management.styles.text.body.color"
              />
              <h4>Thumbnails</h4>
              <NumberInput
                step={1}
                min={7}
                max={10}
                source="styles.thumbnails.columns"
                label="manifestation.management.styles.thumbnails.columns"
              />
              <h5>Colors</h5>
              <ColorInput
                source="styles.thumbnails.colors.hover"
                label="manifestation.management.styles.thumbnails.colors.hover"
              />
              <ColorInput
                source="styles.thumbnails.colors.border"
                label="manifestation.management.styles.thumbnails.colors.border"
              />
              <h4>Cards</h4>
              <BooleanInput
                source="styles.cards.darkmode"
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
                <ImageField source="src" title="title" />
              </ImageInput>
              <ImageInput
                source="images.favicon"
                label="manifestation.management.images.favicon"
                multiple={false}
                accept="image/*"
                placeholder={<p>Drop your file here</p>}
              >
                <ImageField source="src" title="title" />
              </ImageInput>
              <h5>og</h5>
              <ImageInput
                source="images.twitter"
                label="manifestation.management.images.twitter"
                multiple={false}
                accept="image/*"
                placeholder={<p>Drop your file here</p>}
              >
                <ImageField source="src" title="title" />
              </ImageInput>
              <ImageInput
                source="images.facebook"
                label="manifestation.management.images.facebook"
                multiple={false}
                accept="image/*"
                placeholder={<p>Drop your file here</p>}
              >
                <ImageField source="src" title="title" />
              </ImageInput>
            </div>
          </AccordionDetails>
        </Accordion>
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
      </SimpleForm>
    </Edit>
  );
};
