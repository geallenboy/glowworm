import { findIndex } from 'lodash';
import { useEffect, useRef, useState } from 'react';

import LightboxModal from '@/components/LightboxModal';
import Scrollbar from '@/components/Scrollbar';

import ChatMessageItem from './ChatMessageItem';

export default function ChatMessageList({ conversation }: any) {
  const scrollRef: any = useRef();
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  useEffect(() => {
    const scrollMessagesToBottom = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    };
    scrollMessagesToBottom();
  }, [conversation.messages]);

  const images = conversation.messages
    .filter((messages: any) => messages.contentType === 'image')
    .map((messages: any) => messages.body);

  const handleOpenLightbox = (url: string) => {
    const selectedImage = findIndex(images, (index) => index === url);
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <Scrollbar scrollableNodeProps={{ ref: scrollRef }} sx={{ p: 3, flexGrow: 1 }}>
      {conversation.messages.map((message: any) => (
        <ChatMessageItem
          key={message.id}
          message={message}
          conversation={conversation}
          onOpenLightbox={handleOpenLightbox}
        />
      ))}

      <LightboxModal
        images={images}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onClose={() => setOpenLightbox(false)}
      />
    </Scrollbar>
  );
}
