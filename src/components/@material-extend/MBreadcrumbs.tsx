import { Box, Breadcrumbs, BreadcrumbsProps, Link, Typography } from '@mui/material';
import { last } from 'lodash';
import { Link as RouterLink } from 'react-router-dom';

const Separator: React.ReactNode = (
  <Box
    component="span"
    sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }}
  />
);

type LinkItemType = {
  href: string;
  name: string;
  icon: any;
};

function LinkItem({ link }: { link: LinkItemType }) {
  const { href, name, icon } = link;
  return (
    <Link
      to={href}
      key={name}
      variant="body2"
      component={RouterLink}
      sx={{
        lineHeight: 2,
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        '& > div': { display: 'inherit' }
      }}
    >
      {icon && (
        <Box
          sx={{
            mr: 1,
            '& svg': { width: 20, height: 20 }
          }}
        >
          {icon}
        </Box>
      )}
      {name}
    </Link>
  );
}

interface MBreadcrumbsType extends BreadcrumbsProps {
  activeLast?: boolean;
  links: LinkItemType[];
}

export default function MBreadcrumbs({ links, activeLast = false, ...other }: MBreadcrumbsType) {
  const currentLink: string = last<any>(links).name;

  const listDefault = links.map((link: LinkItemType) => <LinkItem key={link.name} link={link} />);
  const listActiveLast = links.map((link: LinkItemType) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'text.disabled',
            textOverflow: 'ellipsis'
          }}
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <Breadcrumbs separator={Separator} {...other}>
      {activeLast ? listDefault : listActiveLast}
    </Breadcrumbs>
  );
}
