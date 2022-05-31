import { last } from 'lodash';
import NextLink from 'next/link';
import { Typography, Box, Link, Breadcrumbs } from '@mui/material';

const Separator = (
  <Box
    component='span'
    sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }}
  />
);

function LinkItem({ link }:any) {
  const { href, name, icon } = link;
  return (
    <NextLink key={name} href={href} passHref>
      <Link
        variant='body2'
        sx={{
          lineHeight: 2,
          display: 'flex',
          alignItems: 'center',
          color: 'text.primary',
          '& > div': { display: 'inherit' },
        }}
      >
        {icon && (
          <Box
            sx={{
              mr: 1,
              '& svg': { width: 20, height: 20 },
            }}
          >
            {icon}
          </Box>
        )}
        {name}
      </Link>
    </NextLink>
  );
}


export default function MBreadcrumbs({ links, activeLast = false, ...other }:any) {
  const currentLink = last(links).name ;

  const listDefault = links.map((link:any) => (
    <LinkItem key={link.name} link={link} />
  ));
  const listActiveLast = links.map((link:any) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography
          variant='body2'
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'text.disabled',
            textOverflow: 'ellipsis',
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
