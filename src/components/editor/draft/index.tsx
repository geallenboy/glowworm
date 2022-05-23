import DraftEditorStyle from './DraftEditorStyle';

export default function DraftEditor({ simple = false, error, sx, ...other }) {
  console.log(simple, 'simple', other);
  return (
    <DraftEditorStyle
      sx={{
        ...(error && {
          border: (theme) => `solid 1px ${theme.palette.error.main}`
        }),
        ...sx
      }}
    ></DraftEditorStyle>
  );
}
