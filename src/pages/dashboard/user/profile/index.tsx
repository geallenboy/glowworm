import heartFill from '@iconify/icons-eva/heart-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import roundAccountBox from '@iconify/icons-ic/round-account-box';
import roundPermMedia from '@iconify/icons-ic/round-perm-media';
import { Icon } from '@iconify/react';
import { Box, Card, Container, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_admin } from '@/config';
import useAuth from '@/hooks/useAuth';
import useSettings from '@/hooks/useSettings';
import {
  getFollowers,
  getFriends,
  getGallery,
  getPosts,
  getProfile,
  onToggleFollow
} from '@/redux/slices/user';
import { useDispatch, useSelector } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import { Cover, Followers, Friends, Gallery, Profile } from './modules';

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center'
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3)
  }
}));

export default function UserProfile() {
  const { themeStretch } = useSettings();
  const dispatch: any = useDispatch();
  const { myProfile, posts, followers, friends, gallery } = useSelector((state: any) => state.user);
  const { user } = useAuth();
  const [currentTab, setCurrentTab] = useState('简介');
  const [findFriends, setFindFriends] = useState('');

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getPosts());
    dispatch(getFollowers());
    dispatch(getFriends());
    dispatch(getGallery());
  }, [dispatch]);

  const handleChangeTab = (event: any, newValue: any) => {
    setCurrentTab(newValue);
  };

  const handleToggleFollow = (followerId: any) => {
    dispatch(onToggleFollow(followerId));
  };

  const handleFindFriends = (event: any) => {
    setFindFriends(event.target.value);
  };

  if (!myProfile) {
    return null;
  }

  const PROFILE_TABS = [
    {
      value: '简介',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <Profile myProfile={myProfile} posts={posts} />
    },
    {
      value: '关注者',
      icon: <Icon icon={heartFill} width={20} height={20} />,
      component: <Followers followers={followers} onToggleFollow={handleToggleFollow} />
    },
    {
      value: '朋友',
      icon: <Icon icon={peopleFill} width={20} height={20} />,
      component: (
        <Friends friends={friends} findFriends={findFriends} onFindFriends={handleFindFriends} />
      )
    },
    {
      value: '相册',
      icon: <Icon icon={roundPermMedia} width={20} height={20} />,
      component: <Gallery gallery={gallery} />
    }
  ];

  return (
    <Page title={`用户 ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="简介"
          links={[
            { name: '管理', href: PATH_DASHBOARD.root },
            { name: '用户', href: PATH_DASHBOARD.user.root },
            { name: user.displayName }
          ]}
        />
        <Card
          sx={{
            mb: 3,
            height: 280,
            position: 'relative'
          }}
        >
          <Cover myProfile={myProfile} />

          <TabsWrapperStyle>
            <Tabs
              value={currentTab}
              scrollButtons="auto"
              variant="scrollable"
              allowScrollButtonsMobile
              onChange={handleChangeTab}
            >
              {PROFILE_TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={tab.value}
                />
              ))}
            </Tabs>
          </TabsWrapperStyle>
        </Card>

        {PROFILE_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
