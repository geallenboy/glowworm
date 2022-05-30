import { Collapse, Divider } from '@mui/material';
import { useState } from 'react';

import DetailsReviewForm from './DetailsReviewForm';
import DetailsReviewList from './DetailsReviewList';
import DetailsReviewOverview from './DetailsReviewOverview';

export default function DetailsReview({ product }) {
  const [reviewBox, setReviewBox] = useState(false);

  const handleOpenReviewBox = () => {
    setReviewBox((prev) => !prev);
  };

  const handleCloseReviewBox = () => {
    setReviewBox(false);
  };

  return (
    <>
      <DetailsReviewOverview product={product} onOpen={handleOpenReviewBox} />
      <Divider />
      <Collapse in={reviewBox}>
        <DetailsReviewForm onClose={handleCloseReviewBox} id="move_add_review" />
        <Divider />
      </Collapse>

      <DetailsReviewList product={product} />
    </>
  );
}
