import { useState } from 'react';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw } from 'draft-js';
import {
  Box,
  Grid,
  Card,
  Stack,
  Container,
  Typography,
  CardHeader,
  CardContent,
} from '@mui/material';
import DashboardLayout from 'src/layouts/dashboard';
import useSettings from 'src/hooks/useSettings';
import Page from 'src/components/Page';
import { QuillEditor, DraftEditor } from 'src/components/editor';

export default function PageThree() {
  const { themeStretch } = useSettings();
  const [quillContent, setQuillContent] = useState('');
  const [draftContent, setDraftContent] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <DashboardLayout>
      <Page title='页面3'>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Typography variant='h3' component='h1' sx={{ mb: 5 }}>
            编辑
          </Typography>

          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardHeader title='编辑器' />
                <CardContent>
                  <QuillEditor
                    id='simple-editor'
                    value={quillContent}
                    onChange={(value:any) => setQuillContent(value)}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={3} sx={{ height: 1 }}>
                <Card
                  sx={{
                    height: 1,
                    boxShadow: 0,
                    bgcolor: 'background.neutral',
                  }}
                >
                  <CardHeader title='预览纯文本' />
                  <Box
                    sx={{ p: 3 }}
                    dangerouslySetInnerHTML={{ __html: quillContent }}
                  />
                </Card>
                <Card
                  sx={{
                    height: 1,
                    boxShadow: 0,
                    bgcolor: 'background.neutral',
                  }}
                >
                  <CardHeader title='预览Html' />
                  <Typography sx={{ p: 3 }}>{quillContent}</Typography>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardHeader title='草稿编辑器' />
                <CardContent>
                  <DraftEditor
                    editorState={draftContent}
                    onEditorStateChange={(value:any) => setDraftContent(value)}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={3} sx={{ height: 1 }}>
                <Card
                  sx={{
                    height: 1,
                    boxShadow: 0,
                    bgcolor: 'background.neutral',
                  }}
                >
                  <CardHeader title='预览纯文本' />
                  <Typography sx={{ p: 3 }}>
                    {draftContent.getCurrentContent().getPlainText('\u0001')}
                  </Typography>
                </Card>

                <Card
                  sx={{
                    height: 1,
                    boxShadow: 0,
                    bgcolor: 'background.neutral',
                  }}
                >
                  <CardHeader title='预览Html' />
                  <Typography sx={{ p: 3 }}>
                    {draftToHtml(
                      convertToRaw(draftContent.getCurrentContent())
                    )}
                  </Typography>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Page>
    </DashboardLayout>
  );
}
