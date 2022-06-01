
import dynamic from 'next/dynamic';
import { toolbarFull, toolbarSimple } from './DraftEditorToolbar';
import DraftEditorStyle from './DraftEditorStyle';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod:any) => mod.Editor),
  { ssr: false }
);

export default function DraftEditor({ simple, sx, ...other }:any) {
  return (
    <DraftEditorStyle sx={sx}>
      <Editor
        toolbar={simple ? toolbarSimple : toolbarFull}
        placeholder='Write something awesome...'
        {...other}
      />
    </DraftEditorStyle>
  );
}
