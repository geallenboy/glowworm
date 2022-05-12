import {
  ArrowDropDown,
  Check,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatColorFill,
  FormatItalic,
  FormatUnderlined,
  ViewList,
  ViewModule,
  ViewQuilt
} from '@mui/icons-material';
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';

import { Block } from '../../Block';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' }
};

export default function ToggleButtons() {
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormats] = useState(() => ['bold', 'italic']);
  const [view, setView] = useState('list');
  const [selected, setSelected] = useState(false);

  const handleAlignment = (event: any, newAlignment: any) => {
    setAlignment(newAlignment);
  };
  const handleFormat = (event: any, newFormats: any) => {
    setFormats(newFormats);
  };
  const handleChange = (event: any, nextView: any) => {
    setView(nextView);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Block title="Exclusive selection" sx={style}>
          <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
            <ToggleButton value="left">
              <FormatAlignLeft />
            </ToggleButton>
            <ToggleButton value="center">
              <FormatAlignCenter />
            </ToggleButton>
            <ToggleButton value="right">
              <FormatAlignRight />
            </ToggleButton>
            <ToggleButton value="justify" disabled>
              <FormatAlignJustify />
            </ToggleButton>
          </ToggleButtonGroup>
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Multiple selection" sx={style}>
          <ToggleButtonGroup value={formats} onChange={handleFormat}>
            <ToggleButton value="bold">
              <FormatBold />
            </ToggleButton>
            <ToggleButton value="italic">
              <FormatItalic />
            </ToggleButton>
            <ToggleButton value="underlined">
              <FormatUnderlined />
            </ToggleButton>
            <ToggleButton value="color" disabled>
              <FormatColorFill />
              <ArrowDropDown />
            </ToggleButton>
          </ToggleButtonGroup>
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Exclusive selection" sx={style}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <ToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={handleAlignment}
              >
                <ToggleButton value="left">
                  <FormatAlignLeft />
                </ToggleButton>
                <ToggleButton value="center">
                  <FormatAlignCenter />
                </ToggleButton>
                <ToggleButton value="right">
                  <FormatAlignRight />
                </ToggleButton>
                <ToggleButton value="justify" disabled>
                  <FormatAlignJustify />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            <Grid item>
              <ToggleButtonGroup
                size="medium"
                value={alignment}
                exclusive
                onChange={handleAlignment}
              >
                <ToggleButton value="left">
                  <FormatAlignLeft />
                </ToggleButton>
                <ToggleButton value="center">
                  <FormatAlignCenter />
                </ToggleButton>
                <ToggleButton value="right">
                  <FormatAlignRight />
                </ToggleButton>
                <ToggleButton value="justify" disabled>
                  <FormatAlignJustify />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            <Grid item>
              <ToggleButtonGroup
                size="large"
                value={alignment}
                exclusive
                onChange={handleAlignment}
              >
                <ToggleButton value="left">
                  <FormatAlignLeft />
                </ToggleButton>
                <ToggleButton value="center">
                  <FormatAlignCenter />
                </ToggleButton>
                <ToggleButton value="right">
                  <FormatAlignRight />
                </ToggleButton>
                <ToggleButton value="justify" disabled>
                  <FormatAlignJustify />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Vertical & Standalone buttons" sx={style}>
          <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
            <ToggleButton value="list">
              <ViewList />
            </ToggleButton>
            <ToggleButton value="module">
              <ViewModule />
            </ToggleButton>
            <ToggleButton value="quilt">
              <ViewQuilt />
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            <Check />
          </ToggleButton>
        </Block>
      </Grid>
    </Grid>
  );
}
