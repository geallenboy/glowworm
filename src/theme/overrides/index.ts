import { merge } from 'lodash';

import Button from './Button';

export default function ComponentsOverrides(theme: any) {
  return merge(Button(theme));
}
