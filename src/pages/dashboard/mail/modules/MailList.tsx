import { Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import EmptyContent from '@/components/EmptyContent';
import Scrollbar from '@/components/Scrollbar';
import { getMails } from '@/redux/slices/mail';
import { useDispatch, useSelector } from '@/redux/store';

import MailItem from './MailItem';
import MailToolbar from './MailToolbar';

const RootStyle = styled('div')({
  flexGrow: 1,
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column'
});

export default function MailList({ onOpenSidebar }: any) {
  const params = useParams();
  const dispatch: any = useDispatch();
  const { mails } = useSelector((state: any) => state.mail);
  const [selectedMails, setSelectedMails] = useState([]);
  const [dense, setDense] = useState(false);
  const isEmpty = mails.allIds.length < 1;

  useEffect(() => {
    dispatch(getMails(params));
  }, [dispatch, params]);

  const handleSelectAllMails = () => {
    setSelectedMails(mails.allIds.map((mailId: any) => mailId));
  };

  const handleToggleDense = () => {
    setDense((prev) => !prev);
  };

  const handleDeselectAllMails = () => {
    setSelectedMails([]);
  };

  const handleSelectOneMail = (mailId: any) => {
    setSelectedMails((prevSelectedMails: any) => {
      if (!prevSelectedMails.includes(mailId)) {
        return [...prevSelectedMails, mailId];
      }
      return prevSelectedMails;
    });
  };

  const handleDeselectOneMail = (mailId: any) => {
    setSelectedMails((prevSelectedMails) => prevSelectedMails.filter((id) => id !== mailId));
  };

  return (
    <RootStyle>
      <MailToolbar
        mails={mails.allIds.length}
        selectedMails={selectedMails.length}
        onSelectAll={handleSelectAllMails}
        onOpenSidebar={onOpenSidebar}
        onDeselectAll={handleDeselectAllMails}
        onToggleDense={handleToggleDense}
      />

      <Divider />

      {!isEmpty ? (
        <Scrollbar>
          <Box sx={{ minWidth: { md: 800 } }}>
            {mails.allIds.map((mailId: never) => (
              <MailItem
                key={mailId}
                isDense={dense}
                mail={mails.byId[mailId]}
                isSelected={selectedMails.includes(mailId)}
                onSelect={() => handleSelectOneMail(mailId)}
                onDeselect={() => handleDeselectOneMail(mailId)}
              />
            ))}
          </Box>
        </Scrollbar>
      ) : (
        <EmptyContent
          title="没有对话"
          img="/static/illustrations/illustration_empty_mail.svg"
          sx={{ flexGrow: 1, height: 'auto' }}
        />
      )}
    </RootStyle>
  );
}
