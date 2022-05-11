import { ChevronRight, ExpandMore } from '@mui/icons-material';
import { TreeItem, TreeView } from '@mui/lab';
import { alpha, Box, Collapse, Container, Stack } from '@mui/material';
import { createStyles, styled, withStyles } from '@mui/styles';
import { animated, useSpring } from 'react-spring';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../Block';

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

const TreeViewStyle = styled(TreeView)({
  height: 240,
  flexGrow: 1,
  maxWidth: 400
});

function TransitionComponent(props: any) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(20px,0,0)'
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`
    }
  });
  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const StyledTreeItem = withStyles((theme: any) =>
  createStyles({
    iconContainer: {
      '& .close': {
        opacity: 0.3
      }
    },
    group: {
      marginLeft: 15,
      paddingLeft: 18,
      borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`
    }
  })
)((props: any) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

export default function TreesViewComponent() {
  return (
    <RootStyle title="Components: Tree View | Minimal-UI">
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme: any) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Tree View"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Tree View' }]}
            moreLink="https://next.material-ui.com/components/tree-view"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
          <Block title="Basic">
            <TreeViewStyle
              defaultCollapseIcon={<ExpandMore />}
              defaultExpandIcon={<ChevronRight />}
              defaultEndIcon={null}
            >
              <TreeItem nodeId="1" label="Applications">
                <TreeItem nodeId="2" label="Calendar" />
                <TreeItem nodeId="3" label="Chrome" />
                <TreeItem nodeId="4" label="Webstorm" />
              </TreeItem>
              <TreeItem nodeId="5" label="Documents">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="Material-UI">
                  <TreeItem nodeId="7" label="src">
                    <TreeItem nodeId="8" label="index.js" />
                    <TreeItem nodeId="9" label="tree-view.js" />
                  </TreeItem>
                </TreeItem>
              </TreeItem>
            </TreeViewStyle>
          </Block>

          <Block title="Multi Select">
            <TreeViewStyle
              multiSelect
              defaultCollapseIcon={<ExpandMore />}
              defaultExpandIcon={<ChevronRight />}
              defaultEndIcon={null}
            >
              <TreeItem nodeId="1" label="Applications">
                <TreeItem nodeId="2" label="Calendar" />
                <TreeItem nodeId="3" label="Chrome" />
                <TreeItem nodeId="4" label="Webstorm" />
              </TreeItem>
              <TreeItem nodeId="5" label="Documents">
                <TreeItem nodeId="6" label="Material-UI">
                  <TreeItem nodeId="7" label="src">
                    <TreeItem nodeId="8" label="index.js" />
                    <TreeItem nodeId="9" label="tree-view.js" />
                  </TreeItem>
                </TreeItem>
              </TreeItem>
            </TreeViewStyle>
          </Block>

          <Block title="Customized">
            <TreeViewStyle defaultExpanded={['1']}>
              <StyledTreeItem nodeId="1" label="Main">
                <StyledTreeItem nodeId="2" label="Hello" />
                <StyledTreeItem nodeId="3" label="Subtree with children">
                  <StyledTreeItem nodeId="6" label="Hello" />
                  <StyledTreeItem nodeId="7" label="Sub-subtree with children">
                    <StyledTreeItem nodeId="9" label="Child 1" />
                    <StyledTreeItem nodeId="10" label="Child 2" />
                    <StyledTreeItem nodeId="11" label="Child 3" />
                  </StyledTreeItem>
                  <StyledTreeItem nodeId="8" label="Hello" />
                </StyledTreeItem>
                <StyledTreeItem nodeId="4" label="World" />
                <StyledTreeItem nodeId="5" label="Something something" />
              </StyledTreeItem>
            </TreeViewStyle>
          </Block>
        </Stack>
      </Container>
    </RootStyle>
  );
}
